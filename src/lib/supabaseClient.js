
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kvtfmfncbyixnngqnlny.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dGZtZm5jYnlpeG5uZ3FubG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MTg2ODgsImV4cCI6MjAwODM5NDY4OH0.-EwiSz-i8HarzZZia7Vwje8KBFDfftQ2YZV9TRYpC0Q'
export const supabase = createClient(supabaseUrl, supabaseKey)