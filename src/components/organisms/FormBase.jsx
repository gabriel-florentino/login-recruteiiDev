/**
 * Componente reutilizável de formulário com suporte a react-hook-form.
 *
 * @component
 * @example
 * const fields = [
 *   { name: "email", label: "Email", placeholder: "Digite seu e-mail" },
 *   { name: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
 * ];
 *
 * <FormBase
 *   title="Login"
 *   fields={fields}
 *   onSubmit={handleSubmit(onSubmit)}
 *   register={register}
 *   control={control}
 *   errors={errors}
 *   buttonText="Entrar"
 *   loading={false}
 * />
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.title] - Título exibido no topo do formulário
 * @param {Array<Object>} props.fields - Campos do formulário. Cada campo deve conter `name`, `label`, `placeholder`, e opcionalmente `type` e `maskOptions`
 * @param {function} props.onSubmit - Função chamada ao submeter o formulário
 * @param {string} [props.buttonText="Enviar"] - Texto do botão de envio
 * @param {boolean} [props.loading=false] - Se verdadeiro, desabilita o botão e mostra "Aguarde..."
 * @param {string} [props.className] - Classes CSS adicionais aplicadas ao formulário
 * @param {React.ReactNode|function} [props.extraBeforeButton] - Elemento ou função renderizada antes do botão
 * @param {React.ReactNode|function} [props.extraAfterButton] - Elemento ou função renderizada após o botão
 * @param {function} props.register - Função do react-hook-form para registrar campos
 * @param {Object} props.errors - Objeto de erros do react-hook-form
 * @param {Object} [props.control] - Controlador do react-hook-form, necessário para campos com máscara
 *
 * @returns {JSX.Element} Formulário renderizado
 */

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
