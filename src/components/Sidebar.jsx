import { FaShoppingCart, FaBoxOpen, FaPlus } from "react-icons/fa";
import { MdHeadsetMic, MdSpaceDashboard, MdAnalytics, MdReviews, MdRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // Update class menu untuk tema Teal & Navy
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-2xl p-4 space-x-3 transition-all duration-300 group
    ${
      isActive
        ? "text-white bg-[#0d9488] font-bold shadow-lg shadow-teal-100"
        : "text-slate-500 hover:text-[#0d9488] hover:bg-teal-50 hover:pl-6"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-[320px] flex-col bg-white p-8 border-r border-slate-100 shadow-sm"
    >
      {/* Logo Section */}
      <div id="sidebar-logo" className="flex flex-col mb-10 px-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1e293b] rounded-xl flex items-center justify-center">
            <span className="text-[#0d9488] text-2xl font-black">S</span>
          </div>
          <span className="font-poppins text-3xl font-black tracking-tighter text-[#1e293b]">
            Sedap<span className="text-[#0d9488]">.</span>
          </span>
        </div>
        <p className="text-xs font-bold text-slate-400 mt-2 tracking-[0.2em] uppercase">
          Modern Admin Dashboard
        </p>
      </div>

      {/* MENU SECTION */}
      <nav id="sidebar-menu" className="flex-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-4">
          Main Menu
        </p>
        <ul id="menu-list" className="space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink to="/" className={menuClass}>
              <MdSpaceDashboard className="text-xl" />
              <span className="text-sm">Dashboard</span>
            </NavLink>
          </li>

          {/* Orders */}
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaShoppingCart className="text-xl" />
              <span className="text-sm">Orders List</span>
            </NavLink>
          </li>

          {/* Customers */}
          <li>
            <NavLink to="/customers" className={menuClass}>
              <MdHeadsetMic className="text-xl" />
              <span className="text-sm">Customers</span>
            </NavLink>
          </li>

          {/* PRODUCTS */}
          <li>
            <NavLink to="/product" className={menuClass}>
              <FaBoxOpen className="text-xl" />
              <span className="text-sm">Products</span>
            </NavLink>
          </li>

           {/* {/* fitur xyz*/}
          <li>
            <NavLink to="/fiturXyz" className={menuClass}>
              <FaBoxOpen className="text-xl" />
              <span className="text-sm">Fitur Xyz</span>
            </NavLink>
          </li>

          {/* Divider */}
          <div className="my-6 border-t border-slate-50 mx-4"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-4">
            Insights
          </p>

          <li>
            <NavLink to="/Error-400" className={menuClass}>
              <MdAnalytics className="text-xl" />
              <span className="text-sm">Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Error-401" className={menuClass}>
              <MdReviews className="text-xl" />
              <span className="text-sm">Reviews</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Error-403" className={menuClass}>
              <MdRestaurantMenu className="text-xl" />
              <span className="text-sm">Foods</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* FOOTER / UPGRADE CARD */}
      <div id="sidebar-footer" className="mt-auto pt-10">
        <div
          id="footer-card"
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-[2rem] shadow-xl relative overflow-hidden group"
        >
          {/* Decorative Circle */}
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-teal-500/20 rounded-full blur-2xl group-hover:bg-teal-500/40 transition-all"></div>
          
          <div className="relative z-10 flex flex-col">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
              Menu Builder
            </span>
            <p className="text-white text-sm font-medium leading-relaxed mb-4">
              Organize your dashboard layouts easily.
            </p>

            <button
              id="add-menu-button"
              className="flex justify-center items-center gap-2 py-3 bg-[#0d9488] hover:bg-teal-400 text-white rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              <FaPlus className="text-[10px]" />
              Add Custom Menus
            </button>
          </div>
        </div>

        <div className="mt-6 px-2">
          <p className="text-[10px] font-bold text-slate-400">
            &copy; 2026 Sedap. Premium Admin
          </p>
        </div>
      </div>
    </div>
  );
}