import * as yup from "yup";

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

export const schema = yup.object().shape({
  rememberMe: yup.boolean(),
  email: yup
    .string()
    .required("Email obrigatório")
    .matches(emailRegex, "Email inválido"),
  senha: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter minimo 6 caracteres")
    .test(
      "no-sequences",
      "Senha não pode conter sequências",
      hasNoSequences
    ),
});
