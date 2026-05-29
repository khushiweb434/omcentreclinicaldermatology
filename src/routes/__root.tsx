import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
  "@id": "https://omcentreclinicaldermatology.lovable.app/#clinic",
  name: "Om Centre for Clinical Dermatology",
  url: "https://omcentreclinicaldermatology.lovable.app",
  image: "https://omcentreclinicaldermatology.lovable.app/og-cover.jpg",
  telephone: "+91-99250-11309",
  priceRange: "₹₹",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "604, 6th Floor, A Park Business Hub, near Panchal Hall, Shahibaug",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380004",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.0598, longitude: 72.5919 },
  areaServed: [
    { "@type": "Place", name: "Shahibaug" },
    { "@type": "Place", name: "Sabarmati" },
    { "@type": "Place", name: "Chandkheda" },
    { "@type": "Place", name: "Motera" },
    { "@type": "Place", name: "Ranip" },
    { "@type": "Place", name: "Ahmedabad" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dermatology services",
    itemListElement: [
      "Acne & Pimple Treatment",
      "Hair Fall & PRP Treatment",
      "Laser Dermatology",
      "Pigmentation & Melasma Treatment",
      "Skin Allergy Treatment",
      "Eczema & Psoriasis Treatment",
      "Fungal Infection Treatment",
      "Anti-Aging & Cosmetic Dermatology",
      "Vitiligo Treatment",
      "Nail Disorder Treatment",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name },
    })),
  },
  sameAs: [
    "https://www.practo.com/ahmedabad/doctor/dr-nayankumar-patel-dermatologist",
    "https://maps.app.goo.gl/sTahfMnAmihfWWzaA",
  ],
};

const PHYSICIAN_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://omcentreclinicaldermatology.lovable.app/#doctor",
  name: "Dr. Nayankumar Harshadkumar Patel",
  medicalSpecialty: "Dermatology",
  worksFor: { "@id": "https://omcentreclinicaldermatology.lovable.app/#clinic" },
  alumniOf: "Gujarat Medical Council",
  identifier: "GMC 29756",
  knowsLanguage: ["English", "Hindi", "Gujarati"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Om Centre Clinical Dermatology" },
      { name: "description", content: "Dr. Nayankumar Harshadkumar Patel offers expert dermatology care in Ahmedabad, India." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Om Centre Clinical Dermatology" },
      { property: "og:description", content: "Dr. Nayankumar Harshadkumar Patel offers expert dermatology care in Ahmedabad, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Om Centre Clinical Dermatology" },
      { name: "twitter:description", content: "Dr. Nayankumar Harshadkumar Patel offers expert dermatology care in Ahmedabad, India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/574c894f-2e6d-471f-901d-b12515dbbeda/id-preview-c3c111c6--2f1b05c5-14e1-492c-99ab-d87dc99ea52e.lovable.app-1779941124283.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/574c894f-2e6d-471f-901d-b12515dbbeda/id-preview-c3c111c6--2f1b05c5-14e1-492c-99ab-d87dc99ea52e.lovable.app-1779941124283.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(PHYSICIAN_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
