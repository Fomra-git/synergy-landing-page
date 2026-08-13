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
    name: "T.Nagar",
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
    initial: "S",
    name: "Sunil Bansal",
    time: "a week ago",
    parts: [
      { text: "My " },
      { text: "experience of synergy ", highlight: true },
      { text: "with Dr. Kaavya in treating myself for " },
      { text: "Neuro PHYSIO", highlight: true },
      { text: " was excellent. I am " },
      { text: "regularly feeling improvement", highlight: true },
      { text: ". Thank you Dr. Kaavya" },
    ],
  },
  {
    initial: "S",
    name: "Shiny Philip",
    time: "3 weeks ago",
    parts: [
      { text: "I would like to " },
      { text: "thank Dr.Franklin and Dr.Sri Priya f", highlight: true },
      { text: "or their guidance and treatment to " },
      { text: "relieve me from my back pain", highlight: true },
    ],
  },
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
      { text: "Franklin sir " },
      { text: "spot the exact issue", highlight: true },
      { text: " and " },
      { text: "advised exact solution.", highlight: true },
      {
        text: " Sripriya mam has provided excellent service. I had neck pain issues which is resolved now. Planning to proceed with fitness classes as individual attention is provided.",
      },
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

export type CountryCode = {
  dial: string;
  iso: string;
  name: string;
};

// flagcdn.com serves small flag images keyed by lowercase ISO 3166-1
// alpha-2 code — used instead of flag emoji, which several platforms
// (Windows Chrome/Edge included) render as plain "IN"/"CA" letter pairs.
export function flagUrl(iso: string): string {
  return `https://flagcdn.com/24x18/${iso.toLowerCase()}.png`;
}

// India pinned first as the default; the rest is every ITU-assigned
// country calling code, alphabetical by country name.
export const countryCodes: CountryCode[] = [
  { dial: "+91", iso: "IN", name: "India" },
  { dial: "+93", iso: "AF", name: "Afghanistan" },
  { dial: "+355", iso: "AL", name: "Albania" },
  { dial: "+213", iso: "DZ", name: "Algeria" },
  { dial: "+376", iso: "AD", name: "Andorra" },
  { dial: "+244", iso: "AO", name: "Angola" },
  { dial: "+1268", iso: "AG", name: "Antigua and Barbuda" },
  { dial: "+54", iso: "AR", name: "Argentina" },
  { dial: "+374", iso: "AM", name: "Armenia" },
  { dial: "+61", iso: "AU", name: "Australia" },
  { dial: "+43", iso: "AT", name: "Austria" },
  { dial: "+994", iso: "AZ", name: "Azerbaijan" },
  { dial: "+1242", iso: "BS", name: "Bahamas" },
  { dial: "+973", iso: "BH", name: "Bahrain" },
  { dial: "+880", iso: "BD", name: "Bangladesh" },
  { dial: "+1246", iso: "BB", name: "Barbados" },
  { dial: "+375", iso: "BY", name: "Belarus" },
  { dial: "+32", iso: "BE", name: "Belgium" },
  { dial: "+501", iso: "BZ", name: "Belize" },
  { dial: "+229", iso: "BJ", name: "Benin" },
  { dial: "+975", iso: "BT", name: "Bhutan" },
  { dial: "+591", iso: "BO", name: "Bolivia" },
  { dial: "+387", iso: "BA", name: "Bosnia and Herzegovina" },
  { dial: "+267", iso: "BW", name: "Botswana" },
  { dial: "+55", iso: "BR", name: "Brazil" },
  { dial: "+673", iso: "BN", name: "Brunei" },
  { dial: "+359", iso: "BG", name: "Bulgaria" },
  { dial: "+226", iso: "BF", name: "Burkina Faso" },
  { dial: "+257", iso: "BI", name: "Burundi" },
  { dial: "+855", iso: "KH", name: "Cambodia" },
  { dial: "+237", iso: "CM", name: "Cameroon" },
  { dial: "+1", iso: "CA", name: "Canada" },
  { dial: "+238", iso: "CV", name: "Cape Verde" },
  { dial: "+236", iso: "CF", name: "Central African Republic" },
  { dial: "+235", iso: "TD", name: "Chad" },
  { dial: "+56", iso: "CL", name: "Chile" },
  { dial: "+86", iso: "CN", name: "China" },
  { dial: "+57", iso: "CO", name: "Colombia" },
  { dial: "+269", iso: "KM", name: "Comoros" },
  { dial: "+243", iso: "CD", name: "Congo (DRC)" },
  { dial: "+242", iso: "CG", name: "Congo (Republic)" },
  { dial: "+506", iso: "CR", name: "Costa Rica" },
  { dial: "+385", iso: "HR", name: "Croatia" },
  { dial: "+53", iso: "CU", name: "Cuba" },
  { dial: "+357", iso: "CY", name: "Cyprus" },
  { dial: "+420", iso: "CZ", name: "Czech Republic" },
  { dial: "+45", iso: "DK", name: "Denmark" },
  { dial: "+253", iso: "DJ", name: "Djibouti" },
  { dial: "+1767", iso: "DM", name: "Dominica" },
  { dial: "+1809", iso: "DO", name: "Dominican Republic" },
  { dial: "+593", iso: "EC", name: "Ecuador" },
  { dial: "+20", iso: "EG", name: "Egypt" },
  { dial: "+503", iso: "SV", name: "El Salvador" },
  { dial: "+240", iso: "GQ", name: "Equatorial Guinea" },
  { dial: "+291", iso: "ER", name: "Eritrea" },
  { dial: "+372", iso: "EE", name: "Estonia" },
  { dial: "+268", iso: "SZ", name: "Eswatini" },
  { dial: "+251", iso: "ET", name: "Ethiopia" },
  { dial: "+679", iso: "FJ", name: "Fiji" },
  { dial: "+358", iso: "FI", name: "Finland" },
  { dial: "+33", iso: "FR", name: "France" },
  { dial: "+241", iso: "GA", name: "Gabon" },
  { dial: "+220", iso: "GM", name: "Gambia" },
  { dial: "+995", iso: "GE", name: "Georgia" },
  { dial: "+49", iso: "DE", name: "Germany" },
  { dial: "+233", iso: "GH", name: "Ghana" },
  { dial: "+30", iso: "GR", name: "Greece" },
  { dial: "+1473", iso: "GD", name: "Grenada" },
  { dial: "+502", iso: "GT", name: "Guatemala" },
  { dial: "+224", iso: "GN", name: "Guinea" },
  { dial: "+245", iso: "GW", name: "Guinea-Bissau" },
  { dial: "+592", iso: "GY", name: "Guyana" },
  { dial: "+509", iso: "HT", name: "Haiti" },
  { dial: "+504", iso: "HN", name: "Honduras" },
  { dial: "+852", iso: "HK", name: "Hong Kong" },
  { dial: "+36", iso: "HU", name: "Hungary" },
  { dial: "+354", iso: "IS", name: "Iceland" },
  { dial: "+62", iso: "ID", name: "Indonesia" },
  { dial: "+98", iso: "IR", name: "Iran" },
  { dial: "+964", iso: "IQ", name: "Iraq" },
  { dial: "+353", iso: "IE", name: "Ireland" },
  { dial: "+972", iso: "IL", name: "Israel" },
  { dial: "+39", iso: "IT", name: "Italy" },
  { dial: "+1876", iso: "JM", name: "Jamaica" },
  { dial: "+81", iso: "JP", name: "Japan" },
  { dial: "+962", iso: "JO", name: "Jordan" },
  { dial: "+7", iso: "KZ", name: "Kazakhstan" },
  { dial: "+254", iso: "KE", name: "Kenya" },
  { dial: "+686", iso: "KI", name: "Kiribati" },
  { dial: "+383", iso: "XK", name: "Kosovo" },
  { dial: "+965", iso: "KW", name: "Kuwait" },
  { dial: "+996", iso: "KG", name: "Kyrgyzstan" },
  { dial: "+856", iso: "LA", name: "Laos" },
  { dial: "+371", iso: "LV", name: "Latvia" },
  { dial: "+961", iso: "LB", name: "Lebanon" },
  { dial: "+266", iso: "LS", name: "Lesotho" },
  { dial: "+231", iso: "LR", name: "Liberia" },
  { dial: "+218", iso: "LY", name: "Libya" },
  { dial: "+423", iso: "LI", name: "Liechtenstein" },
  { dial: "+370", iso: "LT", name: "Lithuania" },
  { dial: "+352", iso: "LU", name: "Luxembourg" },
  { dial: "+853", iso: "MO", name: "Macau" },
  { dial: "+261", iso: "MG", name: "Madagascar" },
  { dial: "+265", iso: "MW", name: "Malawi" },
  { dial: "+60", iso: "MY", name: "Malaysia" },
  { dial: "+960", iso: "MV", name: "Maldives" },
  { dial: "+223", iso: "ML", name: "Mali" },
  { dial: "+356", iso: "MT", name: "Malta" },
  { dial: "+692", iso: "MH", name: "Marshall Islands" },
  { dial: "+222", iso: "MR", name: "Mauritania" },
  { dial: "+230", iso: "MU", name: "Mauritius" },
  { dial: "+52", iso: "MX", name: "Mexico" },
  { dial: "+691", iso: "FM", name: "Micronesia" },
  { dial: "+373", iso: "MD", name: "Moldova" },
  { dial: "+377", iso: "MC", name: "Monaco" },
  { dial: "+976", iso: "MN", name: "Mongolia" },
  { dial: "+382", iso: "ME", name: "Montenegro" },
  { dial: "+212", iso: "MA", name: "Morocco" },
  { dial: "+258", iso: "MZ", name: "Mozambique" },
  { dial: "+95", iso: "MM", name: "Myanmar" },
  { dial: "+264", iso: "NA", name: "Namibia" },
  { dial: "+674", iso: "NR", name: "Nauru" },
  { dial: "+977", iso: "NP", name: "Nepal" },
  { dial: "+31", iso: "NL", name: "Netherlands" },
  { dial: "+64", iso: "NZ", name: "New Zealand" },
  { dial: "+505", iso: "NI", name: "Nicaragua" },
  { dial: "+227", iso: "NE", name: "Niger" },
  { dial: "+234", iso: "NG", name: "Nigeria" },
  { dial: "+850", iso: "KP", name: "North Korea" },
  { dial: "+389", iso: "MK", name: "North Macedonia" },
  { dial: "+47", iso: "NO", name: "Norway" },
  { dial: "+968", iso: "OM", name: "Oman" },
  { dial: "+92", iso: "PK", name: "Pakistan" },
  { dial: "+680", iso: "PW", name: "Palau" },
  { dial: "+970", iso: "PS", name: "Palestine" },
  { dial: "+507", iso: "PA", name: "Panama" },
  { dial: "+675", iso: "PG", name: "Papua New Guinea" },
  { dial: "+595", iso: "PY", name: "Paraguay" },
  { dial: "+51", iso: "PE", name: "Peru" },
  { dial: "+63", iso: "PH", name: "Philippines" },
  { dial: "+48", iso: "PL", name: "Poland" },
  { dial: "+351", iso: "PT", name: "Portugal" },
  { dial: "+974", iso: "QA", name: "Qatar" },
  { dial: "+40", iso: "RO", name: "Romania" },
  { dial: "+7", iso: "RU", name: "Russia" },
  { dial: "+250", iso: "RW", name: "Rwanda" },
  { dial: "+1869", iso: "KN", name: "Saint Kitts and Nevis" },
  { dial: "+1758", iso: "LC", name: "Saint Lucia" },
  { dial: "+1784", iso: "VC", name: "Saint Vincent and the Grenadines" },
  { dial: "+685", iso: "WS", name: "Samoa" },
  { dial: "+378", iso: "SM", name: "San Marino" },
  { dial: "+239", iso: "ST", name: "Sao Tome and Principe" },
  { dial: "+966", iso: "SA", name: "Saudi Arabia" },
  { dial: "+221", iso: "SN", name: "Senegal" },
  { dial: "+381", iso: "RS", name: "Serbia" },
  { dial: "+248", iso: "SC", name: "Seychelles" },
  { dial: "+232", iso: "SL", name: "Sierra Leone" },
  { dial: "+65", iso: "SG", name: "Singapore" },
  { dial: "+421", iso: "SK", name: "Slovakia" },
  { dial: "+386", iso: "SI", name: "Slovenia" },
  { dial: "+677", iso: "SB", name: "Solomon Islands" },
  { dial: "+252", iso: "SO", name: "Somalia" },
  { dial: "+27", iso: "ZA", name: "South Africa" },
  { dial: "+82", iso: "KR", name: "South Korea" },
  { dial: "+211", iso: "SS", name: "South Sudan" },
  { dial: "+34", iso: "ES", name: "Spain" },
  { dial: "+94", iso: "LK", name: "Sri Lanka" },
  { dial: "+249", iso: "SD", name: "Sudan" },
  { dial: "+597", iso: "SR", name: "Suriname" },
  { dial: "+46", iso: "SE", name: "Sweden" },
  { dial: "+41", iso: "CH", name: "Switzerland" },
  { dial: "+963", iso: "SY", name: "Syria" },
  { dial: "+886", iso: "TW", name: "Taiwan" },
  { dial: "+992", iso: "TJ", name: "Tajikistan" },
  { dial: "+255", iso: "TZ", name: "Tanzania" },
  { dial: "+66", iso: "TH", name: "Thailand" },
  { dial: "+670", iso: "TL", name: "Timor-Leste" },
  { dial: "+228", iso: "TG", name: "Togo" },
  { dial: "+676", iso: "TO", name: "Tonga" },
  { dial: "+1868", iso: "TT", name: "Trinidad and Tobago" },
  { dial: "+216", iso: "TN", name: "Tunisia" },
  { dial: "+90", iso: "TR", name: "Turkey" },
  { dial: "+993", iso: "TM", name: "Turkmenistan" },
  { dial: "+688", iso: "TV", name: "Tuvalu" },
  { dial: "+256", iso: "UG", name: "Uganda" },
  { dial: "+380", iso: "UA", name: "Ukraine" },
  { dial: "+971", iso: "AE", name: "United Arab Emirates" },
  { dial: "+44", iso: "GB", name: "United Kingdom" },
  { dial: "+1", iso: "US", name: "United States" },
  { dial: "+598", iso: "UY", name: "Uruguay" },
  { dial: "+998", iso: "UZ", name: "Uzbekistan" },
  { dial: "+678", iso: "VU", name: "Vanuatu" },
  { dial: "+379", iso: "VA", name: "Vatican City" },
  { dial: "+58", iso: "VE", name: "Venezuela" },
  { dial: "+84", iso: "VN", name: "Vietnam" },
  { dial: "+967", iso: "YE", name: "Yemen" },
  { dial: "+260", iso: "ZM", name: "Zambia" },
  { dial: "+263", iso: "ZW", name: "Zimbabwe" },
];

export const painAreas = [
  "Knee Pain",
  "Back Pain",
  "Lower Body Pain",
  "Neurological Rehab",
  "Sports Injury",
  "Shoulder Pain",
  "Senior Care",
  "Other Pain & Conditions",
];

export type VideoStory = {
  youtubeId: string;
  caption: string;
  thumbnail: string;
};

export const videoStories: VideoStory[] = [
  {
    youtubeId: "gf_AdIZeUVg",
    caption: "Watch: Meenu ma'am's Ligament Tear Recovery Journey",
    thumbnail: "/images/testimonials/meenu-ligament-tear-shorts-cover.jpg",
  },
  {
    youtubeId: "uzSwP6p3m8w",
    caption: "Watch: Strength and Confidence with Fitness Sessions",
    thumbnail: "/images/testimonials/strength-confidence-fitness-shorts-cover.jpg",
  },
  {
    youtubeId: "_0chk9qzRXA",
    caption: "Watch: Mouth Movement Solved in 6 Sessions",
    thumbnail: "/images/testimonials/mouth-movement-6-sessions-shorts-cover.jpg",
  },
  {
    youtubeId: "LgPhZrxxMAE",
    caption: "Watch: Neck Pain Resolved in 5 Sessions",
    thumbnail: "/images/testimonials/neck-pain-5-sessions-shorts-cover.jpg",
  },
  {
    youtubeId: "Mswhy15efFg",
    caption: "Watch: Mr. Sanjeev's Neck Sprain Transformation",
    thumbnail: "/images/testimonials/sanjeev-neck-sprain-shorts-cover.jpg",
  },
];

export const navLinks = [
  { href: "#treatments", label: "Services" },
  { href: "#why", label: "Why Synergy" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#locations", label: "Locations" },
];
