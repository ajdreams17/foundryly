"use client";

import { useRef, useState } from "react";

export default function WaitlistForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
         <p className="text-xs text-red-400">WAITLIST v2 (GOOGLE FORMS)</p>
      <iframe name="hidden_iframe" style={{ display: "none" }} />

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSf6WFYSVoyweSgm4XQ4vzID2Ll-P7xHx5r1vKP6Ub7svosrEQ/formResponse"
        method="POST"
        target="hidden_iframe"
        className="flex flex-col gap-4"
        onSubmit={() => {
          setSubmitted(true);
          setTimeout(() => formRef.current?.reset(), 50);
        }}
      >
        <label className="text-sm font-semibold text-white/80">
          Name
          <input
            name="entry.5007419"
            placeholder="Your name"
            required
            className="mt-2 w-full rounded-2xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none"
          />
        </label>

        <label className="text-sm font-semibold text-white/80">
          Email
          <input
            type="email"
            name="entry.1434504258"
            placeholder="Email address"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-2xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none"
          />
        </label>

        <label className="text-sm font-semibold text-white/80">
          Company stage
          <select
            name="entry.324466453"
            required
            defaultValue=""
            className="mt-2 w-full rounded-2xl bg-white/10 px-4 py-3 text-white outline-none"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Idea">Idea</option>
            <option value="Early revenue">Early revenue</option>
            <option value="Scaling">Scaling</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-2 w-full rounded-2xl bg-gradient-to-br from-violet-500 to-sky-300 px-5 py-3 font-extrabold text-[#070B14] hover:opacity-95"
        >
          Join waitlist
        </button>

        {submitted && (
          <p className="text-sm text-emerald-200/90">
            ✅ Submitted! Check your Google Form responses.
          </p>
        )}
      </form>

      <p className="mt-4 text-xs leading-relaxed text-white/60">
        Foundryly provides business tools and education and does not provide legal
        advice.
      </p>
    </div>
  );
}
