export default function Card({
  children,
  className = "",
}) {

  return (

    <div
      className={`
        bg-white
        rounded-[2rem]
        shadow-xl
        shadow-slate-100
        border
        border-slate-100
        ${className}
      `}
    >

      {children}

    </div>

  );
}