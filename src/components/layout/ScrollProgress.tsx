import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[10000] h-0.5 origin-left bg-accent"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden
    />
  );
}
