-- Harden the contact form's rate limiting.

-- SECURITY DEFINER functions should pin their search_path (Supabase linter: function_search_path_mutable)
ALTER FUNCTION public.check_rate_limit(TEXT, TEXT, INT, INT) SET search_path = public;

-- New functions are executable by PUBLIC by default; only the Edge Function (service role) needs this one
REVOKE EXECUTE ON FUNCTION public.check_rate_limit(TEXT, TEXT, INT, INT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.check_rate_limit(TEXT, TEXT, INT, INT) TO service_role;

-- Backs the global hourly cap query in supabase/functions/contact
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
