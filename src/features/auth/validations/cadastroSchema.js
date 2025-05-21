import * as Yup from "yup";

const validarCPF = (cpf = "") => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.substring(10, 11));
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
// Explicando rápido:  
// - Sem espaços ou @ repetido  
// - Tem "@"  
// - Depois um domínio com pelo menos 2 caracteres no final

function hasNoSequences(value) {
  if (!value) return true; // se vazio, deixa o Yup cuidar do required

  // Check de 3 caracteres iguais seguidos (ex: aaa, 111)
  if (/(.)\1\1/.test(value)) return false;

  // Check sequências simples (abc, bcd, 123, 234)
  // converte pra código char e verifica se tem sequência crescente
  for (let i = 0; i < value.length - 2; i++) {
    const first = value.charCodeAt(i);
    const second = value.charCodeAt(i + 1);
    const third = value.charCodeAt(i + 2);
    if (second === first + 1 && third === second + 1) return false;
  }

  return true;
}

export const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string()
    .required("CPF é obrigatório")
    .test("cpf", "CPF inválido", value => {
      const clean = value?.replace(/\D/g, "");
      return validarCPF(clean)
    }),
  rememberMe: Yup.boolean(),
email: Yup
  .string()
  .required("Email obrigatório")
  .matches(emailRegex, "Email inválido"),
senha: Yup
  .string()
  .required("Senha obrigatória")
  .min(6, "Senha deve ter minimo 6 caracteres")
  .test(
    "no-sequences",
    "Senha não pode conter sequências",
    hasNoSequences
  ),
});
