import { useState } from "react";
import Clock from "./Clock.jsx";
import "./App.css";

const dataAwal = [
  { id: 1, nim: "2310511001", nama: "Andi Pratama", noHp: "0812-3456-7801", email: "andi.pratama@mail.com", alamat: "Jl. Margonda Raya No. 12, Depok", prodi: "Informatika", tahunMasuk: 2023 },
  { id: 2, nim: "2310411002", nama: "Siti Nurhaliza", noHp: "0813-4567-8902", email: "siti.nurhaliza@mail.com", alamat: "Jl. Fatmawati No. 45, Jakarta Selatan", prodi: "Sistem Informasi", tahunMasuk: 2023 },
  { id: 3, nim: "2410311003", nama: "Budi Santoso", noHp: "0857-1234-5603", email: "budi.santoso@mail.com", alamat: "Jl. Raya Bogor Km. 30, Jakarta Timur", prodi: "Teknik Elektro", tahunMasuk: 2024 },
  { id: 4, nim: "2410711004", nama: "Dewi Lestari", noHp: "0878-9012-3404", email: "dewi.lestari@mail.com", alamat: "Jl. Tebet Barat No. 8, Jakarta Selatan", prodi: "Manajemen", tahunMasuk: 2024 },
  { id: 5, nim: "2510511005", nama: "Rizky Ramadhan", noHp: "0821-5678-9005", email: "rizky.ramadhan@mail.com", alamat: "Jl. Kalibata Timur No. 21, Jakarta Selatan", prodi: "Informatika", tahunMasuk: 2025 },
  { id: 6, nim: "2510111006", nama: "Putri Anggraini", noHp: "0896-2345-6706", email: "putri.anggraini@mail.com", alamat: "Jl. Pondok Indah No. 3, Jakarta Selatan", prodi: "Akuntansi", tahunMasuk: 2025 },
];

function App() {
  // useState: menyimpan data mahasiswa (data dummy)
  const [mahasiswa] = useState(dataAwal);

  return (
    <div className="page">
      <header className="hero">
        <h1>Student Management</h1>
        <p>Daftar Data Mahasiswa</p>
      </header>

      <main className="container">
        <section className="info">
          <div className="card card--count">
            <span className="card__label">Jumlah Mahasiswa</span>
            <span className="card__value">{mahasiswa.length}</span>
            <span className="card__hint">mahasiswa terdaftar</span>
          </div>
          <Clock />
        </section>

        <section className="card table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. Hp</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {/* looping data dengan .map() + key unik */}
                {mahasiswa.map((m) => (
                  <tr key={m.id}>
                    <td data-label="NIM">{m.nim}</td>
                    <td data-label="Nama" className="nama">{m.nama}</td>
                    <td data-label="No. Hp">{m.noHp}</td>
                    <td data-label="Email">{m.email}</td>
                    <td data-label="Alamat">{m.alamat}</td>
                    <td data-label="Prodi"><span className="badge">{m.prodi}</span></td>
                    <td data-label="Tahun Masuk">{m.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
