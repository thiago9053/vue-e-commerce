import { createClient } from "@supabase/supabase-js";

console.log(import.meta.env.SUPABASE_URL);
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string
);
