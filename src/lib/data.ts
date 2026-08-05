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
  image: string;
};

export const treatments: Treatment[] = [
  { title: "Ligament Injury Rehabilitation", image: "/images/treatments/ligament.jpg" },
  { title: "Neck Pain Rehabilitation", image: "/images/treatments/neck.jpg" },
  { title: "Shoulder Pain Rehabilitation", image: "/images/treatments/shoulder.jpg" },
  { title: "Elbow Pain Rehabilitation", image: "/images/treatments/elbow.jpg" },
  { title: "Sports Injury Rehabilitation", image: "/images/treatments/sports.jpg" },
  { title: "Prenatal & Postnatal Care", image: "/images/treatments/prenatal.jpg" },
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

export type ReviewPart = {
  text: string;
  highlight?: boolean;
};

export type Review = {
  initial: string;
  name: string;
  time: string;
  parts: ReviewPart[];
};

export const reviews: Review[] = [
  {
    initial: "A",
    name: "Azeez Olymp",
    time: "10 months ago",
    parts: [
      { text: "I visited this physiotherapy clinic for " },
      { text: "severe heel pain", highlight: true },
      { text: " that made " },
      { text: "walking difficult", highlight: true },
      {
        text: ". With their expert hands-on therapy and simple home exercises, the pain eased within a few sessions. ",
      },
      { text: "Professional, friendly, and highly effective", highlight: true },
      { text: " — truly the best place for heel pain relief!" },
    ],
  },
  {
    initial: "R",
    name: "Ravikumar S",
    time: "10 months ago",
    parts: [
      {
        text: "I came with lower back issues and sciatica problems. Dr. Suresh and my physio Dr. Sai Venkatesh made me feel comfortable throughout, and within 10 days my calf and thigh pain reduced to a great extent. I'd strongly recommend Synergy Health care & Wellness for their ",
      },
      { text: "spine and knee related problems", highlight: true },
      { text: "." },
    ],
  },
  {
    initial: "R",
    name: "raja antony",
    time: "4 months ago",
    parts: [
      {
        text: "I had a great experience at Synergy Physio Clinic. They are very professional, incredibly friendly and patient. I visited here for the ",
      },
      { text: "hip and back related issues", highlight: true },
      { text: " and thanks to the treatment and guidance it has been healed." },
    ],
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
