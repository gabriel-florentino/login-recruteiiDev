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
