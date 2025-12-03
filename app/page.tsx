"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart, ShieldCheck, Timer, DollarSign, Building2,
  Sparkles, ArrowRight, Mail, Globe, FileText,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/alexg-milledge/30min?hide_gdpr_banner=1";

export default function MilledgeLanding() {
  // Load Plausible + Calendly widget JS once
  useEffect(() => {
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

  const track = (name: string, props: Record<string, any> = {}) => {
    (window as any).plausible && (window as any).plausible(name, { props });
  };

  const openCalendlyPrefilled = (
    name = "", email = "", company = "", notes = ""
  ) => {
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
      (form.querySelector('input[name="name"]') as HTMLInputElement)?.value?.trim() || "";
    const email =
      (form.querySelector('input[name="email"]') as HTMLInputElement)?.value?.trim() || "";
    const company =
      (form.querySelector('input[name="company"]') as HTMLInputElement)?.value?.trim() || "";
    const notes =
      (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value?.trim() || "";

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
            <span className="font-semibold tracking-tight">Milledge Intelligence</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#offerings" className="hover:text-slate-600">Engagement Deliverables</a>
            <a href="#pillars" className="hover:text-slate-600">Pillars</a>
            <a href="#results" className="hover:text-slate-600">Results</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </div>
          <a
            href={`${CALENDLY_URL}&utm_source=nav&utm_medium=cta_button&utm_campaign=site_launch&utm_content=start_scope_call`}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('cta_click', { placement: 'nav', destination: 'calendly' })}
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
            <motion.div initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                For steel buyers who want to outmaneuver markets, not out muscle them.
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
                We help steel buyers pre-position volume, sequence purchases to capacity and lead times, and stabilize delivered costs through a clear coverage framework.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${CALENDLY_URL}&utm_source=hero&utm_medium=cta_button&utm_campaign=site_launch&utm_content=book_intro_call`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track('cta_click', { placement: 'hero', destination: 'calendly' })}
                  className="inline-flex i
