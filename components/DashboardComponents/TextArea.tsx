import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CustomTextArea({ label, name, register, isRequired = true, isDisabled = false, errors }:any) {
  return (
    <div className="grid items-center gap-1.5 col-span-2 sm:col-span-1">
      <Label className="font-bold mb-2" htmlFor={name}>{label}</Label>
      <Textarea {...register(name, { required: isRequired })} name={name} disabled={isDisabled} required={isRequired} placeholder="Write your description..."/>
      {errors && errors[name] && (
        <span className='text-sm text-red-600 '>{errors[name].message}</span>
      )}
    </div>
  );
}
