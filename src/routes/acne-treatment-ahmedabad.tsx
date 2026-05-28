import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { acne } from "@/content/treatments";

export const Route = createFileRoute("/acne-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: acne.title },
      { name: "description", content: acne.metaDescription },
      { property: "og:title", content: acne.title },
      { property: "og:description", content: acne.metaDescription },
      { property: "og:url", content: "/acne-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/acne-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={acne} />,
});
