import * as Yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
// Explicando rápido:  
// - Sem espaços ou @ repetido  
// - Tem "@"  
// - Depois um domínio com pelo menos 2 caracteres no final

export const schema = Yup.object().shape({
  email: Yup
    .string()
    .required("Email obrigatório")
    .matches(emailRegex, "Email inválido"),
});
