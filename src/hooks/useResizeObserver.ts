import { useEffect, useState, useRef } from "react";

const useResizeObserver = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ height, width });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, ...size };
};

export default useResizeObserver;
