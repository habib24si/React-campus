import { useState, useMemo } from "react";
import Container from "../components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


// Data awal 10 isu terhangat di Indonesia
const initialIssues = [
  { id: 1, topik: "Transformasi & Regulasi AI Nasional", kategori: "Teknologi", status: "Sangat Ramai", tren: "Naik", tanggal: "26 Mei 2026" },
  { id: 2, topik: "Persiapan Pilkada Serentak Nasional", kategori: "Politik", status: "Sangat Ramai", tren: "Naik", tanggal: "25 Mei 2026" },
  { id: 3, topik: "Isu Stabilitas Ekonomi & Inflasi Global", kategori: "Ekonomi", status: "Ramai", tren: "Stabil", tanggal: "25 Mei 2026" },
  { id: 4, topik: "Kelanjutan Pembangunan IKN Nusantara", kategori: "Infrastruktur", status: "Ramai", tren: "Stabil", tanggal: "24 Mei 2026" },
  { id: 5, topik: "Kebijakan Subsidi Energi & BBM Tepat Sasaran", kategori: "Ekonomi", status: "Sangat Ramai", tren: "Naik", tanggal: "24 Mei 2026" },
  { id: 6, topik: "Keamanan Siber & Perlindungan Data Pribadi", kategori: "Teknologi", status: "Ramai", tren: "Naik", tanggal: "23 Mei 2026" },
  { id: 7, topik: "Isu Lingkungan & Transisi Energi Hijau", kategori: "Lingkungan", status: "Cukup Ramai", tren: "Stabil", tanggal: "22 Mei 2026" },
  { id: 8, topik: "Dinamika Penegakan Hukum & Kasus Korupsi", kategori: "Hukum", status: "Sangat Ramai", tren: "Naik", tanggal: "22 Mei 2026" },
  { id: 9, topik: "Kesejahteraan Guru & Tenaga Honorer", kategori: "Pendidikan", status: "Ramai", tren: "Stabil", tanggal: "21 Mei 2026" },
  { id: 10, topik: "Perkembangan Industri Kreatif & Startup Lokal", kategori: "Bisnis", status: "Cukup Ramai", tren: "Turun", tanggal: "20 Mei 2026" },
];

export default function FiturXyz() {
  const [issues, setIssues] = useState(initialIssues);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Komponen Filter Logik
  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchesSearch = issue.topik.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Semua" || issue.kategori === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, issues]);

  const categories = ["Semua", "Teknologi", "Politik", "Ekonomi", "Infrastruktur", "Lingkungan", "Hukum", "Pendidikan", "Bisnis"];

  const [showForm, setShowForm] = useState(false);
  const [newTopik, setNewTopik] = useState("");
  const [newKategori, setNewKategori] = useState("Teknologi");
  const [newStatus, setNewStatus] = useState("Sangat Ramai");
  const [newTren, setNewTren] = useState("Naik");

  const handleSaveIssue = (e) => {
    e.preventDefault();
    if (!newTopik.trim()) return;

    const newIssue = {
      id: issues.length + 1,
      topik: newTopik,
      kategori: newKategori,
      status: newStatus,
      tren: newTren,
      tanggal: "26 Mei 2026",
    };

    setIssues([newIssue, ...issues]);
    setNewTopik("");
    setNewKategori("Teknologi");
    setShowForm(false);
  };

  return (
    <Container>
      <div className="space-y-6 flex-1 flex flex-col pt-8 mb-12 animate-fade-in">
        
        {/* 1. COMPONENT: BANNER HERO / WELCOME */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 p-8 shadow-lg text-white">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/30 mb-4">
              Live Monitoring
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Fitur Analytics XYZ</h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Selamat datang di pusat pemantauan isu strategis. Data di bawah merangkum tren perbincangan hangat, sentimen publik, dan topik utama di Indonesia saat ini.
            </p>
            
            {/* Menggunakan Button Sesuai Variant cva Anda */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => alert("Default diklik")}>Mulai Analisis</Button>
              <Button variant="secondary" size="lg" onClick={() => alert("Secondary diklik")}>Unduh Laporan</Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl"></div>
        </div>

        {/* 2. COMPONENT: STATS CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CardContent className="p-0">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Isu Dipantau</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-slate-900">{issues.length}</span>
                <span className="text-xs font-medium text-slate-500">Topik Terpilih</span>
              </div>
              <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CardContent className="p-0">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tren Meningkat</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-emerald-600">
                  {issues.filter(i => i.tren === "Naik").length}
                </span>
                <span className="text-xs font-medium text-emerald-600">▲ Eskselerasi</span>
              </div>
              <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-1/2"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CardContent className="p-0">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Kategori Teraktif</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-slate-900">Teknologi & Ekonomi</span>
              </div>
              <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. COMPONENT: FILTER & ACTION BAR */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Cari topik isu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            <div className="flex w-full sm:w-auto items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 focus:border-indigo-500 focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* MEMANGGIL TOMBOL TAMBAH DENGAN VARIANT CUSTOM */}
          <div className="w-full md:w-auto">
            <Button 
              variant={showForm ? "outline" : "default"} 
              size="lg"
              onClick={() => setShowForm(!showForm)}
              className="w-full md:w-auto font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 mr-1">
                {showForm ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                )}
              </svg>
              {showForm ? "Batal" : "Tambah Isu"}
            </Button>
          </div>
        </div>

        {/* FORM INLINE TAMBAH ISU */}
        {showForm && (
          <div className="p-5 border border-indigo-100 bg-indigo-50/20 rounded-2xl shadow-sm animate-fade-in">
            <form onSubmit={handleSaveIssue} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Topik Isu Baru</label>
                <input
                  type="text"
                  placeholder="Ketik topik isu..."
                  value={newTopik}
                  onChange={(e) => setNewTopik(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-1.5 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Kategori</label>
                <select
                  value={newKategori}
                  onChange={(e) => setNewKategori(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm"
                >
                  {categories.filter(c => c !== "Semua").map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <Button variant="default" size="lg" type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Simpan Isu
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* 4. COMPONENT: UTAMA - TABEL DATA ISU */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm text-slate-600">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-xs font-semibold uppercase text-slate-500 tracking-wider">
                  <th className="px-6 py-4 text-center w-12">No</th>
                  <th className="px-6 py-4">Topik Isu Strategis</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4 text-center">Status Volume</th>
                  <th className="px-6 py-4 text-center">Tren Pergerakan</th>
                  <th className="px-6 py-4 text-right">Terakhir Diperbarui</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredIssues.length > 0 ? (
                  filteredIssues.map((issue, index) => (
                    <tr key={issue.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 text-center font-medium text-slate-400 group-hover:text-indigo-600 transition-colors">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        <div className="max-w-xs sm:max-w-md truncate lg:whitespace-normal group-hover:text-indigo-950">
                          {issue.topik}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm">
                          {issue.kategori}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                            issue.status === "Sangat Ramai"
                              ? "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20"
                              : issue.status === "Ramai"
                              ? "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20"
                              : "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20"
                          }`}
                        >
                          <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                            issue.status === "Sangat Ramai" ? "bg-rose-500" : issue.status === "Ramai" ? "bg-amber-500" : "bg-sky-500"
                          }`} />
                          {issue.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">
                        <span
                          className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md ${
                            issue.tren === "Naik"
                              ? "text-emerald-700 bg-emerald-50"
                              : issue.tren === "Turun"
                              ? "text-rose-700 bg-rose-50"
                              : "text-slate-500 bg-slate-50"
                          }`}
                        >
                          {issue.tren === "Naik" && "▲"}
                          {issue.tren === "Turun" && "▼"}
                          {issue.tren === "Stabil" && "▬"}
                          {issue.tren}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-xs text-slate-400 font-medium">
                        {issue.tanggal}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                      Tidak ada data isu yang cocok dengan pencarian Anda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 5. COMPONENT: PAGINATION BOTTOM BAR */}
          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4">
            <div className="text-xs text-slate-500">
              Menampilkan <span className="font-medium text-slate-700">{filteredIssues.length}</span> dari{" "}
              <span className="font-medium text-slate-700">{issues.length}</span> data
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Sebelumnya</Button>
              <Button variant="outline" size="sm" disabled>Selanjutnya</Button>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}



