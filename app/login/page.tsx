import type { Metadata } from "next";
import { BrandLogoAndName } from "@/components/brand";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCodeIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Harmony",
};

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Logo & Name */}
      <BrandLogoAndName size={40} />

      {/* Login Container */}
      <Card className="flex flex-row w-[90vw] md:w-full md:max-w-3xl gap-16 p-8 bg-slate-800 rounded-xl overflow-hidden shadow-xl border-none">
        {/* Left Section (Login Form) */}
        <CardContent className="flex flex-col justify-center w-full md:w-3/5 px-0">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
            <p className="text-gray-400 text-base mb-6">We&apos;re so excited to see you again!</p>
          </div>

          <div>
            <div className="text-left mb-4">
              <label htmlFor="email" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Email or Phone Number</label>
              <Input type="email" id="email" className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
            </div>

            <div className="text-left mb-2">
              <label htmlFor="password" className="text-gray-300 text-xs mb- block font-semibold uppercase">Password</label>
              <Input type="password" id="password" className="text-gray-200 bg-gray-700 border-none outline-none focus-visible:ring-0" />
            </div>

            <a href="#" className="text-blue-500 text-sm mb-4 hover:underline block text-left">
              Forgot your password?
            </a>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">Log In</Button>

            <p className="text-gray-400 text-sm mt-2">
              Need an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
            </p>
          </div>
        </CardContent>

        {/* Right Section (QR Code) */}
        <CardContent className="hidden w-2/5 md:flex flex-col items-center justify-center text-center px-0">
          <QrCodeIcon className="w-40 h-40" />
          <h3 className="text-xl font-semibold mt-4">Log in with QR Code</h3>
          <p className="text-gray-400 mt-2">
            Scan this with the <b>Harmony mobile app</b> to log in instantly.
          </p>
          <a href="#" className="text-blue-500 text-sm mt-4 hover:underline">
            Or, sign in with passkey
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
