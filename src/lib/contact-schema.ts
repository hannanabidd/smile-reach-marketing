import { z } from "zod";

export const practiceSchema = z.object({
  intent: z.literal("practice"),
  name: z.string().trim().min(1, "Your name is required"),
  practiceName: z.string().trim().min(1, "Practice name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().optional(),
  area: z.string().trim().min(1, "Your city or service area is required"),
  helpWith: z.enum(["availability", "pricing", "consultation", "general"], {
    message: "Choose what you'd like help with",
  }),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    message: "You must agree before sending this form",
  }),
  website: z.string().max(0).optional(),
});

export const schoolSchema = z.object({
  intent: z.literal("school"),
  name: z.string().trim().min(1, "Your name is required"),
  role: z.string().trim().optional(),
  schoolName: z.string().trim().min(1, "School name is required"),
  schoolLocation: z.string().trim().min(1, "School city and state are required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().optional(),
  carRiderCount: z.string().trim().optional(),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    message: "You must agree before sending this form",
  }),
  website: z.string().max(0).optional(),
});

export const otherSchema = z.object({
  intent: z.literal("other"),
  name: z.string().trim().min(1, "Your name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    message: "You must agree before sending this form",
  }),
  website: z.string().max(0).optional(),
});

export const contactSchema = z.discriminatedUnion("intent", [
  practiceSchema,
  schoolSchema,
  otherSchema,
]);

export type ContactFormValues = z.infer<typeof contactSchema>;
export type PracticeFormValues = z.infer<typeof practiceSchema>;
export type SchoolFormValues = z.infer<typeof schoolSchema>;
export type OtherFormValues = z.infer<typeof otherSchema>;
