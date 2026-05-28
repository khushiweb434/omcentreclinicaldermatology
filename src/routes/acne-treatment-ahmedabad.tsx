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
*** Add File: src/routes/hair-fall-treatment-ahmedabad.tsx
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
*** Add File: src/routes/skin-allergy-treatment-ahmedabad.tsx
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
*** Add File: src/routes/pigmentation-treatment-ahmedabad.tsx
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
*** Add File: src/routes/laser-treatment-ahmedabad.tsx
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
*** Add File: src/routes/eczema-psoriasis-treatment-ahmedabad.tsx
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