import type { EmailOtpType } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { generateUID } from "@/app/actions";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    
    if (!error && data?.user) {
      const { data: pendingRegistration } = await supabase
        .from("pending_registrations")
        .select("*")
        .eq("id", data.user.id)
        .single();

      if (!pendingRegistration) {
        console.error("No pending registration found");
        redirect("/error");
      }

      let publicId: string = "";
      let isUnique = false;
    
      while (!isUnique) {
        publicId = await generateUID();
        const { data: existingUser } = await supabase
          .from("users")
          .select("id")
          .eq("uid", publicId)
          .single();
    
        if (!existingUser) isUnique = true;
      }

      const { error: profileError } = await supabase
        .from("users")
        .insert([{
          id: data.user.id,
          uid: publicId,
          username: pendingRegistration.username,
          display_name: pendingRegistration.display_name,
          email: pendingRegistration.email,
          avatar: null,
          banner: null,
          accent_color: null,
          dob: pendingRegistration.dob,
        }]);

      if (profileError) redirect("/error");

      await supabase
        .from("pending_registrations")
        .delete()
        .eq("id", data.user.id);

      redirect(next);
    }
  }

  redirect("/error");
}