export default function Avatar({
  name,
  image,
  active = false,
}) {

  return (

    <div className="relative">

      {/* IMAGE */}
      {image ? (

        <img
          src={image}
          alt={name}
          className="
            w-32
            h-32
            rounded-[2rem]
            object-cover
            border-4
            border-white/20
            shadow-2xl
          "
        />

      ) : (

        <div
          className="
            w-32
            h-32
            rounded-[2rem]
            bg-[#0d9488]
            text-white
            flex
            items-center
            justify-center
            text-4xl
            font-black
            shadow-2xl
          "
        >

          {name?.charAt(0)}

        </div>

      )}

      {/* ACTIVE STATUS */}
      {active && (

        <div
          className="
            absolute
            bottom-2
            right-2
            w-5
            h-5
            rounded-full
            bg-green-400
            border-4
            border-[#0f172a]
          "
        ></div>

      )}

    </div>

  );
}