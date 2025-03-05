export default function Layout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Loading...</h1>
      {children}
    </div>
  );
}