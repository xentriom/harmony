import Link from "next/link";
import { type Metadata } from "next";

import { signupAction } from "@/app/actions";

import { BrandLogoAndName } from "@/components/brand";
import { InputField } from "@/components/input";
import { SubmitButton } from "@/components/submit-button";

import { 
  Card, 
  CardContent, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Harmony",
};

export default function RegisterPage() {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 13;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const padNumber = (num: string, amount = 2): string => {
    return num.toString().padStart(amount, "0");
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Logo & Name */}
      <BrandLogoAndName size={40} />

      {/* Register Container */}
      <Card className="flex flex-col w-[90vw] md:max-w-lg gap-2 p-8 bg-slate-800 rounded-xl shadow-2xl border-none">
        <CardTitle className="text-2xl text-white text-center mb-2">Create an account</CardTitle>
        <CardContent className="px-0">
          <form>
            <InputField id="email" name="email" display="Email" required />
            <InputField id="display_name" name="display_name" display="Display Name" />
            <InputField id="username" name="username" display="Username" required />
            <InputField id="password" name="password" display="Password" type="password" minLength={6} required />

            <div className="text-left mb-3 md:mb-6">
              <label className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Date of Birth</label>
              <div className="flex gap-2">
                <Select name="dob_month">
                  <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <ScrollArea className="h-40">
                      {months.map((month, i) => (
                        <SelectItem key={month} value={padNumber(`${i + 1}`)}>
                          {month}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <Select name="dob_day">
                  <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <ScrollArea className="h-40">
                      {[...Array(31)].map((_, i) => (
                        <SelectItem key={i + 1} value={padNumber(`${i + 1}`)}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <Select name="dob_year">
                  <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                    <ScrollArea className="h-40">
                      {[...Array(75)].map((_, i) => {
                        const year = maxYear - i;
                        return (
                          <SelectItem key={year} value={`${year}`}>
                            {year}
                          </SelectItem>
                        );
                      })}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center mb-2">
              <SubmitButton formAction={signupAction} pendingText="Registering..." className="w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2" >
              Continue
              </SubmitButton>
            </div>

            <p className="text-gray-400 text-xs">
            By registering, you agree to Harmony&apos;s <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </p>

            <Link href="/login" className="text-xs text-blue-500 hover:underline">Already have an account?</Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}