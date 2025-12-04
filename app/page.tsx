"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  ShieldCheck,
  Timer,
  DollarSign,
  Building2,
  Sparkles,
  ArrowRight,
  Mail,
  Globe,
  FileText,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/alexg-milledge/30min?hide_gdpr_banner=1";

const Page: React.FC = () => {
  // Load Plausible + Calendly widget JS once
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!document.getElementById("plausible-script")) {
      const s = document.createElement("script");
      s.id = "plausible-script";
      s.defer = true;
      s.setAttribute("data-domain", "milledge.ai");
      s.src = "https://plausible.io/js/script.js";
      document.head.appendChild(s);
    }

    if (!document.getElementById("calendly-widget-js")) {
      const c = document.createElement("script");
      c.id = "calendly-widget-js";
      c.src = "https://assets.calendly.com/assets/external/widget.js";
      c.async = true;
      document.head.appendChild(c);
    }
  }, []);

  const track = (name: string, props: Record<string, unknown> = {}) => {
    if (typeof window === "undefined") return;
    const w = window as any;
    if (w.plausible) {
      w.plausible(name, { props });
    }
  };

  const openCalendlyPrefilled = (
    name = "",
    email = "",
    company = "",
    notes = ""
  ) => {
    if (typeof window === "undefined") return;
    const w = window as any;

    if (w.Calendly?.initPopupWidget) {
      w.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {
          name,
          email,
          customAnswers: { a1: company, a2: notes },
        },
      });
      return;
    }

    const qs = new URLSearchParams();
    if (name) qs.set("name", name);
    if (email) qs.set("email", email);
    const url = `${CALENDLY_URL}&${qs.toString()}`;
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name =
      (form.querySelector('input[name="name"]') as HTMLInputElement)?.value
        ?.trim() || "";
    const email =
      (form.querySelector('input[name="email"]') as HTMLInputElement)?.value
        ?.trim() || "";
    const company =
      (form.querySelector('input[name="company"]') as HTMLInputElement)?.value
        ?.trim() || "";
    const notes =
      (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)
        ?.value?.trim() || "";

    track("contact_form_submit", { hasName: !!name, hasEmail: !!email });
    openCalendlyPrefilled(name, email, company, notes);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-900" aria-hidden />
            <span className="font-semibold tracking-tight">
              Milledge Intelligence
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#offerings" className="hover:text-slate-600">
              Engagement Deliverables
            </a>
            <a href="#pillars" className="hover:text-slate-600">
              Pillars
            </a>
            <a href="#results" className="hover:text-slate-600">
              Results
            </a>
            <a href="#contact" className="hover:text-slate-600">
              Contact
            </a>
          </div>
          <a
            href={`${CALENDLY_URL}&utm_source=nav&utm_medium=cta_button&utm_campaign=site_launch&utm_content=start_scope_call`}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              track("cta_click", { placement: "nav", destination: "calendly" })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow transition-shadow"
          >
            <Sparkles className="h-4 w-4" /> Start a Scope Call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                For steel buyers who want to outmaneuver markets, not out
                muscle them.
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
                We help steel buyers pre-position volume, sequence purchases to
                capacity and lead times, and stabilize delivered costs through
                a clear coverage framework.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${CALENDLY_URL}&utm_source=hero&utm_medium=cta_button&utm_campaign=site_launch&utm_content=book_intro_call`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    track("cta_click", {
                      placement: "hero",
                      destination: "calendly",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow"
                >
                  Book Intro Call <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#offerings"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  See Engagement Deliverables
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Performance based options
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4" /> Sprint style delivery
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" /> Buy Signal Watch
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:pl-10"
            >
              <div className="rounded-3xl border border-slate-200 shadow-sm p-6 bg-white">
                <div className="text-xs font-medium text-slate-500">
                  Sample Dashboard
                </div>
                <div className="mt-3 grid grid-cols-3 gap-4">
                  {[
                    { label: "HRC Futures", value: "$↑ 38" },
                    { label: "Spot Sentiment", value: "Neutral" },
                    { label: "Energy Index", value: "Soft" },
                    { label: "Housing Starts", value: "Holding" },
                    { label: "OEM Orders", value: "Mixed" },
                    { label: "Import Parity", value: "Tight" },
                  ].map((k, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="text-[11px] uppercase tracking-wide text-slate-500">
                        {k.label}
                      </div>
                      <div className="mt-1 text-lg font-semibold">
                        {k.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  Delivered as board ready briefs and a private client portal.
                  Internal signals included.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="pt-10 sm:pt-14 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Three pillars that define Milledge Intelligence
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Pre-positioned, structured, and supplied—so you don’t chase the
            market.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: LineChart,
                title: "Contract Timing & Hedge Overlay",
                desc: "We define your timing windows, set triggers, and pair physical buys with hedge overlays so market spikes are noise, not emergencies.",
              },
              {
                icon: DollarSign,
                title: "Performance based contract structuring (RaaS)",
                desc: "We align incentives to measurable outcomes: improved terms, timing advantage, and risk adjusted savings. All priced as Results as a Service.",
              },
              {
                icon: Building2,
                title: "Supply Options & Access",
                desc: "Capability driven routes to the right mills and service centers by spec, coating, geography, and capacity—so projects stay supplied when markets tighten.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white"
              >
                <c.icon className="h-5 w-5" />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Deliverables */}
      <section
        id="offerings"
        className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Engagement Deliverables
          </h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Margin Lock Plan",
                points: [
                  "Forward purchasing windows aligned to project milestones and budgets",
                  "Documented decision criteria and approvals for purchasing actions",
                  "Coverage guidelines with broker executed overlays to stabilize delivered costs",
                ],
              },
              {
                title: "Deal Structuring & Award Plan",
                points: [
                  "Terms that protect schedule and flexibility (volume brackets, lead time commitments)",
                  "Negotiation brief with recommended positions and next best alternatives",
                  "Predictable delivered steel costs across the planning horizon",
                ],
              },
              {
                title: "Access & Liquidity Desk",
                points: [
                  "Qualified introductions to mills and service centers by specification and geography",
                  "Placement of surplus or aged inventory to convert stock into cash",
                  "Rep and broker structures with clear fees and reporting",
                ],
              },
            ].map((o, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white"
              >
                <h3 className="font-semibold">{o.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                  {o.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / Results */}
      <section id="results" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Outcomes we optimize
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { kpi: "$500M+", label: "Value unlocked via timing & terms" },
              { kpi: "3–8%", label: "Typical contract improvement range" },
              { kpi: "< 4 wks", label: "Time to first insights sprint" },
              { kpi: "Board ready", label: "Outputs your execs can use" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white text-center"
              >
                <div className="text-2xl font-semibold">{item.kpi}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables strip */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {[
              { icon: FileText, label: "Executive briefs" },
              { icon: Globe, label: "Private client portal" },
              { icon: LineChart, label: "Broker executed hedge overlay" },
              { icon: ShieldCheck, label: "Confidential by design" },
            ].map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-4 flex items-center gap-2"
              >
                <d.icon className="h-4 w-4" />
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-slate-900 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Tell us your steel challenge
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl">
                Executives, owners, and procurement leaders use Milledge to time
                contracts, structure terms, and communicate clearly with boards
                and customers.
              </p>
              <div className="mt-6 text-sm text-slate-300">
                <p>
                  Prefer email? Reach out at{" "}
                  <a
                    href="mailto:hello@milledge.ai"
                    className="underline underline-offset-4"
                  >
                    hello@milledge.ai
                  </a>
                </p>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="rounded-3xl bg-white text-slate-900 p-6 border border-slate-700/20 shadow-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-600">Full name</label>
                  <input
                    name="name"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="Alex Grajek"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600">Work email</label>
                  <input
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="alex@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">Company</label>
                  <input
                    name="company"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="Company name"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">
                    What can we help with?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="Briefly describe your contract, timing window, or negotiation goals"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-2.5 text-sm shadow-sm hover:shadow"
              >
                <Mail className="h-4 w-4" /> Request Scope Call
              </button>
              <p className="mt-3 text-[11px] text-slate-500">
                By submitting, you agree to be contacted about Milledge
                services. We don’t share or sell your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-slate-900" aria-hidden />
              <span>Milledge Intelligence LLC</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-slate-700" href="#">
                Privacy
              </a>
              <a className="hover:text-slate-700" href="#">
                Terms
              </a>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
