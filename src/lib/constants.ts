export const PHONE = "+919925011309";
export const PHONE_DISPLAY = "+91 99250 11309";
export const WHATSAPP_NUMBER = "919925011309";
export const WHATSAPP_DEFAULT_MSG =
  "Hello Dr. Patel, I'd like to know more about treatment at Om Centre Dermatology, Ahmedabad.";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
export const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/sTahfMnAmihfWWzaA";
export const SITE_URL = "https://omcentreclinicaldermatology.lovable.app";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}