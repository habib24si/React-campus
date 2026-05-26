export default function Footer() {

  return (

    <footer className="mt-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm p-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div>

          <h2 className="text-xl font-black text-[#1e293b]">

            Sedap Dashboard

          </h2>

          <p className="text-slate-400 text-sm mt-1">

            Premium Restaurant Management System

          </p>

        </div>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm font-semibold text-slate-500">

          <a
            href="#"
            className="hover:text-[#0d9488] transition"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="hover:text-[#0d9488] transition"
          >
            Products
          </a>

          <a
            href="#"
            className="hover:text-[#0d9488] transition"
          >
            Customers
          </a>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">

        © 2026 Sedap Dashboard. All rights reserved.

      </div>

    </footer>

  );
}