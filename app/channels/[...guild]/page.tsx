export default async function Guild({
  params,
}: {
    params: Promise<{ guild: string[] }>
}) {
  const [guildId, channelId] = (await params).guild;
  return <div>Viewing: {guildId} {channelId}</div>;
}