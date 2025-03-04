import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{ guild: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const [guildId] = (await params).guild;
  // Fetch guild name with id and use that in title

  return {
    title: `Harmony | ${guildId}`,
  };
}

export default async function Guild({
  params,
}: {
  params: Promise<{ guild: string[] }>
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const [guildId, channelId] = (await params).guild;
  return <div>Viewing: {guildId} {channelId}</div>;
}