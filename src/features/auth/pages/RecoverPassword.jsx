import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormBase from "../../../components/organisms/FormBase";
import LinkText from "../../../components/atoms/Link";
import { schema } from "../validations/recoverPasswordSchema"
import PageWrapper from "../../../components/moleculars/pageWrapper"

export default function RecoverPassword() {
  const onSubmit = (data) => {
    console.log("Recover password request:", data);
    alert("Link de recuperação enviado para o email informado!");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "email@exemplo.com",
    },
  ];

  return (
    <PageWrapper>
    <div className="relative min-h-screen w-full max-md:bg-none bg-bg-auth bg-cover bg-center flex items-center justify-center">
      {/* Camada de blur */}
      <div className="absolute inset-0 backdrop-blur-xl z-0" />
      <div className="absolute inset-0 bg-white/10 z-0" />

      {/* Conteúdo visível */}
      <div className="relative z-10 max-lg:max-w-md w-full flex flex-row max-lg:flex-col max-w-screen-md">
        <div className="bg-bg-auth bg-cover bg-center max-lg:rounded-t-2xl w-full max-lg:h-64 max-sm:hidden rounded-l-2xl" />

        <section className="flex items-center justify-center max-md:h-full w-full">
          <FormBase
            title="Recuperar Senha"
            fields={fields}
            onSubmit={handleSubmit(onSubmit)}
            buttonText="Enviar link de recuperação"
            loading={isSubmitting}
            className=""
            extraBeforeButton={() => (
              <p className="text-sm text-textSecondary-light my-4 mx-2">
                Insira o e-mail cadastrado para receber um link de redefinição de senha.
              </p>
            )}
            extraAfterButton={() => (
              <div className="text-sm mt-4 mx-2">
                <LinkText to="/login">Voltar para o login</LinkText>
              </div>
            )}
            register={register}
            errors={errors}
          />
        </section>
      </div>
    </div>
    </PageWrapper>
  );
}
