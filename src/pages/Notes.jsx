import React, { useState, useEffect } from 'react';
import { notesAPI } from "../services/notesAPI";
import { AiFillDelete } from "react-icons/ai";
import AlertBox from "../components/AlertBox"; 
import GenericTable from "../components/GenericTable";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    const [dataForm, setDataForm] = useState({
        title: "", content: "", status: ""
    });

    // Load data saat pertama kali komponen di-render ke layar
    useEffect(() => {
        loadNotes();
    }, []);

    // Memanggil fetchNotes beserta error/loading handling dari API
    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // Handle form submission untuk membuat notes baru ke REST API
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.createNote(dataForm);

            setSuccess("Catatan berhasil ditambahkan!");

            // Kosongkan Form setelah Success
            setDataForm({ title: "", content: "", status: "" });

            // Hilangkan pesan Success setelah 3 detik
            setTimeout(() => setSuccess(""), 3000);
            
            // Panggil Ulang loadNotes untuk refresh data tabel/list secara otomatis
            loadNotes();
            
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message || "Gagal menyimpan data"}`);
        } finally {
            setLoading(false);
        }
    };

    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            // Refresh data
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Notes App
                </h2>
            </div>

            {/* Informasi Alert Box Success dan Error */}
            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Tambah Catatan Baru
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        required
                        disabled={loading} // Disable saat loading
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                            focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                            duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        required
                        rows="2"
                        disabled={loading} // Disable saat loading
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                            focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                            duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />

                    <button
                        type="submit"
                        disabled={loading} // Disable tombol saat loading
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                            rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                            focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-200 shadow-lg w-full sm:w-auto"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Data"}
                    </button>
                </form>
            </div>

            {/* Notes Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4 border-b border-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>
              
                <GenericTable
                    columns={["#", "Judul", "Isi Catatan", "Aksi"]} // Kolom "Aksi" diterapkan di sini
                    data={notes}
                    renderRow={(note, index) => (
                        <>
                            <td className="px-6 py-4 font-medium text-gray-700">
                                {index + 1}.
                            </td>
                            <td className="px-6 py-4">
                                <div className="font-semibold text-emerald-600">
                                    {note.title}
                                </div>
                            </td>
                            <td className="px-6 py-4 max-w-xs">
                                <div className="truncate text-gray-600">
                                    {note.content}
                                </div>
                            </td>
                            <td className="px-6 py-4 max-w-xs">
                                <div className="truncate text-gray-600">
                                    <button
                                        onClick={() => handleDelete(note.id)} // Menggunakan note.id dari database
                                        disabled={loading} // Disable tombol hapus ketika loading
                                        className="disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                                    >
                                        <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                                    </button>
                                </div>
                            </td>
                        </>
                    )}
                />
            </div>
        </div>
    );
}