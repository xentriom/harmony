import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCodeIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/background.svg"
        alt="Login Background"
        fill
        className="absolute z-0 object-cover object-center"
        priority
      />

      {/* Logo & Name */}
      <div className="absolute top-5 left-5 text-white text-2xl font-bold">
        Harmony
      </div>

      {/* Login Container */}
      <Card className="z-10 flex flex-row w-[90vw] md:w-full md:max-w-3xl gap-16 p-8 bg-slate-800 rounded-xl overflow-hidden shadow-xl border-none">
        {/* Left Section (Login Form) */}
        <CardContent className="flex flex-col justify-center w-full md:w-3/5 px-0">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold">Welcome back!</h2>
            <p className="text-gray-400 mb-6">We&apos;re so excited to see you again.</p>
          </div>

          <div>
            <div className="text-left mb-4">
              <label htmlFor="email" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Email or Phone Number</label>
              <Input type="email" id="email" className="text-gray-300 bg-gray-700 border-none focus:ring-1 focus:ring-gray-800" />
            </div>

            <div className="text-left mb-2">
              <label htmlFor="password" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Password</label>
              <Input type="password" id="password" className="text-gray-300 bg-gray-700 border-none outline-none focus:ring-1 focus:ring-gray-800" />
            </div>

            <a href="#" className="text-blue-500 text-sm mb-4 hover:underline block text-left">
              Forgot your password?
            </a>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">Login</Button>

            <p className="text-gray-400 text-sm mt-4">
              Need an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
            </p>
          </div>
        </CardContent>

        {/* Right Section (QR Code) */}
        <div className="hidden w-2/5 md:flex flex-col items-center justify-center text-center">
          <QrCodeIcon className="w-40 h-40 text-white" />
          <h3 className="text-white text-xl font-semibold mt-4">Log in with QR Code</h3>
          <p className="text-gray-400 mt-2">
            Scan this with the <b>Harmony mobile app</b> to log in instantly.
          </p>
          <a href="#" className="text-blue-500 text-sm mt-4 hover:underline">
            Or, sign in with passkey
          </a>
        </div>
      </Card>
    </div>
  );
}
