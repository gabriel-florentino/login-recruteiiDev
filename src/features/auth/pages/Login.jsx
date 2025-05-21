import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/loginSchema";
import FormBase from "../../../components/organisms/FormBase";
import RememberMeCheckbox from "../../../components/atoms/Checkbox";
import LinkText from "../../../components/atoms/Link"; // ajuste o caminho conforme sua estrutura
import { FcGoogle } from "react-icons/fc";
import ButtonGoogle from "../../../components/atoms/PrimaryButton"
import PageWrapper from "../../../components/moleculars/pageWrapper"

export default function Login() {
     const onSubmit = (data) => {
      console.log("Login data:", data);
      alert("Login bem-sucedido!");
  };
  
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: yupResolver(schema),
    });

  const fields = [
    { name: "email", label: "Email", type: "email", placeholder: "email@exemplo.com" },
    { name: "senha", label: "Senha", type: "password", placeholder: "••••••••" },
  ];

  return (
    <PageWrapper>
    <div className="relative min-h-screen w-full max-md:bg-none bg-bg-auth bg-cover bg-center flex 
    items-center justify-center">
      {/* Camada de blur */}
      <div className="absolute inset-0 backdrop-blur-xl z-0" />
      <div className="absolute inset-0 bg-white/10 z-0" />

      {/* Conteúdo visível */}
      <div className="relative z-10 max-lg:max-w-md w-full flex flex-row max-lg:flex-col max-w-screen-md">
        <div className="bg-bg-auth bg-cover bg-center max-lg:rounded-t-2xl w-full 
                max-lg:h-64 max-sm:hidden rounded-l-2xl" />

                
        <section className="flex items-center justify-center max-md:h-full w-full">
          <FormBase
          title="Login"
          fields={fields}
          onSubmit={handleSubmit(onSubmit)}
          buttonText="Entrar"
          loading={isSubmitting}
          className=""
          extraBeforeButton={({ register }) => (
            <div className="flex items-center justify-between text-sm my-6 mx-2">
              <RememberMeCheckbox
                register={register}
                nameSaveData="rememberMe"
                text="Lembrar de mim"
              />
              <LinkText to="/register" className="">Cadastre-se agora!</LinkText>
              
            </div>
          )}
          extraAfterButton={({ register }) => (
            <>
              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-border-light dark:bg-border-dark" />
                <span className="text-sm text-textSecondary-light">ou</span>
                <div className="flex-grow h-px bg-border-light" />
              </div>

              <ButtonGoogle
                icon={<FcGoogle className="w-5 h-5" />}
                onClick={() => alert("Login com Google")}
                className="bg-light w-full border mb-4"
              >
                Entrar com Google
              </ButtonGoogle>
              <LinkText to="/recuperar-senha" className="ml-2">Esqueci minha senha</LinkText>
            </>
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
