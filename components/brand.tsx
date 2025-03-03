import Image from "next/image";

interface BrandLogoAndNameProps {
    size: number
}

export function BrandLogoAndName({ size }: BrandLogoAndNameProps) {
  return (
    <div className="absolute top-5 left-5 text-2xl font-bold">
      <div className="flex flex-row items-center gap-2">
        <Image src="/logo.svg" alt="Harmony Logo" width={size} height={size} />
        <p>Harmony</p>
      </div>
    </div>
  );
}