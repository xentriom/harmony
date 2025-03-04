import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{ chatId: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = (await params).chatId;
  // Fetch username with id and use that in title

  return {
    title: `Harmony | @${id}`,
  };
}

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