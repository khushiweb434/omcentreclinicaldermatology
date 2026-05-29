
-- Tracking events
CREATE TABLE public.tracking_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  source TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.tracking_events TO anon, authenticated;
GRANT ALL ON public.tracking_events TO service_role;
ALTER TABLE public.tracking_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert tracking events"
  ON public.tracking_events FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX idx_tracking_events_created_at ON public.tracking_events(created_at DESC);
CREATE INDEX idx_tracking_events_type ON public.tracking_events(event_type);

-- Appointments
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  treatment TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  slot TEXT NOT NULL,
  notes TEXT,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.appointments TO anon, authenticated;
GRANT ALL ON public.appointments TO service_role;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request an appointment"
  ON public.appointments FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX idx_appointments_created_at ON public.appointments(created_at DESC);

-- Reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  treatment TEXT,
  body TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.reviews TO anon, authenticated;
GRANT ALL ON public.reviews TO service_role;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a review"
  ON public.reviews FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Approved reviews are public"
  ON public.reviews FOR SELECT TO anon, authenticated USING (approved = true);
CREATE INDEX idx_reviews_approved_created ON public.reviews(approved, created_at DESC);
