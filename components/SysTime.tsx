'use client';

import { useEffect, useState } from 'react';

export default function SysTime() {
  const [timeString, setTimeString] = useState('00:00:00:00');

  useEffect(() => {
    let animationFrameId: number;

    function updateTime() {
      const now = new Date();
      const newTimeString =
        now.toISOString().split('T')[1].split('.')[0] +
        ':' +
        Math.floor(now.getMilliseconds() / 10)
          .toString()
          .padStart(2, '0');
      setTimeString(newTimeString);
      animationFrameId = requestAnimationFrame(updateTime);
    }

    updateTime();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <span id="sys-time">{timeString}</span>;
}
