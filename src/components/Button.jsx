export default function Button({
  children,
  type = "primary",
  icon,
  onClick,
}) {

  const styles = {

    primary:
      "bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg shadow-teal-100",

    outline:
      "border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#1e293b] hover:text-white",

    dark:
      "bg-[#1e293b] hover:bg-[#0f172a] text-white shadow-lg shadow-slate-200",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

  };

  return (

    <button
      onClick={onClick}
      className={`
        flex
        items-center
        justify-center
        gap-3
        px-5
        py-3
        rounded-2xl
        font-bold
        transition-all
        active:scale-95
        ${styles[type]}
      `}
    >

      {icon}

      {children}

    </button>

  );
}