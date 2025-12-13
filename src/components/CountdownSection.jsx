import { useEffect, useState } from "react";
import bg from "../assets/image/bg.jpg"; // add your image

export default function CountdownSection() {
  const weddingDate = new Date("2026-11-15T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="w-full h-[320px] md:h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] mb-8 italic">
          Don't miss it
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <CountdownCircle value={timeLeft.days} label="Days" />
          <CountdownCircle value={timeLeft.hours} label="Hours" />
          <CountdownCircle value={timeLeft.minutes} label="Minutes" />
          <CountdownCircle value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}

function CountdownCircle({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center text-2xl md:text-3xl font-semibold">
        {value}
      </div>
      <span className="mt-2 text-sm tracking-wide">{label}</span>
    </div>
  );
}
