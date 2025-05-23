/**
 * Componente: RememberMeCheckbox
 * Descrição: Checkbox reutilizável com label para "Lembrar de mim".
 *
 * Props:
 * @param {function} register - Função do React Hook Form para registrar o input
 * @param {string} nameSaveData - Nome do campo no form (default: "rememberMe")
 * @param {string} text - Texto exibido ao lado da checkbox (default: "Lembrar de mim")
 *
 * Tecnologias:
 * - React Hook Form
 * - TailwindCSS
 */

export default function RememberMeCheckbox({
  register,
  nameSaveData = "rememberMe",
  text = "Lembrar de mim",
}) {
  return (
    <label className="flex gap-2 max-sm:text-xs text-sm text-primary-light">
      <input
        type="checkbox"
        className="form-checkbox accent-primary rounded-sm w-4 h-4"
        {...register(nameSaveData)}
      />
      {text}
    </label>
  );
}
