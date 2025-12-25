-- Contacts table for hire form submissions
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  message TEXT,
  lang TEXT NOT NULL DEFAULT 'es',
  ip_hash TEXT, -- Hashed IP for rate limiting (privacy-friendly)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for rate limiting queries
CREATE INDEX idx_contacts_email_created ON contacts(email, created_at DESC);
CREATE INDEX idx_contacts_ip_created ON contacts(ip_hash, created_at DESC);

-- Rate limiting function: check if email has submitted in last N minutes
CREATE OR REPLACE FUNCTION check_rate_limit(
  p_email TEXT,
  p_ip_hash TEXT,
  p_minutes INT DEFAULT 60,
  p_max_requests INT DEFAULT 3
)
RETURNS BOOLEAN AS $$
DECLARE
  email_count INT;
  ip_count INT;
BEGIN
  -- Check email rate limit
  SELECT COUNT(*) INTO email_count
  FROM contacts
  WHERE email = p_email
    AND created_at > NOW() - (p_minutes || ' minutes')::INTERVAL;

  -- Check IP rate limit
  SELECT COUNT(*) INTO ip_count
  FROM contacts
  WHERE ip_hash = p_ip_hash
    AND created_at > NOW() - (p_minutes || ' minutes')::INTERVAL;

  -- Return TRUE if within limits
  RETURN email_count < p_max_requests AND ip_count < p_max_requests;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS policies
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from authenticated service role (Edge Functions)
CREATE POLICY "Service role can insert" ON contacts
  FOR INSERT TO service_role
  WITH CHECK (true);

-- Only service role can read (for admin/rate limiting)
CREATE POLICY "Service role can read" ON contacts
  FOR SELECT TO service_role
  USING (true);
