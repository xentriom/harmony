import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Nav Bar */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <nav className="w-full h-18 bg-gray-800 shadow-lg p-4 rounded-lg flex justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <Image src="/logo.svg" alt="Harmony Logo" width={40} height={40} />
            <h1 className="text-2xl font-semibold">Harmony</h1>
          </div>

          <Link href="/login">
            <Button className="bg-blue-500 hover:bg-blue-600">Log In</Button>
          </Link>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Harmony</h1>
      </div>
    </div>
  );
}