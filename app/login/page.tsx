import type { Metadata } from "next";
import Link from "next/link";

import { loginAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";

import type { Message } from "@/components/form-message";
import { BrandLogoAndName } from "@/components/brand";
import { InputField } from "@/components/input";
import { Card, CardContent } from "@/components/ui/card";

import { QrCodeIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Harmony",
};

export default async function LoginPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const searchError = Object.keys(searchParams).length > 0;

  return (
    <div className="relative h-screen w-full flex items-center justify-center flex-col">
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

          <form>
            <InputField id="email" name="email" display={searchError ? "Email - Login or Password is Inavlid." : "Email"} type="email" margin="mb-4" required searchError={searchError} />
            <InputField id="password" name="password" display={searchError ? "Password - Login or Password is Invalid" : "Password"} type="password" margin="mb-2" required searchError={searchError} />

            <Link href="#" className="text-blue-500 text-xs mb-4 hover:underline block text-left">
              Forgot your password?
            </Link>

            <SubmitButton formAction={loginAction} pendingText="Logging in..." className="w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2">
              Log In
            </SubmitButton>

            <p className="text-gray-400 text-xs mt-2">
              Need an account?{" "}
              <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
          </form>
        </CardContent>

        {/* Right Section (QR Code) */}
        <CardContent className="hidden w-2/5 md:flex flex-col items-center justify-center text-center px-0">
          <QrCodeIcon className="w-40 h-40" />
          <h3 className="text-xl font-semibold mt-4">Log in with QR Code</h3>
          <p className="text-gray-400 mt-2">
            Scan this with the <b>Harmony mobile app</b> to log in instantly.
          </p>
          <Link href="#" className="text-blue-500 text-sm mt-4 hover:underline">
            Or, sign in with passkey
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
