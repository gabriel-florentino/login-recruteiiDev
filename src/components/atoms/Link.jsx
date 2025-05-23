/**
 * Componente: LinkText
 * Descrição: Componente de link estilizado, usado para navegação com o React Router.
 *
 * Props:
 * @param {string} to - Caminho do link (default: "/")
 * @param {ReactNode} children - Conteúdo interno do link
 * @param {string} className - Classes Tailwind adicionais
 *
 * Tecnologias:
 * - React Router DOM
 * - TailwindCSS
 */

import { Link } from "react-router-dom";

export default function LinkText({
  to = "/",
  children = "Link",
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`${className} text-sm text-primary hover:underline font-medium text-textLink-light max-sm:text-xs`}
    >
      {children}
    </Link>
  );
}
