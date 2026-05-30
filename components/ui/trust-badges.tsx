import React from "react"

const badges = [
  {
    id: "google",
    label: "Google Premier Partner",
    sublabel: "Certified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    id: "meta",
    label: "Meta Business Partner",
    sublabel: "Certified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="#1877F2"/>
      </svg>
    ),
  },
  {
    id: "clutch",
    label: "Clutch Top Agency",
    sublabel: "4.9★ Rating",
    icon: (
      <span
        aria-hidden="true"
        style={{ background: "#EF4444", borderRadius: "50%", display: "inline-block", width: 20, height: 20, lineHeight: "20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}
      >
        C
      </span>
    ),
  },
  {
    id: "upcity",
    label: "UpCity Excellence Award",
    sublabel: "2022–2024",
    icon: (
      <span
        aria-hidden="true"
        style={{ background: "#7C3AED", borderRadius: "50%", display: "inline-block", width: 20, height: 20, lineHeight: "20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}
      >
        U
      </span>
    ),
  },
  {
    id: "g2",
    label: "G2 Top Rated",
    sublabel: "Digital Marketing",
    icon: (
      <span
        aria-hidden="true"
        style={{ background: "#F97316", borderRadius: "50%", display: "inline-block", width: 20, height: 20, lineHeight: "20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}
      >
        G
      </span>
    ),
  },
  {
    id: "bbb",
    label: "BBB Accredited",
    sublabel: "A+ Rating",
    icon: (
      <span
        aria-hidden="true"
        style={{ background: "#1D4ED8", borderRadius: "50%", display: "inline-block", width: 20, height: 20, lineHeight: "20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}
      >
        B
      </span>
    ),
  },
]

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
        >
          <div className="flex-shrink-0">{badge.icon}</div>
          <div className="flex flex-col">
            <span className="text-slate-800 text-sm font-semibold leading-tight whitespace-nowrap">
              {badge.label}
            </span>
            {badge.sublabel && (
              <span className="text-slate-400 text-xs leading-tight">
                {badge.sublabel}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
