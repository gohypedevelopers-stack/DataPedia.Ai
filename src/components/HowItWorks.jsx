import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Store, Package, Banknote, ArrowRight } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Fill Out the Onboarding Form",
    description:
      "Tell us a bit about your business, tools you use, and where you face bottlenecks. This helps us understand what parts of your workflow can be automated for better results.",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    number: "02",
    icon: Store,
    title: "Discovery Call",
    description:
      "We’ll hop on a call to dig deeper into your current processes, challenges, and goals. This helps us map out automation opportunities tailored to your needs.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    number: "03",
    icon: Package,
    title: "Automation Setup",
    description:
      "We set up the right tools, integrations, and systems to automate your daily tasks — from lead routing and follow-ups to internal notifications and task tracking.",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Workflow Design & Review",
    description:
      "Our team builds smart, easy-to-manage workflows for your key processes. Once ready, we walk you through everything to make sure it’s exactly what you need before going live.",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    number: "05",
    icon: Banknote,
    title: "Time Saved, Workflows Working",
    description:
      "We set up the right tools, integrations, and systems to automate your daily tasks — from lead routing and follow-ups to internal notifications and task tracking.",
    gradient: "from-amber-500 to-yellow-400",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const sectionBg = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [
      "radial-gradient(circle at 20% 20%, #ffffff 0%, #f8f5e8 45%, #f3ecd2 100%)",
      "radial-gradient(circle at 70% 30%, #f7ffe9 0%, #e9f6d7 55%, #d8f0c3 100%)",
      "radial-gradient(circle at 50% 20%, #f1ffe4 0%, #dff5c9 55%, #c8eeb2 100%)",
    ]
  );

  return (
    <motion.section
      id="how"
      className="relative overflow-hidden bg-[#f6edd1] py-16 text-[#1b1b14] md:py-24"
      style={{ backgroundImage: sectionBg }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#e8d6a8] blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#f1e2b9] blur-[140px]" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full bg-[#1b1b14] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6edd1]">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Simple Process to Automate
            <br className="hidden md:block" /> GTM workflows
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5c533c] md:text-lg">
            A clean, guided flow that keeps your team aligned and your
            automation live fast.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#d9caa1] md:block">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#1b1b14] via-[#6f5c2a] to-[#1b1b14]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -50 : 50 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      className="how-card group rounded-2xl border border-[#d9caa1] bg-gradient-to-br from-[#fff6dc] via-[#fbf1d3] to-[#f3e2b4] p-6 shadow-[0_10px_30px_rgba(27,27,20,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#1b1b14]/50 hover:shadow-[0_18px_45px_rgba(27,27,20,0.18)]"
                      whileHover={{ y: -6 }}
                    >
                      <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a2b] md:hidden">
                        Step <span className="text-lg">{step.number}</span>
                      </div>

                      {index !== 0 &&
                        index !== 1 &&
                        index !== 2 &&
                        index !== 3 &&
                        index !== 4 && (
                        <div
                          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform group-hover:scale-110`}
                        >
                          <IconComponent className="h-6 w-6 text-[#1b1b14]" />
                        </div>
                      )}

                      <h3 className="how-card-title mb-3 text-[1.125rem] font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#5c533c]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                    <motion.div
                      className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-lg font-bold text-[#1b1b14] shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        bounce: 0.45,
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="mb-4 text-sm text-[#6b5a2b]">
            Ready to start your journey?
          </p>
          <motion.a
            href="/signup"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b1b14] transition-all hover:gap-4"
            whileHover={{ scale: 1.03 }}
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
