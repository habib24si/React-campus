export default function Badge({
  loyalty,
  children,
  type = "primary",
}) {

  const loyaltyStyle = {

    Gold:
      "bg-amber-50 text-amber-500",

    Silver:
      "bg-slate-100 text-slate-500",

    Bronze:
      "bg-orange-50 text-orange-500",

  };

  const types = {

    primary:
      "bg-blue-100 text-blue-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",

    info:
      "bg-cyan-100 text-cyan-700",

  };

  return (

    <span
      className={`
        inline-flex
        items-center
        justify-center
        px-4
        py-1.5
        rounded-full
        text-xs
        font-bold
        tracking-wider
        uppercase
        ${
          loyalty
            ? loyaltyStyle[loyalty]
            : types[type]
        }
      `}
    >

      {loyalty || children}

    </span>

  );
}