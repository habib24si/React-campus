import PageHeader from "../components/PageHeader";
import Container from "../components/Container";

export default function FiturXyz() {
  return (
    <Container>
      <div className="space-y-8 flex-1 flex flex-col">
        <PageHeader title="Fitur Xyz" breadcrumb="Fitur" />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Selamat datang di Fitur Xyz</h1>
          <p className="mt-4 text-slate-600">
            Ini adalah halaman sederhana untuk fitur Xyz. Anda bisa menambahkan konten atau komponen lain di sini.
          </p>
        </div>
      </div>
    </Container>
  );
}