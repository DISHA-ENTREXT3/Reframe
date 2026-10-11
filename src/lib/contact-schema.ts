import { z } from "zod";
export const contactSchema = z.object({
 name: z.string().trim().min(2, "Please enter your full name.").max(100),
 email: z.string().trim().email("Please enter a valid work email.").max(255),
 firm: z.string().trim().min(2, "Please enter your firm’s name.").max(150),
 role: z.string().trim().min(2, "Please enter your role.").max(100),
 service: z.enum(["Partner-led content", "Portfolio storytelling", "Content repurposing", "Video & YouTube", "Executive positioning", "Not sure yet"]),
 message: z.string().trim().max(3000, "Please keep your message under 3,000 characters."),
 consent: z.boolean().refine(value => value, "Please agree to the privacy notice."),
 website: z.string().max(0, "Unable to submit this inquiry."),
});