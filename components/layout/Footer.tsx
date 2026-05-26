import Link from "next/link"
import { company, footerServiceLinks, footerCompanyLinks } from "@/lib/site-data"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ndg-logo.png"
              alt="Nashville Digital Group"
              className="h-12 w-auto object-contain mb-3"
            />
            <p className="text-white text-sm mt-3 max-w-xs leading-relaxed">
              {company.tagline}
            </p>
            <div className="mt-4 space-y-1 text-white text-sm">
              <p>{company.phone}</p>
              <p>{company.email}</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-white text-sm">
              <p>{company.location}</p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${company.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </p>
              <p>{company.hours}</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm">
            &copy; 2026 Nashville Digital Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/nashvilledigitalgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/nashville-digital-group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
