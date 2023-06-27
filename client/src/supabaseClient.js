import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file.
const supabaseURL = "https://cjaikluwphewxiqfzkqn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYWlrbHV3cGhld3hpcWZ6a3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4NzY1MjMsImV4cCI6MjAwMzQ1MjUyM30.h6Keoab1LVDhCK23Sz8CGYOWZC-z_HGoNM4POZE_848";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
