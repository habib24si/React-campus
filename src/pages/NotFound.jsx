import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    // Menggunakan slate untuk kesan lebih modern & menambahkan background halus
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
      
      {/* 404: Dibuat lebih besar, tracking lebih rapat, dan warna lebih tegas */}
      <h1 className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter">
        404
      </h1>

      {/* Teks: Menambahkan font-semibold dan warna yang lebih seimbang */}
      <p className="text-lg md:text-xl font-medium text-slate-600 mt-4 text-center">
        Oops! Halaman yang Anda cari tidak ditemukan.
      </p>

      {/* Button: Menambahkan transisi, shadow, dan rounded yang lebih halus (xl) */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl 
                   shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 
                   transition-all duration-200 transform hover:-translate-y-1"
      >
        Kembali ke Dashboard
      </Link>

      {/* Dekorasi tambahan opsional: teks kecil di bawah */}
      <span className="absolute bottom-10 text-slate-400 text-sm tracking-wide font-light">
        &copy; {new Date().getFullYear()} Your Brand Name
      </span>

    </div>
  );
}