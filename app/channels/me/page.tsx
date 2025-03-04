import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DM() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <div>Viewing DMs</div>;
}