import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        Get in Touch
      </p>

      <h1 className="mt-4 text-4xl font-black sm:text-5xl">
        Let's <span className="text-cyan-400">connect.</span>
      </h1>

      <p className="mt-4 text-slate-400">
        Send us a message using the sample contact form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
      >
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Email Address
          </label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Message
          </label>
          <textarea
            required
            rows="4"
            placeholder="Write your message..."
            className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Send Message →
        </button>

        {submitted && (
          <p className="rounded-xl bg-emerald-400/10 p-3 text-sm text-emerald-300">
            Form submitted successfully! This is a frontend demo.
          </p>
        )}
      </form>
    </section>
  );
}