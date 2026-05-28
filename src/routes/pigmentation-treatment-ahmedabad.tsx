import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { pigmentation } from "@/content/treatments";

export const Route = createFileRoute("/pigmentation-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: pigmentation.title },
      { name: "description", content: pigmentation.metaDescription },
      { property: "og:title", content: pigmentation.title },
      { property: "og:description", content: pigmentation.metaDescription },
      { property: "og:url", content: "/pigmentation-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/pigmentation-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={pigmentation} />,
});
