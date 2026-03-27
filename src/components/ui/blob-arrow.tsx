interface BlobArrowProps {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function BlobArrow({ className = "w-5 h-5", direction = "up" }: BlobArrowProps) {
  const rotations = { up: "0", down: "180", left: "270", right: "90" };

  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      {/* Top centre blob */}
      <circle cx="12" cy="4" r="3.5" />
      {/* Middle body — organic shape connecting top to bottom */}
      <path d="M12 7C9 7 7 10 7 13C7 16 9 17 12 17C15 17 17 16 17 13C17 10 15 7 12 7Z" />
      {/* Left wing blob */}
      <ellipse cx="5" cy="12" rx="3.5" ry="4" transform="rotate(-20 5 12)" />
      {/* Right wing blob */}
      <ellipse cx="19" cy="12" rx="3.5" ry="4" transform="rotate(20 19 12)" />
      {/* Bottom drop */}
      <path d="M12 18C10.5 18 9.5 19.5 9.5 21.5C9.5 24 10.5 26 12 26C13.5 26 14.5 24 14.5 21.5C14.5 19.5 13.5 18 12 18Z" />
    </svg>
  );
}
