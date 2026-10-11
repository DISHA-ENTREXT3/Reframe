import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";
export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Public submission intentionally writes only validated inquiries; no public read path.
    const { website: _website, ...inquiry } = data;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_inquiries").insert(inquiry);
    if (error)
      return {
        success: false,
        error: "Your inquiry couldn’t be saved. Please try again in a moment.",
      };
    return { success: true, error: null };
  });
