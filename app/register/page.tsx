import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Logo & Name */}
      <div className="absolute top-5 left-5 text-2xl font-bold text-white">
        <div className="flex flex-row items-center gap-2">
          <Image src="/logo.svg" alt="Harmony Logo" width={40} height={40} />
          <p>Harmony</p>
        </div>
      </div>

      {/* Register Container */}
      <Card className="flex flex-col w-[90vw] md:max-w-lg gap-2 p-8 bg-slate-800 rounded-xl shadow-2xl border-none">
        <CardTitle className="text-2xl text-white text-center mb-2">Create an account</CardTitle>
        <CardContent className="px-0">
          <div className="text-left mb-3 md:mb-6">
            <label htmlFor="email" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Email</label>
            <Input type="email" id="email" className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
          </div>

          <div className="text-left mb-3 md:mb-6">
            <label htmlFor="display_name" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Display Name</label>
            <Input type="text" id="display_name" className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
          </div>

          <div className="text-left mb-3 md:mb-6">
            <label htmlFor="username" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Username</label>
            <Input type="text" id="username" className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
          </div>

          <div className="text-left mb-3 md:mb-6">
            <label htmlFor="password" className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Password</label>
            <Input type="password" id="password" className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
          </div>

          <div className="text-left mb-3 md:mb-6">
            <label className="text-gray-300 text-xs mb-1 block font-semibold uppercase">Date of Birth</label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="june">June</SelectItem>
                  <SelectItem value="july">July</SelectItem>
                  <SelectItem value="august">August</SelectItem>
                  <SelectItem value="september">September</SelectItem>
                  <SelectItem value="october">October</SelectItem>
                  <SelectItem value="november">November</SelectItem>
                  <SelectItem value="december">December</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  {[...Array(31)].map((_, i) => (
                    <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-300 border-0 focus-visible:ring-0">
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <SelectItem key={year} value={`${year}`}>{year}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center mb-2">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">Continue</Button>
          </div>

          <p className="text-gray-400 text-xs">
            By registering, you agree to Harmony&apos;s <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>

          <a href="/login" className="text-xs text-blue-500 hover:underline">Already have an account?</a>
        </CardContent>
      </Card>
    </div>
  );
}
