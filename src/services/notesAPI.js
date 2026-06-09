import axios from 'axios';

const API_URL = "https://chsocsdghtqrwfjtiwut.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoc29jc2RnaHRxcndmanRpd3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MzQ5MjEsImV4cCI6MjA5NjUxMDkyMX0.cXxqNf6MX-QR4abtVuejPoTS83yWy-eGlwAbN1pehEU";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const notesAPI = {
    // 1. Mengambil data dari Supabase (Gunakan parameter select)
    async fetchNotes() {
        try {
            const response = await axios.get(`${API_URL}?select=*`, { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching notes:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Gagal mengambil data catatan dari server");
        }
    },

    // 2. Menambahkan data baru ke Supabase
    async createNote(data) {
        try {
            const response = await axios.post(API_URL, data, { 
                headers: {
                    ...headers,
                    // Sangat Penting untuk Supabase POST agar mereturn representation data baru
                    "Prefer": "return=representation" 
                } 
            });
            return response.data;
        } catch (error) {
            console.error("Error creating note:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || error.response?.data?.details || "Gagal menyimpan catatan");
        }
    },

    // 3. Menghapus data dari Supabase berdasarkan ID
    async deleteNote(id) {
        try {
            // Supabase menggunakan format URL "?id=eq.nilai_id" untuk melakukan filter data yang akan dihapus
            const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
            return response.data;
        } catch (error) {
            console.error("Error deleting note:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Gagal menghapus catatan dari server");
        }
    }
};