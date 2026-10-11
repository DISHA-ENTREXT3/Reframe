import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";
const inquiry = {
  name: "Test reviewer",
  email: "reviewer@example.com",
  firm: "Test firm",
  role: "Partner",
  service: "Not sure yet",
  message: "",
  consent: true,
  website: "",
};
describe("Contact validation", () => {
  it("accepts a complete inquiry and trims values", () => {
    const result = contactSchema.parse({ ...inquiry, name: " Test reviewer " });
    expect(result.name).toBe("Test reviewer");
  });
  it("rejects invalid email and missing consent", () => {
    expect(contactSchema.safeParse({ ...inquiry, email: "invalid" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...inquiry, consent: false }).success).toBe(false);
  });
  it("rejects honeypot input and oversized messages", () => {
    expect(contactSchema.safeParse({ ...inquiry, website: "spam" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...inquiry, message: "x".repeat(3001) }).success).toBe(false);
  });
});
