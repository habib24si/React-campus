export default function Container({
  children,
  className = "",
}) {

  return (

    <div
      className={`
        min-h-[100vh]
        bg-slate-50
        p-6
        md:p-8
        flex
        flex-col
        ${className}
      `}
    >

      {children}

    </div>

  );
}