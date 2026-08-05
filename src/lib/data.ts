export const PHONE_DISPLAY = "+91 90000 00000";
export const PHONE_TEL = "+919000000000";
export const WHATSAPP_URL = "https://wa.me/919000000000";

export type Branch = {
  name: string;
  phone: string;
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    name: "Anna Nagar",
    phone: "+919000000001",
    mapQuery: "Synergy+Healthcare+Wellness+Anna+Nagar+Chennai",
  },
  {
    name: "T Nagar",
    phone: "+919000000002",
    mapQuery: "Synergy+Healthcare+Wellness+T+Nagar+Chennai",
  },
  {
    name: "Adyar",
    phone: "+919000000003",
    mapQuery: "Synergy+Healthcare+Wellness+Adyar+Chennai",
  },
  {
    name: "Mogappair",
    phone: "+919000000004",
    mapQuery: "Synergy+Healthcare+Wellness+Mogappair+Chennai",
  },
  {
    name: "Vepery",
    phone: "+919000000005",
    mapQuery: "Synergy+Healthcare+Wellness+Vepery+Chennai",
  },
];

export type Treatment = {
  title: string;
  gradient: string;
  icon: "ligament" | "neck" | "shoulder" | "elbow" | "sports" | "prenatal";
};

export const treatments: Treatment[] = [
  { title: "Ligament Injury Rehab", gradient: "from-[#3D6D9B] to-[#12314B]", icon: "ligament" },
  { title: "Neck Pain Rehab", gradient: "from-[#0E6BE0] to-[#12314B]", icon: "neck" },
  { title: "Shoulder Pain Rehab", gradient: "from-[#93A8B8] to-[#3D6D9B]", icon: "shoulder" },
  { title: "Elbow Pain Rehab", gradient: "from-[#12314B] to-[#3D6D9B]", icon: "elbow" },
  { title: "Sports Injury Rehab", gradient: "from-[#0E6BE0] to-[#3D6D9B]", icon: "sports" },
  { title: "Prenatal & Postnatal Care", gradient: "from-[#3D6D9B] to-[#93A8B8]", icon: "prenatal" },
];

export const differentiators = [
  {
    title: "Evidence-Based Care",
    body: "Every treatment plan is built on clinical expertise, thorough assessments, and proven rehabilitation protocols.",
  },
  {
    title: "Senior-Led Treatment",
    body: "Your recovery is guided by experienced doctors and supported by a skilled physiotherapy team for consistent outcomes.",
  },
  {
    title: "Personalised Recovery Plans",
    body: "Every program is tailored to your condition, lifestyle, and recovery goals for long-term functional improvement.",
  },
  {
    title: "Trusted by Patients",
    body: "Recognised as one of Chennai's leading physiotherapy centres for quality care, patient trust, and lasting results.",
  },
];

export const reviews = [
  {
    initial: "P",
    name: "Priya S.",
    text: "Walked in barely able to lift my arm after surgery — three months on I'm back to my morning walks pain-free.",
  },
  {
    initial: "K",
    name: "Karthik R.",
    text: "Best physio clinic in Anna Nagar. The team explains every step and the results speak for themselves.",
  },
  {
    initial: "A",
    name: "Anitha M.",
    text: "Post-pregnancy back pain is finally gone. Grateful for how patient and thorough the therapists were.",
  },
];

export const steps = [
  {
    title: "Book a slot",
    body: "Fill the form or call — we confirm within 15 minutes.",
  },
  {
    title: "Get assessed",
    body: "A full clinical assessment with a senior physiotherapist.",
  },
  {
    title: "Start your plan",
    body: "A treatment plan built around your recovery goals.",
  },
  {
    title: "Recover & move on",
    body: "Ongoing tracking until you're back to full strength.",
  },
];

export const team = [
  { initials: "DR", name: "Dr. Rakesh Iyer", role: "Lead Physiotherapist, MPT Ortho" },
  { initials: "DS", name: "Dr. Sandhya Nair", role: "Sports Rehab Specialist" },
  { initials: "DV", name: "Dr. Vikram Das", role: "Spine & Neuro Rehab" },
  { initials: "DM", name: "Dr. Meera Krishnan", role: "Prenatal & Postnatal Care" },
];

export const painAreas = [
  "Neck",
  "Shoulder",
  "Elbow / Wrist",
  "Knee / Ligament",
  "Back / Spine",
  "Sports Injury",
  "Prenatal / Postnatal",
  "Other",
];

export type VideoStory = {
  youtubeId: string;
  caption: string;
};

export const videoStories: VideoStory[] = [
  {
    youtubeId: "WEKLrNEhjhI",
    caption: "Watch: Sanjith Kumar Recovery Story | Neck Sprain",
  },
  {
    youtubeId: "zYWyTU4ejOY",
    caption: "Watch Recovery Story of Meenu | Ligament Tear",
  },
  {
    youtubeId: "IsF8ziZEMp0",
    caption: "Watch Recovery Story of John | Prolonged Neck Pain",
  },
  {
    youtubeId: "rcJZ5AhoGyE",
    caption: "Watch Recovery Story of Asish",
  },
];

export const navLinks = [
  { href: "#treatments", label: "Services" },
  { href: "#why", label: "Why Synergy" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#locations", label: "Locations" },
];
