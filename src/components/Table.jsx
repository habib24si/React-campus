export default function Table({
  headers,
  children,
}) {

  return (

    <div className="overflow-x-auto bg-white rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-100">

      <table className="w-full border-collapse">

        {/* HEADER */}
        <thead className="bg-[#1e293b] text-white">

          <tr>

            {headers.map((header, index) => (

              <th
                key={index}
                className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold"
              >

                {header}

              </th>

            ))}

          </tr>

        </thead>

        {/* BODY */}
        <tbody>

          {children}

        </tbody>

      </table>

    </div>

  );
}