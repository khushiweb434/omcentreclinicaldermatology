import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { laser } from "@/content/treatments";

export const Route = createFileRoute("/laser-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: laser.title },
      { name: "description", content: laser.metaDescription },
      { property: "og:title", content: laser.title },
      { property: "og:description", content: laser.metaDescription },
      { property: "og:url", content: "/laser-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/laser-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={laser} />,
});
