import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Harmony | Friends",
};

export default async function DM() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("id");
  console.log(existingUser);

  return <div>Viewing DMs</div>;
}