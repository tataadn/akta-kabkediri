import { useState } from "react";

export default function Validation40Days() {
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const checkAge = (date) => {
    const today = new Date();
    const birth = new Date(date);

    const diffTime = today - birth;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 40) {
      setMessage(
        `Usia bayi ${diffDays} hari. Melebihi batas maksimal 40 hari.`
      );
      setIsValid(false);
    } else if (diffDays >= 0) {
      setMessage(
        `Usia bayi ${diffDays} hari. Masih dalam batas pendaftaran.`
      );
      setIsValid(true);
    } else {
      setMessage("Tanggal tidak valid.");
      setIsValid(false);
    }
  };

  const handleChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
    if (date) {
      checkAge(date);
    }
  };

  return (
    <section id="validasi" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">

        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
          Validasi Usia Bayi (Maksimal 40 Hari)
        </h3>

        <input
          type="date"
          value={birthDate}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        />

        {message && (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              isValid
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
}