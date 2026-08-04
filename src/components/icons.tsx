type IconProps = {
  className?: string;
};

export function IconCalendar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.87.5 3.63 1.44 5.15L2 22l5.1-1.54c1.44.79 3.08 1.2 4.94 1.2 5.46 0 9.9-4.44 9.9-9.9C21.94 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.15-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.6.83 2.06.9 2.21.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.21.55.34.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function IconGoogle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3C33.6 32 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l5.1-5.1C33.1 7.7 28.8 6 24 6 13.5 6 5 14.5 5 25s8.5 19 19 19 19-8.5 19-19c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6 4.4C13.9 15.7 18.6 13 24 13c2.8 0 5.3 1 7.3 2.7l5.1-5.1C33.1 7.7 28.8 6 24 6c-7.4 0-13.7 4.3-16.7 10.5z" />
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.2C29.2 35.4 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.1 4.7C9.9 39.6 16.4 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H24v7.2h11.3c-.8 2.4-2.4 4.4-4.4 5.8l6.1 5.2C39.9 36.7 43 31.3 43 25c0-1.5-.1-2.7-.4-4.5z" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const treatmentPaths: Record<string, React.ReactNode> = {
  ligament: <path d="M8 3v6l-3 3v9h4v-6h6v6h4v-9l-3-3V3" strokeLinejoin="round" strokeLinecap="round" />,
  neck: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <path d="M12 7.4V13m0 0l-4 8m4-8l4 8" strokeLinecap="round" />
    </>
  ),
  shoulder: (
    <>
      <circle cx="9" cy="5" r="2.2" />
      <path d="M9 7.2v6l6 3v6M9 13l-4 3v5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  elbow: <path d="M6 4l3 7-2 9M6 4h5l4 6-3 10" strokeLinecap="round" strokeLinejoin="round" />,
  sports: (
    <>
      <circle cx="15" cy="4.5" r="2" />
      <path d="M15 6.5l-2 4-5 1 1 3 5-1 2 3-2 5m-6-6l3-1" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  prenatal: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <path
        d="M12 7.2c-3 0-4 3-4 5s1 3 1 3-2 5-2 7h4l1-5 1 5h4c0-2-2-7-2-7s1-1 1-3-1-5-4-5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function IconTreatment({ name, className }: { name: keyof typeof treatmentPaths; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
      {treatmentPaths[name]}
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" className={className}>
      <path d="M12 21s-7-4.5-9.5-9C.5 8 2.5 4 6.5 4c2 0 3.5 1.2 4.5 2.6C12 5.2 13.5 4 15.5 4 19.5 4 21.5 8 19.5 12 17 16.5 12 21 12 21z" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" className={className}>
      <path d="M12 2l2.4 6.6L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.6-.4z" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  );
}

export function IconTools({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12l4-8 4 6 3-4 7 6" />
    </svg>
  );
}
