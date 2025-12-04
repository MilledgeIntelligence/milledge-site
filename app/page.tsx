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
      (form.querySelector('input[name="email"]()
