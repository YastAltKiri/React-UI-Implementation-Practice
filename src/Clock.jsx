import { useState, useEffect } from "react";

function Clock() {
  // useState: menyimpan waktu saat ini
  const [now, setNow] = useState(new Date());

  // useEffect: jalankan interval 1 detik setelah komponen dirender
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // cleanup: hentikan interval saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString("id-ID", { hour12: false }).replace(/\./, ":");
  const date = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock">
      <span className="clock__label">Waktu Sekarang</span>
      <span className="clock__time">{time}</span>
      <span className="clock__date">{date}</span>
    </div>
  );
}

export default Clock;
