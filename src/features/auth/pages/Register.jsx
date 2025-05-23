import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/cadastroSchema";
import FormBase from "../../../components/organisms/FormBase";
import LinkText from "../../../components/atoms/Link";
import IsEnterprise from "../../../components/atoms/Checkbox";
import PageWrapper from "../../../components/moleculars/pageWrapper";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {registerUser} from "../services/authService"

export default function Register() {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
  try {
    const resultado = await registerUser(data); // capturando retorno

    if (!resultado.sucesso) {
      toast.error(resultado.mensagem);
      return; // para o fluxo, não navega pra login
    }

    toast.success(resultado.mensagem);
    navigate("/entrar");
  } catch (err) {
    toast.error("Erro no cadastro.");
  }
};


  const fields = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      placeholder: "Seu nome",
    },
    {
      name: "cpf",
      label: "CPF",
      placeholder: "Digite seu CPF",
      maskOptions: {
        numericOnly: true,
        blocks: [3, 3, 3, 2],
        delimiters: [".", ".", "-"],
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "email@exemplo.com",
    },
    {
      name: "senha",
      label: "Senha",
      type: "password",
      placeholder: "••••••••",
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
          {/* Imagem lateral esquerda */}
          <div className="bg-bg-auth bg-cover bg-center lg:rounded-l-2xl sm:rounded-b-none max-lg:rounded-t-2xl w-full max-lg:h-64 max-sm:hidden" />

          {/* Formulário */}
          <section className="flex items-center justify-center max-md:h-full w-full">
            <FormBase
              control={control}
              title="Cadastre-se"
              fields={fields}
              schema={schema}
              onSubmit={handleSubmit(onSubmit)}
              buttonText="Cadastrar"
              loading={isSubmitting}
              register={register}
              errors={errors}
              extraBeforeButton={() => (
                <div className="flex items-center justify-between text-sm my-6 mx-2">
                  <IsEnterprise
                    register={register}
                    nameSaveData="isEnterprise"
                    text="Vou contratar devs"
                  />
                  <LinkText to="/entrar">Já possui conta?</LinkText>
                </div>
              )}
            />
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
