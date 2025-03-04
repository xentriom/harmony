import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DM({
  params,
}: {
    params: Promise<{ chatId: string }>
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const chatId = (await params).chatId;
  return <div>Viewing DMs with: {chatId}</div>;
}