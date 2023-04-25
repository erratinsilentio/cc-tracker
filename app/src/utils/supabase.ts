import { createClient } from "@supabase/supabase-js";

const url = process.env.VUE_APP_SUPABASE_URL as string;
const key = process.env.VUE_APP_SUPABASE_KEY as string;

export const supabase = createClient(url, key);
