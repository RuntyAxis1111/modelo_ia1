import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON } from "~/lib/load_keys";

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is not set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function executeSupabaseQuery(query: string) {
  console.log("Attempting to execute Supabase query based on user intent:", query);

  if (query.toLowerCase().includes("facebook")) {
    try {
      const { data, error } = await supabase
        .from('DATA_PALF_FACEBOOK')
        .select('*')
        .limit(5);

      if (error) {
        console.error("Supabase query error:", error);
        return `Error fetching Facebook data: ${error.message}`;
      }
      return `Facebook Data (sample): ${JSON.stringify(data, null, 2)}`;
    } catch (e) {
      console.error("Supabase query execution failed:", e);
      return `Failed to execute Supabase query for Facebook data.`;
    }
  }

  return "Could not determine a specific Supabase query from your request.";
}