import moment from "moment";
import { useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState(moment());
  const [rotate, setRotate] = useState({
    hourDeg: Math.floor((100 / 360) * time.hours()),
    minuteDeg: Math.floor((100 / 360) * time.minutes()),
    secondDeg: Math.floor((100 / 360) * time.seconds()),
  });

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTime(moment());

      setRotate({
        hourDeg: time.hour() * 30 + time.minutes() / 2,
        minuteDeg: time.minute() * 6,
        secondDeg: time.second() * 6,
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [time]);

  return { time, rotate };
};
