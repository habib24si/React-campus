import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");

    // 🔥 dummy data (contoh hasil search)
    const data = ["Dashboard", "Orders", "Customers", "Reports"];

    const filtered = data.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div id="header-container" className="flex justify-between items-center p-4">

                {/* 🔥 SEARCH BAR (UPGRADE) */}
                <div id="search-bar" className="relative w-full max-w-lg">

                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search menu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowModal(true)}
                        className="border border-gray-200 p-2 pl-10 bg-white w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                    {/* 🔥 DROPDOWN HASIL SEARCH */}
                    {showModal && search && (
                        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                            {filtered.length > 0 ? (
                                filtered.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSearch(item);
                                            setShowModal(false);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-400">
                                    Tidak ditemukan
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Icon & Profile Section */}
                <div id="icons-container" className="flex items-center space-x-4">

                    <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                        <FaBell />
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">
                            50
                        </span>
                    </div>

                    <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                        <FcAreaChart />
                    </div>

                    <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                        <span>
                            Hello, <b>Falahal Nabil</b>
                        </span>
                        <img
                            src="/images/foto.png"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}