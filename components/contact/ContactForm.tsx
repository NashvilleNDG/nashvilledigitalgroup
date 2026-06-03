"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

// ── Shared input / label styles — matches ProposalForm ──────────────────────
const inputClass =
  "w-full bg-white/8 border border-white/20 rounded-xl px-4 py-3.5 text-white font-medium text-[15px] placeholder:text-white focus:outline-none focus:border-sky-400 focus:bg-white/12 transition-all duration-200";

const selectClass =
  "w-full bg-[#0d1520] border border-white/20 rounded-xl px-4 py-3.5 text-white font-medium text-[15px] focus:outline-none focus:border-sky-400 transition-all duration-200 appearance-none cursor-pointer";

const labelClass =
  "block text-[11px] font-bold text-white uppercase tracking-[0.18em] mb-2";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: replace with real backend — Resend / Formspree / API route
    setTimeout(() => setStatus("success"), 1500);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-20 px-8
                      rounded-2xl border border-sky-400/25 bg-black/40 backdrop-blur-xl text-center">
        <div className="w-16 h-16 rounded-full bg-sky-400/15 border border-sky-400/40
                        flex items-center justify-center">
          <CheckCircle size={32} className="text-sky-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="text-white text-sm max-w-xs">
          We&apos;ll be in touch within 1 business day. Our team is standing by
          to help grow your business.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full Name <span className="text-sky-400">*</span>
        </label>
        <input
          suppressHydrationWarning
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="John Smith"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-sky-400">*</span>
          </label>
          <input
            suppressHydrationWarning
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            suppressHydrationWarning
            id="phone"
            name="phone"
            type="tel"
            placeholder="(615) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Company + Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input
            suppressHydrationWarning
            id="company"
            name="company"
            type="text"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="website" className={labelClass}>Website URL</label>
          <input
            suppressHydrationWarning
            id="website"
            name="website"
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className={labelClass}>Service Interest</label>
        <div className="relative">
          <select
            suppressHydrationWarning
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>Select a service…</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Web Development">Web Development</option>
            <option value="SEO & SEM">SEO &amp; SEM</option>
            <option value="Social Media">Social Media Management</option>
            <option value="Hospitality AI">Hospitality AI</option>
            <option value="Engineering Services">Engineering Services</option>
            <option value="Other">Other</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Monthly Budget */}
      <div>
        <label htmlFor="budget" className={labelClass}>Monthly Budget</label>
        <div className="relative">
          <select
            suppressHydrationWarning
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>Select a budget range…</option>
            <option value="Under $1,000/month">Under $1,000 / month</option>
            <option value="$1,000–$5,000/month">$1,000 – $5,000 / month</option>
            <option value="$5,000–$10,000/month">$5,000 – $10,000 / month</option>
            <option value="$10,000–$25,000/month">$10,000 – $25,000 / month</option>
            <option value="$25,000+/month">$25,000+ / month</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          suppressHydrationWarning
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project and goals…"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        suppressHydrationWarning
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-sky-500
                   hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed
                   text-white font-bold py-4 rounded-xl transition-all duration-200
                   hover:scale-[1.01] active:scale-[0.99]
                   shadow-lg shadow-sky-500/25 text-[15px] tracking-wide"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending…
          </span>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-white">
        No spam. We respond within 1 business day.
      </p>
    </form>
  );
}
