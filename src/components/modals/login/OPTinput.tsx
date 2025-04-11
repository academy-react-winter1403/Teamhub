import { Field, FieldProps } from "formik";
import { useRef } from "react";

const OTPInput = () => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: (field: string, value: string | number) => void
  ) => {
    const value = e.target.value;

    // paste
    if (value.length > 1 && /^[0-9]+$/.test(value)) {
      value.split("").forEach((char, i) => {
        if (i < 5) {
          setFieldValue(`n${i + 1}`, char);
          inputsRef.current[i]?.focus();
        }
      });
      return;
    }

    //    jump to next
    if (/^[0-9]$/.test(value) && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full flex justify-between">
      {[...Array(5)].map((_, index) => (
        <Field name={`n${index + 1}`} key={index}>
          {({ field, form }: FieldProps) => (
            <input
              {...field}
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              onChange={(e) => {
                field.onChange(e);
                handleInput(e, index, form.setFieldValue);
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-13 p-4 text-center text-2xl border border-gray-300 rounded-2xl m-2 "
            />
          )}
        </Field>
      ))}
    </div>
  );
};

export default OTPInput;
