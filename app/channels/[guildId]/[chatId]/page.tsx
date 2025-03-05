import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{ guildId: string; chatId: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { guildId, chatId } = await params;

  // Fetch guild and channel name with id and use that in title
  const guildName = guildId;
  const chatName = chatId;

  return {
    title: `Harmony | #${chatName} | ${guildName}`,
  };
}

export default async function Channel({
  params,
}: {
  params: Promise<{ guildId: string; chatId: string }>
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { guildId, chatId } = await params;
  return <div>Viewing: {guildId} {chatId}</div>;
}