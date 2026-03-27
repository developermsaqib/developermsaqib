"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus("error");
      setServerError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>
        <div>
          <input
            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Your Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>
      </div>

      <div>
        <input
          className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
      </div>

      <div>
        <textarea
          rows={6}
          className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
      </div>

      {status === "success" && (
        <p className="text-green-400">Your message has been sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-red-400">{serverError || "Could not send message."}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
