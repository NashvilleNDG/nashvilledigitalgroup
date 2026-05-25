"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sky-500 transition-colors text-sm";

const labelClass = "block text-slate-400 text-sm font-medium mb-2";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
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
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  }

  if (status === "success") {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
        <p className="text-4xl mb-4">✅</p>
        <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
        <p className="text-slate-400">
          We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(615) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company / Business Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select a service...
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="AI Solutions">AI Solutions</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO & SEM">SEO &amp; SEM</option>
          <option value="Social Media">Social Media</option>
          <option value="Hospitality AI">Hospitality AI</option>
          <option value="Engineering Services">Engineering Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Monthly Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select a budget range...
          </option>
          <option value="Under $1,000/month">Under $1,000/month</option>
          <option value="$1,000 – $5,000/month">$1,000 – $5,000/month</option>
          <option value="$5,000 – $10,000/month">$5,000 – $10,000/month</option>
          <option value="$10,000 – $25,000/month">$10,000 – $25,000/month</option>
          <option value="$25,000+/month">$25,000+/month</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project and goals..."
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all"
      >
        {status === "submitting" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
