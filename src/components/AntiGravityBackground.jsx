import React, { useEffect, useRef } from "react";
import "./AntiGravityBackground.css";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const lerp = (a, b, t) => a + (b - a) * t;

function createStarburstShape(ctx, cx, cy, r, points = 10, inner = 0.45) {
    // Asterisk-like starburst (thin strokes)
    ctx.beginPath();
    const step = (Math.PI * 2) / points;
    for (let i = 0; i < points; i++) {
        const a = i * step;
        const x1 = cx + Math.cos(a) * r;
        const y1 = cy + Math.sin(a) * r;
        const x2 = cx + Math.cos(a + step / 2) * (r * inner);
        const y2 = cy + Math.sin(a + step / 2) * (r * inner);
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    ctx.closePath();
}

function drawDottedBezier(ctx, x1, y1, cx1, cy1, cx2, cy2, x2, y2, dotStep = 12, dotR = 2) {
    // sample points along cubic bezier and draw dots
    const samples = 140;
    let prevX = x1, prevY = y1;
    let acc = 0;

    const bez = (t) => {
        const mt = 1 - t;
        const x =
            mt * mt * mt * x1 +
            3 * mt * mt * t * cx1 +
            3 * mt * t * t * cx2 +
            t * t * t * x2;
        const y =
            mt * mt * mt * y1 +
            3 * mt * mt * t * cy1 +
            3 * mt * t * t * cy2 +
            t * t * t * y2;
        return { x, y };
    };

    for (let i = 1; i <= samples; i++) {
        const t = i / samples;
        const p = bez(t);
        const dx = p.x - prevX;
        const dy = p.y - prevY;
        const dist = Math.hypot(dx, dy);
        acc += dist;

        while (acc >= dotStep) {
            const overshoot = acc - dotStep;
            const ratio = dist > 0 ? (dist - overshoot) / dist : 0;
            const px = prevX + dx * ratio;
            const py = prevY + dy * ratio;

            ctx.beginPath();
            ctx.arc(px, py, dotR, 0, Math.PI * 2);
            ctx.fill();

            acc -= dotStep;
        }

        prevX = p.x;
        prevY = p.y;
    }
}

export default function AntiGravityBackground({ intensity = 1, className = "", children }) {
    const wrapRef = useRef(null);
    const canvasRef = useRef(null);

    const stateRef = useRef({
        dpr: 1,
        w: 0,
        h: 0,
        raf: 0,
        lastT: 0,
        mouse: { x: -9999, y: -9999, active: false },
        scrollY: 0,
        scrollSmoothed: 0,
        particles: [],
        trails: [],
    });

    useEffect(() => {
        const wrap = wrapRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const ctx = canvas.getContext("2d");

        // Tunables (Applied "more ditto" tuning from prompt)
        const CFG = {
            // counts
            starCount: 0, // Removed golden particles
            circleCount: 14,

            // physics matched to "more ditto" request
            spring: 0.015 * intensity,
            friction: 0.92,
            mouseRadius: 220,
            mouseForce: 1.1 * intensity,
            maxRepel: 1.6 * intensity,

            // drift (idle motion)
            driftAmp: 0.18,
            driftSpeed: 0.0012,

            // visuals (Dark Theme: Light/Gold particles)
            starStroke: "rgba(216, 174, 94, 0.7)", // Gold stroke #d8ae5e
            circleFill: "rgba(255, 255, 255, 0.15)", // White faint fill
            trailFill: "rgba(216, 174, 94, 0.2)", // Gold faint trail #d8ae5e
            starLineWidth: 1.2,
        };

        function resize() {
            const rect = wrap.getBoundingClientRect();
            const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
            stateRef.current.dpr = dpr;
            stateRef.current.w = rect.width;
            stateRef.current.h = rect.height;

            canvas.width = Math.floor(rect.width * dpr);
            canvas.height = Math.floor(rect.height * dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function seed() {
            const { w, h } = stateRef.current;
            const rand = (a, b) => a + Math.random() * (b - a);

            const particles = [];
            const trails = [];

            // starbursts
            for (let i = 0; i < CFG.starCount; i++) {
                const x0 = rand(w * 0.12, w * 0.88);
                const y0 = rand(h * 0.14, h * 0.86);
                const size = rand(10, 22);
                const points = Math.round(rand(8, 12));
                const inner = rand(0.38, 0.55);

                particles.push({
                    type: "star",
                    x0, y0,
                    ox0: x0, oy0: y0, // original base (for parallax)
                    x: x0, y: y0,
                    vx: 0, vy: 0,
                    size,
                    points,
                    inner,
                    driftPhase: rand(0, Math.PI * 2),
                    parallax: rand(0.018, 0.045),
                });

                // attach some dotted trails to some stars
                if (Math.random() < 0.55) {
                    const dx = rand(-160, 160);
                    const dy = rand(-120, 120);

                    const x1 = x0 + rand(-40, 40);
                    const y1 = y0 + rand(-40, 40);
                    const x2 = clamp(x0 + dx, 40, w - 40);
                    const y2 = clamp(y0 + dy, 40, h - 40);

                    const cx1 = lerp(x1, x2, 0.35) + rand(-90, 90);
                    const cy1 = lerp(y1, y2, 0.35) + rand(-70, 70);
                    const cx2 = lerp(x1, x2, 0.7) + rand(-90, 90);
                    const cy2 = lerp(y1, y2, 0.7) + rand(-70, 70);

                    trails.push({
                        anchorIndex: particles.length - 1, // bind to last star
                        x1, y1, cx1, cy1, cx2, cy2, x2, y2,
                        dotStep: rand(10, 14),
                        dotR: rand(1.6, 2.3),
                        wobble: rand(0.5, 1.2),
                    });
                }
            }

            // circles
            for (let i = 0; i < CFG.circleCount; i++) {
                const x0 = rand(w * 0.08, w * 0.92);
                const y0 = rand(h * 0.12, h * 0.92);
                const r = rand(2, 5);

                particles.push({
                    type: "circle",
                    x0, y0,
                    ox0: x0, oy0: y0,
                    x: x0, y: y0,
                    vx: 0, vy: 0,
                    r,
                    driftPhase: rand(0, Math.PI * 2),
                    parallax: rand(0.01, 0.035),
                });
            }

            stateRef.current.particles = particles;
            stateRef.current.trails = trails;
        }

        function onMove(e) {
            const rect = wrap.getBoundingClientRect();
            stateRef.current.mouse.x = e.clientX - rect.left;
            stateRef.current.mouse.y = e.clientY - rect.top;
            stateRef.current.mouse.active = true;
        }

        function onLeave() {
            stateRef.current.mouse.active = false;
            stateRef.current.mouse.x = -9999;
            stateRef.current.mouse.y = -9999;
        }

        function onScroll() {
            stateRef.current.scrollY = window.scrollY || 0;
        }

        function step(t) {
            const s = stateRef.current;
            const dt = s.lastT ? Math.min(32, t - s.lastT) : 16;
            s.lastT = t;

            // smooth scroll (parallax)
            s.scrollSmoothed = lerp(s.scrollSmoothed, s.scrollY, 0.08);

            // clear
            ctx.clearRect(0, 0, s.w, s.h);

            // Trails (draw first)
            ctx.fillStyle = CFG.trailFill;
            for (const tr of s.trails) {
                const p = s.particles[tr.anchorIndex];
                if (!p) continue;

                // very subtle wobble tied to time
                const wob = Math.sin(t * 0.001 * tr.wobble) * 6;

                drawDottedBezier(
                    ctx,
                    tr.x1 + wob,
                    tr.y1 - wob,
                    tr.cx1,
                    tr.cy1,
                    tr.cx2,
                    tr.cy2,
                    tr.x2 - wob,
                    tr.y2 + wob,
                    tr.dotStep,
                    tr.dotR
                );
            }

            // Particles physics + draw
            const mx = s.mouse.x;
            const my = s.mouse.y;
            const hasMouse = s.mouse.active;

            for (const p of s.particles) {
                // update base with subtle parallax
                const baseY = p.oy0 + s.scrollSmoothed * p.parallax;
                const baseX = p.ox0;

                // idle drift (tiny)
                const drift = Math.sin(t * CFG.driftSpeed + p.driftPhase) * CFG.driftAmp;
                const targetX0 = baseX + drift;
                const targetY0 = baseY + drift;

                // spring back force
                let ax = (targetX0 - p.x) * CFG.spring;
                let ay = (targetY0 - p.y) * CFG.spring;

                // mouse repulsion
                if (hasMouse) {
                    const dx = p.x - mx;
                    const dy = p.y - my;
                    const dist = Math.hypot(dx, dy);

                    if (dist < CFG.mouseRadius) {
                        const nx = dx / (dist || 1);
                        const ny = dy / (dist || 1);

                        // stronger near center
                        const falloff = 1 - dist / CFG.mouseRadius;
                        const repel = clamp(falloff * CFG.mouseForce, 0, CFG.maxRepel);

                        ax += nx * repel;
                        ay += ny * repel;
                    }
                }

                // integrate
                p.vx = (p.vx + ax * (dt / 16)) * CFG.friction;
                p.vy = (p.vy + ay * (dt / 16)) * CFG.friction;

                p.x += p.vx;
                p.y += p.vy;

                // draw
                if (p.type === "circle") {
                    ctx.beginPath();
                    ctx.fillStyle = CFG.circleFill;
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.save();
                    ctx.strokeStyle = CFG.starStroke;
                    ctx.lineWidth = CFG.starLineWidth;
                    ctx.translate(p.x, p.y);
                    ctx.rotate(Math.sin(t * 0.0008 + p.driftPhase) * 0.15);
                    ctx.translate(-p.x, -p.y);

                    createStarburstShape(ctx, p.x, p.y, p.size, p.points, p.inner);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            s.raf = requestAnimationFrame(step);
        }

        // init
        resize();
        seed();

        const ro = new ResizeObserver(() => {
            resize();
            seed(); // re-seed on size for consistent layout
        });
        ro.observe(wrap);

        wrap.addEventListener("mousemove", onMove);
        wrap.addEventListener("mouseleave", onLeave);
        window.addEventListener("scroll", onScroll, { passive: true });

        stateRef.current.raf = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(stateRef.current.raf);
            ro.disconnect();
            wrap.removeEventListener("mousemove", onMove);
            wrap.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("scroll", onScroll);
        };
    }, [intensity]);

    return (
        <div ref={wrapRef} className={`antiGravityWrap ${className}`}>
            <canvas ref={canvasRef} className="antiGravityCanvas" />
            <div className="antiGravityContent">{children}</div>
        </div>
    );
}
