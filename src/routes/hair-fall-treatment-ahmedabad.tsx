import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { hairFall } from "@/content/treatments";

export const Route = createFileRoute("/hair-fall-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: hairFall.title },
      { name: "description", content: hairFall.metaDescription },
      { property: "og:title", content: hairFall.title },
      { property: "og:description", content: hairFall.metaDescription },
      { property: "og:url", content: "/hair-fall-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/hair-fall-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={hairFall} />,
});
