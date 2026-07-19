"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RoiCalculator() {
  const [patientValue, setPatientValue] = useState("");
  const [sponsorshipCost, setSponsorshipCost] = useState("");
  const reduceMotion = useReducedMotion();

  const value = Number(patientValue);
  const cost = Number(sponsorshipCost);
  const hasValidInput = value > 0 && cost > 0;
  const breakEven = hasValidInput ? Math.ceil(cost / value) : null;

  return (
    <div className="rounded-card border border-sky bg-white p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[15px] font-semibold text-navy">
            What is one new patient worth to your practice?
          </span>
          <div className="mt-2 flex items-center rounded-[12px] border border-sky bg-gray px-4 focus-within:border-blue">
            <span className="text-charcoal/60">$</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={patientValue}
              onChange={(e) => setPatientValue(e.target.value)}
              placeholder="5000"
              className="min-h-12 w-full bg-transparent px-2 text-[17px] text-charcoal outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-[15px] font-semibold text-navy">
            Estimated sponsorship cost
          </span>
          <div className="mt-2 flex items-center rounded-[12px] border border-sky bg-gray px-4 focus-within:border-blue">
            <span className="text-charcoal/60">$</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={sponsorshipCost}
              onChange={(e) => setSponsorshipCost(e.target.value)}
              placeholder="1500"
              className="min-h-12 w-full bg-transparent px-2 text-[17px] text-charcoal outline-none"
            />
          </div>
        </label>
      </div>

      <div className="mt-6 min-h-16 rounded-[12px] bg-sky px-6 py-5 text-center">
        {hasValidInput ? (
          <p className="text-body text-charcoal/90">
            You break even when{" "}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={breakEven}
                initial={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block text-[20px] font-extrabold text-gold"
              >
                {breakEven}
              </motion.span>
            </AnimatePresence>{" "}
            new patient{breakEven === 1 ? "" : "s"} come from the school.
            After that, it is return.
          </p>
        ) : (
          <p className="text-body text-charcoal/60">
            Enter both figures to see your break-even point.
          </p>
        )}
      </div>
    </div>
  );
}
