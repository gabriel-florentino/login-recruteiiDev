import React from "react";
import Input from "../atoms/Input";
import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";
import { Controller } from "react-hook-form";

export default function FormBase({
  title,
  fields,
  onSubmit,
  buttonText = "Enviar",
  loading = false,
  className = "",
  extraBeforeButton,
  extraAfterButton,
  register,
  errors,
  control,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} w-full bg-backgroundPrimary-light
  p-6 lg:rounded-r-2xl max-lg:rounded-b-2xl max-md:rounded-none shadow-cardLight
  max-md:shadow-none `}
    >
      {title && <Title className="text-center mb-8">{title}</Title>}

      {fields.map((field, index) =>
        field.maskOptions ? (
          control ? (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              defaultValue=""
              render={({ field: controllerField }) => (
                <Input
                  {...controllerField}
                  label={field.label}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  maskOptions={field.maskOptions}
                  className={index > 0 ? "mt-4" : ""}
                  error={errors?.[field.name]?.message} // <-- erro aqui
                />
              )}
            />
          ) : (
            console.error(`O campo "${field.name}" usa máscara, mas o "control" está ausente.`)
          )
        ) : (
          <Input
            key={field.name}
            {...register(field.name)}
            label={field.label}
            type={field.type || "text"}
            placeholder={field.placeholder}
            className={index > 0 ? "mt-4" : ""}
            error={errors?.[field.name]?.message}
          />
        )
      )}

      {typeof extraBeforeButton === "function"
        ? extraBeforeButton({ register, errors })
        : extraBeforeButton}

      <PrimaryButton
        type="submit"
        className="mt-6 w-full bg-buttonPrimary-light text-white"
        disabled={loading}
      >
        {loading ? "Aguarde..." : buttonText}
      </PrimaryButton>

      {typeof extraAfterButton === "function"
        ? extraAfterButton({ register, errors })
        : extraAfterButton}
    </form>
  );
}
