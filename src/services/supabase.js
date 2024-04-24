import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ydqbyrtamvwxpbpiqctp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcWJ5cnRhbXZ3eHBicGlxY3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MTgyOTcsImV4cCI6MjAyOTE5NDI5N30.NhDnoy_6tIHAgxZkRa0Qm8lex5B9-6pnmL8HCJLT0Mw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
