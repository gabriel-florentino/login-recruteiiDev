/**
 * Componente de texto estilizado para parágrafos ou informações secundárias.
 *
 * @component
 *
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo exibido no texto.
 * @param {string} [props.className="text-textSecondary-light"] - Classe CSS personalizada para estilização.
 *
 * @returns {JSX.Element} Elemento JSX que representa um parágrafo estilizado.
 */

export default function Paragraph({
  children,
  className = "text-textSecondary-light",
}) {
  return (
    <p className={`${className} text-body mb-2`}>
      {children}
    </p>
  );
}
