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

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext"; // importa o hook

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // pega o login do contexto

  const { loginGoogle } = useAuth();

  const handleLoginGoogle = async () => {
  const resposta = await loginGoogle();
  if (resposta.sucesso) {
    toast.success("Login com Google realizado!");
    if (resposta.usuario.isEnterprise) {
      navigate("/cadastrar-empresa");
    } else {
      navigate("/cadastrar-desenvolvedor");
    }
  } else {
    toast.error(resposta.mensagem || "Erro ao fazer login com o Google.");
  }
};

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const resultado = await login(data); // login recebe { email, senha }
      
      
      if (!resultado.sucesso) {
        toast.error(resultado.mensagem);
        return;
      }

      toast.success("Login realizado com sucesso!");

      if (resultado.usuario.isEnterprise) {
        navigate("/cadastrar-empresa");
      } else {
        navigate("/cadastrar-desenvolvedor");
      }

    } catch (err) {
      console.error(err);
      toast.error("Erro ao tentar fazer login.");
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
                max-lg:h-64 max-sm:hidden lg:rounded-l-2xl" />

                
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
              <LinkText to="/cadastrar" className="">Cadastre-se agora!</LinkText>
              
            </div>
          )}
          extraAfterButton={({ register }) => (
            <>
              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-border-light" />
                <span className="text-sm text-textSecondary-light">ou</span>
                <div className="flex-grow h-px bg-border-light" />
              </div>

              <ButtonGoogle
                icon={<FcGoogle className="w-5 h-5" />}
                onClick={handleLoginGoogle} // ✅ Correto agora
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
