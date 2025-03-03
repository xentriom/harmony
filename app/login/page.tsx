import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCodeIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900">
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
      <Card className="z-10 flex flex-row w-full max-w-3xl p-8 bg-gray-800 rounded-xl overflow-hidden shadow-xl border-none">
        {/* Left Section (Login Form) */}
        <CardContent className="flex flex-col justify-center w-12/20 px-0">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold">Welcome back!</h2>
            <p className="text-gray-400 text-sm mb-6">We&apos;re so excited to see you again.</p>
          </div>

          <div>
            <div className="text-left mb-4">
              <label className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Email or Phone Number</label>
              <Input type="email" className="bg-gray-700 border-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="text-left mb-2">
              <label className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Password</label>
              <Input type="password" className="bg-gray-700 border-none focus:ring-2 focus:ring-blue-500" />
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

        <div className="w-1/20"></div>

        {/* Right Section (QR Code) */}
        <div className="w-7/20 flex flex-col items-center justify-center text-center">
          <QrCodeIcon className="w-40 h-40 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4">Log in with QR Code</h3>
          <p className="text-gray-400 text-sm mt-2">
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
