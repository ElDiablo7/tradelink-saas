// Mock Supabase Client for TradeLink
// Replace with actual @supabase/supabase-js createClient when keys are provided.

export const supabase = {
  auth: {
    signInWithPassword: async ({ email }: { email: string; password?: string }) => {
      console.log(`Mock sign in for ${email}`);
      return { data: { user: { email } }, error: null };
    },
    signUp: async ({ email, options }: { email: string; password?: string; options?: { data?: { role?: string } } }) => {
      console.log(`Mock sign up for ${email} with role ${options?.data?.role}`);
      return { data: { user: { email } }, error: null };
    }
  }
};
