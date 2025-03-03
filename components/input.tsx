import { Input } from "@/components/ui/input";

interface InputFieldProps {
  id: string;
  display: string;
  margin?: string;
}

export const InputField = ({ id, display, margin }: InputFieldProps) => {
  return (
    <div className={`text-left ${margin ? margin : "mb-3 md:mb-6"}`}>
      <label htmlFor={id} className="text-gray-300 text-xs mb-1 block font-semibold uppercase">{display}</label>
      <Input type="text" id={id} className="text-gray-200 bg-gray-700 border-none focus-visible:ring-0" />
    </div>
  );
};