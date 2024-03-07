import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(
      new Date()
        .toLocaleTimeString('en-IN', {
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/(:\d{2}|)$/, "")
    );
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(
          new Date()
            .toLocaleTimeString('en-IN', {
              hour: "2-digit",
              minute: "2-digit",
            })
            .replace(/(:\d{2}|)$/, "")
        );
      }, 1000);
      return () => clearInterval(interval);
    });
    return (
      <div className="clock hidden md:block social-icons body-medium font-quicksand text-socials">
        {time}
      </div>
    );
  };

export default Clock;