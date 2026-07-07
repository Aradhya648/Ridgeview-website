interface Props {
  className?: string;
  iconOnly?: boolean;
}

export default function RidgeviewLogo({ className = "", iconOnly = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ridgeview Consulting"
    >
      {/* Mountain peaks */}
      <g>
        {/* Left peak */}
        <polygon points="12,38 26,14 34,26 28,26 36,14 44,26 38,26 52,38" fill="#1e3a5f" />
        {/* Green upward arrow overlaid on right peak */}
        <polyline points="38,36 44,20 50,36" fill="none" stroke="#3a6e3a" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"/>
        <polygon points="44,13 40,22 48,22" fill="#3a6e3a"/>
        {/* Swoosh */}
        <path d="M8 40 Q30 36 52 40" stroke="#1e3a5f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M10 43 Q30 40 52 43" stroke="#3a6e3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </g>

      {!iconOnly && (
        <>
          {/* RIDGEVIEW */}
          <text x="62" y="27" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#1e3a5f" letterSpacing="2">
            RIDGEVIEW
          </text>
          {/* CONSULTING */}
          <text x="62" y="40" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="600" fill="#1e3a5f" letterSpacing="2.5">
            CONSULTING
          </text>
        </>
      )}
    </svg>
  );
}
