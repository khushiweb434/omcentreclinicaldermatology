import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/site/TreatmentPage";
import { skinAllergy } from "@/content/treatments";

export const Route = createFileRoute("/skin-allergy-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: skinAllergy.title },
      { name: "description", content: skinAllergy.metaDescription },
      { property: "og:title", content: skinAllergy.title },
      { property: "og:description", content: skinAllergy.metaDescription },
      { property: "og:url", content: "/skin-allergy-treatment-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/skin-allergy-treatment-ahmedabad" }],
  }),
  component: () => <TreatmentLanding t={skinAllergy} />,
});
