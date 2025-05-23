import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormBase from "../../../components/organisms/FormBase";
import LinkText from "../../../components/atoms/Link";
import { schema } from "../validations/recoverPasswordSchema"
import PageWrapper from "../../../components/moleculars/pageWrapper"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase"; // ajuste conforme seu caminho

/**
 * Componente para recuperação de senha, enviando um link para o email informado.
 *
 * @component
 * @returns {JSX.Element} Formulário de recuperação de senha
 */

export default function RecoverPassword() {
  const onSubmit = async ({ email }) => {
    try {
      const actionCodeSettings = {
        url: "http://localhost:5173/redefinir-senha",
        handleCodeInApp: true,
      };

      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      alert("Link de recuperação enviado com sucesso. Verifique seu e-mail!");
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação:", error);
      if (error.code === "auth/user-not-found") {
        alert("Nenhuma conta encontrada com esse e-mail.");
      } else if (error.code === "auth/invalid-email") {
        alert("E-mail inválido.");
      } else {
        alert("Erro ao enviar link. Tente novamente mais tarde.");
      }
    }
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
                <LinkText to="/entrar">Voltar para o login</LinkText>
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
