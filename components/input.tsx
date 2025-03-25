import { Input } from "@/components/ui/input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  display: string;
  type?: string;
  margin?: string;
  searchError?: boolean;
}

export const InputField = ({ id, name, display, type="text", margin, searchError, ...props }: InputFieldProps) => {
  return (
    <div className={`text-left ${margin ? margin : "mb-3 md:mb-6"}`}>
      <label htmlFor={id} className={`text-gray-300 text-xs mb-1 block font-semibold uppercase ${searchError ? "text-red-500" : ""}`}>{display}</label>
      <Input 
        id={id} 
        name={name}
        type={type} 
        className={`text-gray-200 bg-gray-700 ${searchError ? "border-1 border-red-500 focus-visible:ring-0" : "border-none focus-visible:ring-0"}`}
        {...props}
      />
    </div>
  );
};