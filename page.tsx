"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Timer, DollarSign, Building2, Sparkles, ArrowRight, Mail, FileSpreadsheet, Globe, FileText } from "lucide-react";

export default function Page() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.hostname !== "milledge.ai") return;
    if (document.getElementById('plausible-script')) return;
    const s = document.createElement('script');
    s.id = 'plausible-script';
    s.setAttribute('defer', '');
    s.setAttribute('data-domain', 'milledge.ai');
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  }, []);

  const track = (name: string, props: Record<string, any> = {}) => {
    // @ts-ignore
    window.plausible && window.plausible(name, { props });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Removed Q4 announcement bar */}

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-900" aria-hidden />
            <span className="font-semibold tracking-tight">Milledge Intelligence</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#offerings" className="hover:text-slate-600">Offerings</a>
            <a href="#pillars" className="hover:text-slate-600">Pillars</a>
            <a href="#results" className="hover:text-slate-600">Results</a>
            <a href="#pricing" className="hover:text-slate-600">Pricing</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </div>
          <a
            href="https://calendly.com/alexg-milledge?utm_source=nav&utm_medium=cta_button&utm_campaign=site_launch&utm_content=start_scope_call"
            target="_blank"
            rel="noreferrer"
            onClick={() => track('cta_click', { placement: 'nav', destination: 'calendly' })}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow transition-shadow"
          >
            <Sparkles className="h-4 w-4" /> Start a Scope Call
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Deal-closing intelligence for flat-rolled steel buyers
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
                Milledge blends AI-powered market signals with 20 years of commercial steel experience to time contracts, structure risk, and win better terms—without adding headcount.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/alexg-milledge?utm_source=hero&utm_medium=cta_button&utm_campaign=site_launch&utm_content=book_intro_call"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track('cta_click', { placement: 'hero', destination: 'calendly' })}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow"
                >
                  Book Intro Call <ArrowRight className="h-4 w-4"/>
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  See Pricing
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Performance-based options</div>
                <div className="flex items-center gap-2"><Timer className="h-4 w-4"/> Sprint-style delivery</div>
                <div className="flex items-center gap-2"><LineChart className="h-4 w-4"/> Buy Signal Watch</div>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5, delay:0.1}} className="lg:pl-10">
              <div className="rounded-3xl border border-slate-200 shadow-sm p-6 bg-white">
                <div className="text-xs font-medium text-slate-500">Sample Dashboard</div>
                <div className="mt-3 grid grid-cols-3 gap-4">
                  {[
                    {label: "HRC Futures", value: "$↑ 38"},
                    {label: "Spot Sentiment", value: "Neutral"},
                    {label: "Energy Index", value: "Soft"},
                    {label: "Housing Starts", value: "Holding"},
                    {label: "OEM Orders", value: "Mixed"},
                    {label: "Import Parity", value: "Tight"},
                  ].map((k,i)=> (
                    <div key={i} className="rounded-2xl border border-slate-200 p-4">
                      <div className="text-[11px] uppercase tracking-wide text-slate-500">{k.label}</div>
                      <div className="mt-1 text-lg font-semibold">{k.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500">Delivered in Notion + PDF. Excel "Buy Signal Watch" included.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500">Built by operators for operators — trusted by teams across solar, construction, and steel</p>
        </div>
      </section>

      <section id="pillars" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Three pillars that define Milledge</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">We’re not a newsletter or a generic dashboard. We’re a high-leverage partner that improves contract outcomes and internal confidence.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Performance-Based Contract Structuring (RaaS)", desc: "We align incentives to measurable outcomes: improved terms, timing alpha, and risk-adjusted savings—priced as Results-as-a-Service." },
              { icon: Building2, title: "Private-Label Intelligence Cell", desc: "An embedded, discrete cell that augments your team with buy-side timing, supplier map intelligence, and board-ready insights." },
              { icon: LineChart, title: "Milledge IP Stack", desc: "Licensable Deal Simulator + Negotiation Intelligence with the Buy Signal Watch and macro indicators integrated." },
            ].map((c, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
                <c.icon className="h-5 w-5" />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offerings" className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we deliver</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {[
              { title: "Executive Market Brief (Daily/Weekly)", points: ["U.S. HRC/CRC/HDG outlook with futures curve","Major news & consumption drivers (solar, OEM, housing)","Actionable notes + probability-weighted scenarios"] },
              { title: "Buy Signal Watch (Excel)", points: ["Composite timing index and trigger thresholds","Energy, freight, import parity, and demand proxies","Alerts for negotiation/tender windows"] },
              { title: "Deal Simulator & Negotiation Intel", points: ["Scenario pricing vs. indices & basis","Supplier playbooks and concession ladders","Risk hedging options (futures/CRU links)"] },
            ].map((o, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
                <h3 className="font-semibold">{o.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                  {o.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Outcomes we optimize</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {kpi: "$20M+", label: "Value unlocked via timing & terms"},
              {kpi: "3–8%", label: "Typical contract improvement range"},
              {kpi: "< 4 wks", label: "Time to first insights sprint"},
              {kpi: "Board-ready", label: "Outputs your execs can use"},
            ].map((item, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white text-center">
                <div className="text-2xl font-semibold">{item.kpi}</div>
                <div className="mt-1 text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Flexible, aligned commercial models</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Choose a starting point. We can tailor scope based on volume, complexity, and confidentiality needs.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[ 
              { name: "Advisor Sprint", price: "$7,500 / 4 weeks", features: ["Weekly executive brief","One negotiation playbook","Buy Signal Watch (lite)"], cta: "Start Sprint" },
              { name: "Intelligence Cell", price: "$18,000 / mo", features: ["Embedded cell, 2–3 workstreams","Full Buy Signal Watch + alerts","Deal Simulator access"], cta: "Reserve a Cell", highlighted: true },
              { name: "RaaS Performance", price: "% of verified savings", features: ["Aligned to outcomes","Quarterly true-ups","Confidential reporting"], cta: "Discuss Fit" },
            ].map((tier, i) => (
              <div key={i} className={`rounded-3xl border p-6 shadow-sm bg-white ${tier.highlighted ? 'border-slate-900 ring-1 ring-slate-900' : 'border-slate-200'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="text-[10px] uppercase tracking-widest bg-slate-900 text-white px-2 py-1 rounded-lg">Most Popular</span>
                  )}
                </div>
                <div className="mt-2 text-xl font-semibold">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
                  {tier.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
                <a
                  href="#contact"
                  onClick={() => track('pricing_cta_click', { tier: tier.name })}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
                >
                  {tier.cta} <ArrowRight className="h-4 w-4"/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {[
              {icon: FileText, label: "PDF Briefs"},
              {icon: Globe, label: "Notion Workspace"},
              {icon: FileSpreadsheet, label: "Excel Signals"},
              {icon: ShieldCheck, label: "Confidential by design"},
            ].map((d, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-4 flex items-center gap-2">
                <d.icon className="h-4 w-4" />
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tell us your steel challenge</h2>
              <p className="mt-3 text-slate-300 max-w-xl">Procurement leaders, OEMs, and renewable energy firms use Milledge to time contracts, negotiate harder, and communicate clearly to boards and customers.</p>
              <div className="mt-6 text-sm text-slate-300">
                <p>Prefer email? Reach out at <a href="mailto:hello@milledge.ai" className="underline underline-offset-4">hello@milledge.ai</a></p>
              </div>
            </div>

            <form
              onSubmit={(e)=>{ e.preventDefault(); track('contact_form_submit'); }}
              className="rounded-3xl bg-white text-slate-900 p-6 border border-slate-700/20 shadow-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-600">Full name</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Alex Grajek" />
                </div>
                <div>
                  <label className="text-xs text-slate-600">Work email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="alex@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">Company</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Company name" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">What can we help with?</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="Briefly describe your contract, timing window, or negotiation goals"
                  />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-2.5 text-sm shadow-sm hover:shadow">
                <Mail className="h-4 w-4"/> Request Scope Call
              </button>
              <p className="mt-3 text-[11px] text-slate-500">
                By submitting, you agree to be contacted about Milledge services. We don’t share or sell your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-slate-900" aria-hidden />
              <span>Milledge Intelligence LLC</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-slate-700" href="#">Privacy</a>
              <a className="hover:text-slate-700" href="#">Terms</a>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
