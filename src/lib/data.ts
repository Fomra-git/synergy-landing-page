export const PHONE_DISPLAY = "+91 95660 07190";
export const PHONE_TEL = "+919566007190";
export const WHATSAPP_URL = "https://wa.me/919600148991";
export const EMAIL = "synergyhealthcareandwellness@gmail.com";
export const HEADQUARTERS_ADDRESS =
  "Old no F76, Chintamani, 1st Floor, AG Block 2nd St, Annanagar East, Chennai, Tamil Nadu 600102";

export const footerServices = [
  "Back Pain Treatment & Rehabilitation",
  "Neck Pain Treatment & Rehabilitation",
  "Shoulder Pain Rehabilitation",
  "Elbow Pain Rehabilitation",
  "Knee Pain Treatment and Rehabilitation",
  "Ligament Injury Rehabilitation",
  "Sports Injury Treatment and Rehabilitation",
  "Pre and Post Surgical Rehabilitation",
  "Prenatal and Postnatal Care",
  "Neurological Rehabilitation",
  "Aged Care Physiotherapy",
  "Manual Therapy",
];

export const socialLinks = [
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export type Branch = {
  name: string;
  phone: string;
  mapQuery: string;
  image: string;
};

export const branches: Branch[] = [
  {
    name: "Anna Nagar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Anna+Nagar+Chennai",
    image: "/images/locations/anna-nagar.jpg",
  },
  {
    name: "T Nagar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+T+Nagar+Chennai",
    image: "/images/locations/t-nagar.jpg",
  },
  {
    name: "Adyar",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Adyar+Chennai",
    image: "/images/locations/adyar.jpg",
  },
  {
    name: "Mogappair",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Mogappair+Chennai",
    image: "/images/locations/mogappair.jpg",
  },
  {
    name: "Vepery",
    phone: "+919566007190",
    mapQuery: "Synergy+Healthcare+Wellness+Vepery+Chennai",
    image: "/images/locations/vepery.jpg",
  },
];

export type Treatment = {
  title: string;
  image: string;
};

export const treatments: Treatment[] = [
  { title: "Prenatal & Postnatal Care", image: "/images/treatments/prenatal.webp" },
  { title: "Neurological Rehabilitation", image: "/images/treatments/neurological.webp" },
  { title: "Aged Care Physiotherapy", image: "/images/treatments/aged-care.webp" },
  { title: "Manual Therapy", image: "/images/treatments/manual-therapy.webp" },
  { title: "Back Pain Rehabilitation", image: "/images/treatments/back-pain.webp" },
  { title: "Knee Pain Rehabilitation", image: "/images/treatments/knee-pain.webp" },
  { title: "Pre & Post Surgical Rehabilitation", image: "/images/treatments/pre-post-surgical.webp" },
  { title: "Ligament Injury Rehabilitation", image: "/images/treatments/ligament.webp" },
  { title: "Neck Pain Rehabilitation", image: "/images/treatments/neck.webp" },
  { title: "Shoulder Pain Rehabilitation", image: "/images/treatments/shoulder.webp" },
  { title: "Elbow Pain Rehabilitation", image: "/images/treatments/elbow.webp" },
  { title: "Sports Injury Rehabilitation", image: "/images/treatments/sports.webp" },
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
    initial: "N",
    name: "Naga Sai Teja",
    time: "3 months ago",
    parts: [
      { text: "My experience with Synergy Physiotherapy & Rehabilitation clinic has been exceptional. Their " },
      { text: "patient care is outstanding", highlight: true },
      {
        text: ", and they clearly explain each procedure before implementation. Four months ago, I underwent ",
      },
      { text: "ACL reconstruction surgery", highlight: true },
      {
        text: ", and my doctor prescribed six months of mandatory physiotherapy. Initially, I explored home visits from other clinics, but their approach and patient handling were unsatisfactory. Consequently, I sought treatment at Synergy. Dr. Navya and Anvitha thoroughly outlined the entire ",
      },
      { text: "recovery process", highlight: true },
      { text: ", detailing how to regain full functionality. They " },
      { text: "consistently monitor patient progress", highlight: true },
      {
        text: " and recommend specific exercises to facilitate optimal recovery. Following my sessions at Synergy, I ",
      },
      { text: "feel significantly more confident in walking", highlight: true },
      { text: " and resuming my regular activities. I " },
      { text: "am highly satisfied with my recovery progress.", highlight: true },
    ],
  },
  {
    initial: "S",
    name: "Sharmila Devi",
    time: "a month ago",
    parts: [
      { text: "Franklin sir spot the exact issue and " },
      { text: "advised exact solution", highlight: true },
      { text: ". Sripriya mam has provided " },
      { text: "excellent service", highlight: true },
      { text: ". I had " },
      { text: "neck pain issues which is resolved now.", highlight: true },
      { text: " Planning to proceed with fitness classes as individual attention is provided." },
    ],
  },
  {
    initial: "M",
    name: "Muthukumar G",
    time: "a month ago",
    parts: [
      { text: "Synergy is the " },
      { text: "perfect place for best physio therapy", highlight: true },
      { text: " combined with fitness exercises. Their " },
      { text: "approach is very unique.", highlight: true },
      {
        text: " They first understand the problem very well, assess the same and perform ",
      },
      { text: "customised therapies", highlight: true },
      {
        text: " and fitness programs. It's a blessing that I got to know about this centre and ",
      },
      { text: "now my pain is fully relieved", highlight: true },
      { text: " thanks to the efforts of Dr Franklin (Head of the Centre) & Dr Azeez. I took 3 months sessions with Dr. Azeez and he has done " },
      { text: "wonders with his systematic approach of therapy,", highlight: true },
      {
        text: " stretches, exercises etc. As per their recommendation, I moved on to fitness with Dr. Sanjith, who is very good in ",
      },
      { text: "providing correct solution", highlight: true },
      { text: " for every condition including core building. Overall I am " },
      { text: "very happy about their approach", highlight: true },
      { text: " and I " },
      { text: "would recommend them", highlight: true },
      { text: " for any kind of therapies, fitness, knee pain, back pain, rehab and pain relief." },
    ],
  },
  {
    initial: "J",
    name: "Jayakumar Thiagarajan",
    time: "3 months ago",
    parts: [
      { text: "I was " },
      { text: "suffering from a frozen shoulder", highlight: true },
      {
        text: " on my left side, which made even simple movements extremely difficult and painful. I enrolled for physiotherapy at Synergy, where Dr. Franklin and Dr. Sri Priya designed a structured and ",
      },
      { text: "personalized treatment plan for me.", highlight: true },
      {
        text: " The initial phase involved muscle loosening, which was understandably quite painful. However, Dr. Sri Priya ensured that this process was carried out in a ",
      },
      { text: "very systematic and controlled manner", highlight: true },
      {
        text: ", giving me confidence throughout the treatment. Gradually, stretches and strengthening exercises were introduced. This step-by-step progression proved ",
      },
      { text: "highly effective", highlight: true },
      { text: ", and within just " },
      { text: "10–12 sessions", highlight: true },
      { text: ", I experienced nearly " },
      { text: "70–75% improvement.", highlight: true },
      { text: " Despite my professional commitments, both doctors were extremely " },
      { text: "patient, accommodating, and committed", highlight: true },
      { text: " to my recovery." },
    ],
  },
  {
    initial: "S",
    name: "saravanan saran",
    time: "3 months ago",
    parts: [
      { text: "Went to my shoulder and " },
      { text: "lowerback pain.", highlight: true },
      { text: " My " },
      { text: "pain reduced to 90%", highlight: true },
      { text: " after the sessions. Dr. Yasini mam was great and she helped me to recover from my pain." },
    ],
  },
  {
    initial: "S",
    name: "Shruti Jain",
    time: "2 months ago",
    parts: [
      { text: "I would like to sincerely thank the team at Synergy Physiotherapist Center, especially Dr. Lokesh, for the " },
      { text: "excellent care and support during my treatment.", highlight: true },
      { text: " I was dealing with back pain, knee pain, and muscle weakness, and Dr. Lokesh helped me " },
      { text: "overcome all of these issues", highlight: true },
      { text: " with great " },
      { text: "care, guidance, and effective physiotherapy treatment.", highlight: true },
      { text: " The entire team at Synergy is " },
      { text: "professional, supportive, and dedicated to patient recovery.", highlight: true },
      { text: " I would " },
      { text: "highly recommend Synergy Physiotherapist Center", highlight: true },
      { text: " to anyone dealing with pain or looking for quality physiotherapy care." },
    ],
  },
];

export const steps = [
  {
    title: "Book a slot",
    body: "Fill the form or call to confirm your slot",
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
    youtubeId: "gf_AdIZeUVg",
    caption: "Watch: Meenu ma'am's Ligament Tear Recovery Journey",
  },
  {
    youtubeId: "uzSwP6p3m8w",
    caption: "Watch: Strength and Confidence with Fitness Sessions",
  },
  {
    youtubeId: "_0chk9qzRXA",
    caption: "Watch: Mouth Movement Solved in 6 Sessions",
  },
  {
    youtubeId: "LgPhZrxxMAE",
    caption: "Watch: Neck Pain Resolved in 5 Sessions",
  },
  {
    youtubeId: "Mswhy15efFg",
    caption: "Watch: Mr. Sanjeev's Neck Sprain Transformation",
  },
];

export const navLinks = [
  { href: "#treatments", label: "Services" },
  { href: "#why", label: "Why Synergy" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#locations", label: "Locations" },
];
