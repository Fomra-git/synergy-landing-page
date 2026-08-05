export const PHONE_DISPLAY = "+91 95660 07190";
export const PHONE_TEL = "+919566007190";
export const WHATSAPP_URL = "https://wa.me/919600148991";

export type Branch = {
  name: string;
  phone: string;
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    name: "Anna Nagar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Anna+Nagar+Chennai",
  },
  {
    name: "T Nagar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+T+Nagar+Chennai",
  },
  {
    name: "Adyar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Adyar+Chennai",
  },
  {
    name: "Mogappair",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Mogappair+Chennai",
  },
  {
    name: "Vepery",
    phone: "+919566007190",
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
    initial: "A",
    name: "Azeez Olymp",
    time: "10 months ago",
    text: "I visited this physiotherapy clinic for severe heel pain that made walking difficult. The team carefully assessed the issue, explained the cause, and started a treatment plan right away. With their expert hands on therapy and simple home exercises, the pain eased within a few sessions and I'm back to normal activities much faster than I imagined. Professional, friendly, and highly effective truly the best place for heel pain relief!",
  },
  {
    initial: "R",
    name: "Ravikumar S",
    time: "10 months ago",
    text: "I came with lower back issues and sciatica problems. Dr. Suresh addressed the issues and advised the right type of exercises through (PT) Dr. Sai Venkatesh. My physio Dr. Sai Venkatesh has made me feel comfortable during the sessions and was sincere to his profession. At the end of my 10 days session, the calf and thigh pain have reduced to a great extent. I would strongly recommend Synergy Health care & Wellness to my friends and relatives for their spine and knee related problems.",
  },
  {
    initial: "R",
    name: "raja antony",
    time: "4 months ago",
    text: "I had a great experience at Synergy Physio Clinic. They are very professional, incredibly friendly and patient. I visited here for the hip and back related issues and thanks to the treatment and guidance it has been healed.",
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
