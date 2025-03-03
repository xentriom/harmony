export default async function DM({
  params,
}: {
    params: Promise<{ chatId: string }>
}) {
  const chatId = (await params).chatId;
  return <div>Viewing DMs with: {chatId}</div>;
}