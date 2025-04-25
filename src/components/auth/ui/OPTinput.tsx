import { Field, FieldProps } from "formik";
import { useRef } from "react";

const OTPInputCode = () => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: (field: string, value: string) => void
  ) => {
    const { value } = e.target;

    if (value.length > 1 && /^\d+$/.test(value)) {
      const digits = value.slice(0, 5).split("");
      digits.forEach((digit, i) => setFieldValue(`n${i + 1}`, digit));
      inputsRef.current[Math.min(digits.length - 1, 4)]?.focus();
      return;
    }

    if (/^\d$/.test(value)) {
      setFieldValue(`n${index + 1}`, value);
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
              onChange={(e) => handleInput(e, index, form.setFieldValue)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-13 p-4 text-center text-2xl border border-gray-300 rounded-2xl m-2"
            />
          )}
        </Field>
      ))}
    </div>
  );
};

export default OTPInputCode;
