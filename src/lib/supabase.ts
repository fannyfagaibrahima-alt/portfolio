import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Create a mock client that returns empty results when Supabase is not configured
function createMockClient() {
  const handler: ProxyHandler<object> = {
    get: () =>
      new Proxy(() => {}, {
        apply: () =>
          new Proxy({}, {
            get: () => () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
      }),
  };
  return new Proxy({}, handler) as SupabaseClient;
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createMockClient();
