"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-88px)] w-full items-end overflow-hidden bg-navy"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 top-[-10%] h-[120%] w-full">
        <Image
          src="/Images/hero-pickup-line.png"
          alt="A Parent Pick-Up Tag hanging from a car mirror during school dismissal, with families lined up outside an elementary school"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "38% 45%" }}
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-navy/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-navy/60 via-navy/10 to-transparent"
      />

      <Container className="relative z-10 pt-32 pb-16 sm:pb-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-180"
        >
          <Eyebrow light>School Sponsorship Marketing</Eyebrow>
          <h1 className="text-display-1 font-extrabold !text-white">
            Reach thousands of local families through their schools
          </h1>
          <p className="text-body-lg mt-6 max-w-140 text-white/85">
            Smile Reach Marketing connects orthodontists, pediatric dentists,
            and family-focused businesses with local families through
            exclusive school sponsorship opportunities. Our flagship program
            lets your practice sponsor the Parent Pick-Up Tags families use
            every single school day, putting your name in the car with them
            while helping schools run a safer, faster dismissal.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/contact" variant="ghost-light">
              Check Availability in Your Area
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Trusted by practices including{" "}
            <span className="font-semibold text-white">
              Everglades Pediatric Dentistry
            </span>{" "}
            and <span className="font-semibold text-white">Holt Ortho</span>.
          </p>
        </motion.div>
      </Container>

      {!reduceMotion ? (
        <motion.div
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      ) : null}
    </section>
  );
}
