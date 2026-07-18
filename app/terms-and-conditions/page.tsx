import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: "Terms of Service — SKAYL" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="2026"
      sections={[
        {
          heading: "Agreement",
          body: "By engaging SKAYL you agree to these terms. Each project is also governed by a specific proposal or statement of work, which takes precedence where it differs.",
        },
        {
          heading: "Scope & deliverables",
          body: "Deliverables, timelines, and pricing are defined per project before work begins. Changes to scope may affect timeline and cost, and will be agreed in writing.",
        },
        {
          heading: "Payments",
          body: "Payment terms are set out in each proposal. We don’t offer refunds on completed work, but we tell you upfront if we don’t think we’re the right fit.",
        },
        {
          heading: "Ownership",
          body: "On full payment, ownership of final deliverables transfers to you. We may showcase completed work in our portfolio unless otherwise agreed.",
        },
      ]}
    />
  );
}
