import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { eczema } from "@/content/treatments";

export const Route = createFileRoute("/eczema-psoriasis-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: eczema.title },
      { name: "description", content: eczema.metaDescription },
      { property: "og:title", content: eczema.title },
      { property: "og:description", content: eczema.metaDescription },
      { property: "og:url", content: "/eczema-psoriasis-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/eczema-psoriasis-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={eczema} />,
});
