import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../atoms/Input";
import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";

export default function FormBase({
  title,
  fields,
  schema,
  onSubmit,
  buttonText = "Enviar",
  loading = false,
  className = "",
  extraBeforeButton,
  extraAfterButton,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} w-full bg-backgroundPrimary-light dark:bg-backgroundSecondary-dark 
      p-6 max-lg:rounded-b-2xl rounded-r-2xl shadow-cardLight dark:shadow-cardDark max-md:rounded-none max-md:shadow-none`}
    >
      {title && <Title className="text-center mb-6">{title}</Title>}

      {fields.map((field, index) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type || "text"}
          placeholder={field.placeholder}
          className={index > 0 ? "mt-4" : ""}
          error={errors[field.name]?.message}
          {...register(field.name)}
        />
      ))}

      {/* Conteúdo antes do botão */}
      {typeof extraBeforeButton === "function"
        ? extraBeforeButton({ register, errors })
        : extraBeforeButton}

      <PrimaryButton
        type="submit"
        className="mt-6 w-full bg-buttonPrimary-light dark:bg-buttonPrimary-dark text-white"
        disabled={loading}
      >
        {loading ? "Aguarde..." : buttonText}
      </PrimaryButton>

      {/* Conteúdo depois do botão */}
      {typeof extraAfterButton === "function"
        ? extraAfterButton({ register, errors })
        : extraAfterButton}
    </form>
  );
}
