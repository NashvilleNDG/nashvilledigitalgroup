"use client"

import { useEffect } from "react"

export function LiveChat() {
  useEffect(() => {
    // Tawk.to Live Chat — replace YOUR_TAWK_TO_PROPERTY_ID with your ID from tawk.to dashboard
    // Find your Property ID at: https://dashboard.tawk.to/#/account/property
    const s1 = document.createElement("script")
    const s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/1xxxxxxxx"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0?.parentNode?.insertBefore(s1, s0)
  }, [])

  return null
}
