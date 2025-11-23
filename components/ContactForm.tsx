"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.match(/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/))
      errs.email = "Email is invalid";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    console.log("Form Submitted:", form);
    alert("Form submitted successfully! (Check console)");
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      <input
        className="w-full p-2 border rounded"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message}</p>
      )}
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
  );
}
