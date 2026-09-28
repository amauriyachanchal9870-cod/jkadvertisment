/**
 * Centralized business configuration for JK Advertisement.
 * All contact details, social links, and WhatsApp helpers are managed here.
 */

export const BUSINESS_CONFIG = {
  name: "JK Advertisement",
  shortName: "JK Ad",
  tagline: "Smart Advertising & Creative Digital Solutions",
  description: "From social media marketing and Facebook advertising to creative design, video editing, and digital branding — JK Advertisement helps your business build a powerful online presence.",
  
  // Exact business address from verified details
  address: {
    line1: "Dwarkapuri, Kotla Road",
    city: "Firozabad",
    postalCode: "283203",
    state: "Uttar Pradesh",
    country: "India",
    full: "Dwarkapuri, Kotla Road, Firozabad – 283203, Uttar Pradesh, India."
  },

  // Contact numbers
  phones: [
    {
      display: "+91-9837436607",
      value: "+919837436607",
      primary: true
    },
    {
      display: "+91-7042497485",
      value: "+917042497485",
      primary: false
    }
  ],

  // Primary WhatsApp number (configured using primary confirmed phone +919837436607)
  whatsappNumber: "919837436607",

  // Email address
  email: "jsadvertisment@gmail.com",

  // Verified Facebook Page
  facebook: "https://www.facebook.com/share/1EezkbZBDH/",

  // Business Category
  category: "Digital Marketing, Advertising, Social Media Marketing, Graphic Design, and Creative Services.",

  // Hours
  workingHours: "Monday – Saturday: 10:00 AM – 8:00 PM",

  // Map Embed query
  mapQuery: "Dwarkapuri,+Kotla+Road,+Firozabad,+Uttar+Pradesh+283203"
};

/**
 * Generate official wa.me WhatsApp URL with encoded prefilled message
 */
export const getWhatsAppLink = (serviceName = null, customDetails = null) => {
  let message = "";
  
  if (customDetails) {
    const { name, businessName, phone, service, budget, requirement } = customDetails;
    message = `Hello JK Advertisement,\n\nI would like to submit a project enquiry:\n` +
      `• Name: ${name || 'N/A'}\n` +
      (businessName ? `• Business: ${businessName}\n` : '') +
      `• Phone: ${phone || 'N/A'}\n` +
      (service ? `• Interested Service: ${service}\n` : '') +
      (budget ? `• Budget Range: ${budget}\n` : '') +
      `• Project Requirements: ${requirement || 'Looking for business advertising solutions.'}\n\nPlease share more details and pricing.`;
  } else if (serviceName) {
    message = `Hello JK Advertisement, I am interested in your ${serviceName} service. Please share the details and pricing.`;
  } else {
    message = `Hello JK Advertisement, I would like to enquire about your services. Please share more details.`;
  }

  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate mailto URL for direct email enquiries
 */
export const getMailtoLink = (serviceName = null, customDetails = null) => {
  let subject = "Enquiry: JK Advertisement Services";
  let body = "Hello JK Advertisement Team,\n\nI would like to enquire about your advertising and marketing services.";

  if (customDetails) {
    const { name, businessName, phone, email, service, budget, requirement } = customDetails;
    subject = `Website Enquiry - ${service || 'Advertising Services'} - ${name || 'Prospective Client'}`;
    body = `Hello JK Advertisement Team,\n\nHere are my project enquiry details:\n\n` +
      `Full Name: ${name || 'N/A'}\n` +
      (businessName ? `Business Name: ${businessName}\n` : '') +
      `Phone Number: ${phone || 'N/A'}\n` +
      `Email Address: ${email || 'N/A'}\n` +
      `Interested Service: ${service || 'General Enquiry'}\n` +
      (budget ? `Budget Range: ${budget}\n` : '') +
      `Project Requirements:\n${requirement || 'Please contact me regarding your advertising solutions.'}\n\nThank you,\n${name || 'Client'}`;
  } else if (serviceName) {
    subject = `Service Enquiry: ${serviceName}`;
    body = `Hello JK Advertisement,\n\nI am interested in your "${serviceName}" service.\n\nPlease share your service details, workflow, and pricing structure.\n\nThank you!`;
  }

  return `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
