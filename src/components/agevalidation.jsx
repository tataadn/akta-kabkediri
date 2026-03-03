import { useState } from "react";

export default function AgeValidation({ onValid }) {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!birthDate) {
      setError("Tanggal lahir wajib diisi.");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    const diffTime = today - birth;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays <= 40) {
      localStorage.setItem("validated", "true");
      onValid();
    } else {
      setError(`Akses ditolak. Usia bayi ${Math.floor(diffDays)} hari (maksimal usia 40 hari). Pembuatan akta di RS DKT KEDIRI hanya bisa melayani bayi dengan usia maksimal 40 hari, lebih dari itu bisa dilakukan di kantor Disdukcapil Kab Kediri / Sahaja Lekat Kecamatan. Terima kasih atas pengertiannya.`);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "10px" }}>Validasi Usia Bayi</h2>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          Masukkan tanggal lahir bayi:
        </p>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
            setError(""); // reset error saat user input ulang
          }}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Validasi
        </button>

        {error && (
          <p style={styles.error}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  input: {
    marginTop: "10px",
    marginBottom: "15px",
    padding: "8px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #1d4ed8",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "600",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 8px rgba(37, 99, 235, 0.3)",
  },
  error: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#dc2626",
    fontWeight: "500",
  },
};