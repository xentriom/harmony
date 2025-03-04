"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function loginAction(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/channels/me");
  redirect("/channels/me");
}

export async function signupAction(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const username = formData.get("username") as string;
  const displayName = formData.get("display_name") as string;

  const dobMonth = formData.get("dob_month") as string;
  const dobDay = formData.get("dob_day") as string;
  const dobYear = formData.get("dob_year") as string;
  const dob = `${dobYear}-${dobMonth}-${dobDay}`;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error(error);
    redirect("/error");
  }

  if (data?.user) {
    const { error: profileError } = await supabase
      .from("pending_registrations")
      .insert([{
        id: data.user.id,
        email,
        username,
        display_name: displayName,
        dob
      }]);

    if (profileError) {
      console.error(profileError);
      redirect("/error");
    }
  }

  redirect("/login");
}

export async function generateUID(): Promise<string> {
  // Harmony epoch (January 1, 2025 00:00:00 UTC) in milliseconds
  const HARMONY_EPOCH = 1735689600000;
  const timestamp = BigInt(Date.now() - HARMONY_EPOCH);
  
  // Generate worker and process IDs (0-31, 5 bits)
  const workerId = BigInt(Math.floor(Math.random() * 32));
  const processId = BigInt(Math.floor(Math.random() * 32));
  
  // Generate sequence number (0-4095, 12 bits)
  const sequence = BigInt(Math.floor(Math.random() * 4096));
  
  // Construct the 64-bit snowflake
  // Shift bits left: 42 bits timestamp, 5 bits worker, 5 bits process, 12 bits sequence
  const snowflake = (timestamp << 22n) | (workerId << 17n) | (processId << 12n) | sequence;
  
  // Convert to string and pad to ensure 18 digits
  return snowflake.toString().padStart(18, '0');
};