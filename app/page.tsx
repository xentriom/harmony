import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

export default async function LandingPage() {
  let ctaText: string = "";
  let ctaLink: string = "";

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
    
  if (error || !data?.user) {
    ctaText = "Log In";
    ctaLink = "/login";
  } else {
    ctaText = "Open Harmony";
    ctaLink = "/channels/me";
  }

  return (
    <div className="relative h-screen w-full">
      {/* Nav Bar */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <nav className="w-full bg-slate-800 shadow-lg p-4 rounded-lg flex justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <Image src="/logo.svg" alt="Harmony Logo" width={40} height={40} />
            <h1 className="text-2xl font-semibold">Harmony</h1>
          </div>
          <Link href={ctaLink}>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              {ctaText}
            </Button>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full">
        Harmony~
      </div>
    </div>
  );
}