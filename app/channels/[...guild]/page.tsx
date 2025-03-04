import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function Guild({
  params,
}: {
    params: Promise<{ guild: string[] }>
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  
  const [guildId, channelId] = (await params).guild;
  return <div>Viewing: {guildId} {channelId}</div>;
}