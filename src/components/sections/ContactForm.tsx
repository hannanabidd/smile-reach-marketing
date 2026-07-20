"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, type FieldValues, type Path, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import FormField, { fieldInputClass } from "@/components/ui/FormField";
import {
  practiceSchema,
  schoolSchema,
  otherSchema,
  type PracticeFormValues,
  type SchoolFormValues,
  type OtherFormValues,
} from "@/lib/contact-schema";
import { submitContactForm } from "@/app/contact/actions";
import { SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site";

export type Intent = "practice" | "school" | "other";

const INTENT_OPTIONS: { value: Intent; label: string; description: string }[] = [
  {
    value: "practice",
    label: "A Practice",
    description: "Practice interested in sponsoring",
  },
  {
    value: "school",
    label: "A School",
    description: "School looking for tags",
  },
  {
    value: "other",
    label: "Something Else",
    description: "Something else",
  },
];

// Hidden from sighted users, present in the DOM for bots that auto-fill
// fields humans never see. Generic over each form's own field values, since
// every contact schema carries the same "website" honeypot field.
function Honeypot<T extends FieldValues>({ register }: { register: UseFormRegister<T> }) {
  return (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label htmlFor="website">Leave this field blank</label>
      <input
        id="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("website" as Path<T>)}
      />
    </div>
  );
}

function PracticeForm({
  initialHelp,
  onSuccess,
}: {
  initialHelp?: string;
  onSuccess: (name: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<PracticeFormValues>({
    resolver: zodResolver(practiceSchema),
    defaultValues: {
      intent: "practice",
      helpWith: (["availability", "pricing", "consultation", "general"] as const).includes(
        initialHelp as never
      )
        ? (initialHelp as PracticeFormValues["helpWith"])
        : "availability",
    },
  });

  const onSubmit = async (values: PracticeFormValues) => {
    const result = await submitContactForm(values);
    if (result.success) {
      onSuccess(values.name);
    } else {
      setError("root", { message: result.error });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot register={register} />

      <FormField label="Your name" htmlFor="p-name" required error={errors.name?.message}>
        <input id="p-name" className={fieldInputClass} {...register("name")} />
      </FormField>

      <FormField label="Practice name" htmlFor="p-practice" required error={errors.practiceName?.message}>
        <input id="p-practice" className={fieldInputClass} {...register("practiceName")} />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Email" htmlFor="p-email" required error={errors.email?.message}>
          <input id="p-email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="p-phone" error={errors.phone?.message}>
          <input id="p-phone" type="tel" className={fieldInputClass} {...register("phone")} />
        </FormField>
      </div>

      <FormField
        label="Your city or service area"
        htmlFor="p-area"
        required
        error={errors.area?.message}
      >
        <input id="p-area" className={fieldInputClass} {...register("area")} />
      </FormField>

      <FormField label="What can we help with?" htmlFor="p-help" required error={errors.helpWith?.message}>
        <select id="p-help" className={fieldInputClass} {...register("helpWith")}>
          <option value="availability">Check availability in my area</option>
          <option value="pricing">Request pricing</option>
          <option value="consultation">Schedule a consultation</option>
          <option value="general">General question</option>
        </select>
      </FormField>

      <FormField label="Message" htmlFor="p-message" error={errors.message?.message}>
        <textarea id="p-message" rows={4} className={fieldInputClass} {...register("message")} />
      </FormField>

      <ConsentField id="p-consent" register={register} error={errors.consent?.message} />

      {errors.root?.message ? (
        <p role="alert" className="text-sm text-red-700">
          {errors.root.message}
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}

function SchoolForm({ onSuccess }: { onSuccess: (name: string) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SchoolFormValues>({
    resolver: zodResolver(schoolSchema),
    defaultValues: { intent: "school" },
  });

  const onSubmit = async (values: SchoolFormValues) => {
    const result = await submitContactForm(values);
    if (result.success) {
      onSuccess(values.name);
    } else {
      setError("root", { message: result.error });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot register={register} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Your name" htmlFor="s-name" required error={errors.name?.message}>
          <input id="s-name" className={fieldInputClass} {...register("name")} />
        </FormField>
        <FormField label="Your role" htmlFor="s-role" error={errors.role?.message}>
          <input
            id="s-role"
            placeholder="Principal, office admin, PTA…"
            className={fieldInputClass}
            {...register("role")}
          />
        </FormField>
      </div>

      <FormField label="School name" htmlFor="s-school" required error={errors.schoolName?.message}>
        <input id="s-school" className={fieldInputClass} {...register("schoolName")} />
      </FormField>

      <FormField
        label="School city and state"
        htmlFor="s-location"
        required
        error={errors.schoolLocation?.message}
      >
        <input id="s-location" className={fieldInputClass} {...register("schoolLocation")} />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Email" htmlFor="s-email" required error={errors.email?.message}>
          <input id="s-email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="s-phone" error={errors.phone?.message}>
          <input id="s-phone" type="tel" className={fieldInputClass} {...register("phone")} />
        </FormField>
      </div>

      <FormField
        label="Approx. number of car-rider families"
        htmlFor="s-count"
        error={errors.carRiderCount?.message}
      >
        <input id="s-count" inputMode="numeric" className={fieldInputClass} {...register("carRiderCount")} />
      </FormField>

      <FormField label="Message" htmlFor="s-message" error={errors.message?.message}>
        <textarea id="s-message" rows={4} className={fieldInputClass} {...register("message")} />
      </FormField>

      <ConsentField id="s-consent" register={register} error={errors.consent?.message} />

      {errors.root?.message ? (
        <p role="alert" className="text-sm text-red-700">
          {errors.root.message}
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}

function OtherForm({ onSuccess }: { onSuccess: (name: string) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<OtherFormValues>({
    resolver: zodResolver(otherSchema),
    defaultValues: { intent: "other" },
  });

  const onSubmit = async (values: OtherFormValues) => {
    const result = await submitContactForm(values);
    if (result.success) {
      onSuccess(values.name);
    } else {
      setError("root", { message: result.error });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot register={register} />

      <FormField label="Your name" htmlFor="o-name" required error={errors.name?.message}>
        <input id="o-name" className={fieldInputClass} {...register("name")} />
      </FormField>

      <FormField label="Email" htmlFor="o-email" required error={errors.email?.message}>
        <input id="o-email" type="email" className={fieldInputClass} {...register("email")} />
      </FormField>

      <FormField label="Message" htmlFor="o-message" error={errors.message?.message}>
        <textarea id="o-message" rows={4} className={fieldInputClass} {...register("message")} />
      </FormField>

      <ConsentField id="o-consent" register={register} error={errors.consent?.message} />

      {errors.root?.message ? (
        <p role="alert" className="text-sm text-red-700">
          {errors.root.message}
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}

function ConsentField<T extends FieldValues>({
  id,
  register,
  error,
}: {
  id: string;
  register: UseFormRegister<T>;
  error?: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 rounded border-sky text-blue focus-visible:outline-3 focus-visible:outline-blue focus-visible:outline-offset-3"
          {...register("consent" as Path<T>)}
        />
        <label htmlFor={id} className="text-sm text-charcoal/90">
          I agree to be contacted about this enquiry and have read the{" "}
          <a href="/privacy" className="font-semibold text-blue-text hover:underline">
            Privacy Policy
          </a>
          . <span className="text-charcoal/50">(required)</span>
        </label>
      </div>
      {error ? (
        <p role="alert" className="mt-1.5 ml-8 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm({
  defaultIntent = "practice",
}: {
  defaultIntent?: Intent;
} = {}) {
  const searchParams = useSearchParams();
  const initialIntent = (searchParams.get("intent") as Intent) ?? defaultIntent;
  const initialHelp = searchParams.get("help") ?? undefined;

  const [intent, setIntent] = useState<Intent>(
    INTENT_OPTIONS.some((o) => o.value === initialIntent) ? initialIntent : defaultIntent
  );
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  if (submittedName) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card border border-sky bg-sky p-8 text-center"
      >
        <p className="text-display-3 font-bold text-navy">
          Thanks, {submittedName}.
        </p>
        <p className="text-body mt-3 text-charcoal/90">
          We have your details and will be in touch as quickly as we can. If
          it is urgent, call{" "}
          <a href={SITE_PHONE_HREF} className="font-semibold text-blue-text">
            {SITE_PHONE}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <fieldset>
        <legend className="text-[15px] font-semibold text-navy">I am a…</legend>
        <div role="radiogroup" className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {INTENT_OPTIONS.map((option) => {
            const active = intent === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={active}
                aria-label={option.description}
                onClick={() => setIntent(option.value)}
                className={`min-h-12 rounded-[12px] border px-4 text-[14px] font-semibold whitespace-nowrap transition-colors ${
                  active
                    ? "border-blue bg-blue text-white"
                    : "border-sky bg-white text-navy hover:bg-sky"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <motion.div
        key={intent}
        initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-6"
      >
        {intent === "practice" ? (
          <PracticeForm initialHelp={initialHelp} onSuccess={setSubmittedName} />
        ) : intent === "school" ? (
          <SchoolForm onSuccess={setSubmittedName} />
        ) : (
          <OtherForm onSuccess={setSubmittedName} />
        )}
      </motion.div>
    </div>
  );
}
