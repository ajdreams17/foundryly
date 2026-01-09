"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      segment: String(form.get("segment") || ""),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setMessage("You're in! We'll reach out with early access.");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Unable to submit. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <label className="block text-sm font-bold text-white/90">
        Name
        <input
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-violet-500/20"
        />
      </label>

      <label className="mt-4 block text-sm font-bold text-white/90">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-violet-500/20"
        />
      </label>

      <label className="mt-4 block text-sm font-bold text-white/90">
        What are you building?
        <select
          name="segment"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-violet-500/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option>Solo / service business</option>
          <option>Agency / studio</option>
          <option>E-commerce</option>
          <option>Startup / SaaS</option>
          <option>Other</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-300 px-5 py-3 font-extrabold text-[#070B14] disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Join waitlist"}
      </button>

      {message && (
        <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-200" : "text-red-200"}`}>
          {message}
        </p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-white/60">
        Foundryly provides business tools and education and does not provide legal advice.
      </p>
    </form>
  );
}
