CREATE TABLE public.contact_inquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 firm text NOT NULL CHECK (char_length(firm) BETWEEN 2 AND 150),
 role text NOT NULL CHECK (char_length(role) BETWEEN 2 AND 100),
 service text NOT NULL CHECK (char_length(service) <= 150),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 3000),
 consent boolean NOT NULL DEFAULT true CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_inquiries TO service_role;
REVOKE ALL ON public.contact_inquiries FROM anon, authenticated;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;