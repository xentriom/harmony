"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

import { BrandLogoAndName } from "@/components/brand";
import { InputField } from "@/components/input";

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
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
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

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState({
    month: "",
    day: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const padNumber = (num: string, amount = 2): string => {
    return num.toString().padStart(amount, '0');
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");

    if (!email || !username || !password || !dob.month || !dob.day || !dob.year) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const formattedDob = `${dob.year}-${padNumber(dob.month)}-${padNumber(dob.day)}`;

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([
            {
              id: data?.user?.id,
              username,
              display_name: displayName || username,
              dob: formattedDob,
            },
          ]);

        if (profileError) {
          setError(profileError.message);
        } else {
          router.push("/login");
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Logo & Name */}
      <BrandLogoAndName size={40} />

      {/* Register Container */}
      <Card className="flex flex-col w-[90vw] md:max-w-lg gap-2 p-8 bg-slate-800 rounded-xl shadow-2xl border-none">
        <CardTitle className="text-2xl text-white text-center mb-2">Create an account</CardTitle>
        <CardContent className="px-0">
          <InputField id="email" display="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField id="display_name" display="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          <InputField id="username" display="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <InputField id="password" display="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>

          <div className="text-left mb-3 md:mb-6">
            <label className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Date of Birth</label>
            <div className="flex gap-2">
              <Select onValueChange={(value) => setDob((prev) => ({ ...prev, month: value }))}>
                <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <ScrollArea className="h-40">
                    {months.map((month, i) => (
                      <SelectItem key={month} value={`${i + 1}`}>
                        {month}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setDob((prev) => ({ ...prev, day: value }))}>
                <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <ScrollArea className="h-40">
                    {[...Array(31)].map((_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setDob((prev) => ({ ...prev, year: value }))}>
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
            {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
            <Button className="w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2" onClick={handleRegister} disabled={loading}>
              {loading ? "Registering..." : "Continue"}
            </Button>
          </div>

          <p className="text-gray-400 text-xs">
            By registering, you agree to Harmony&apos;s <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
          </p>

          <Link href="/login" className="text-xs text-blue-500 hover:underline">Already have an account?</Link>
        </CardContent>
      </Card>
    </div>
  );
}