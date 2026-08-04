export type Member = {
  id: string
  name: string
  role: string
  style: string
  since: number
  city: string
  status: "Active" | "Senior" | "Associate"
  email: string
  practiceHours: number
  students: number
}

export const association = {
  name: "Rishikesh Yoga Association",
  shortName: "RYA",
  tagline: "Home of the Himalayan masters",
  city: "Rishikesh, Uttarakhand, India",
  founded: 1972,
  established: "Est. 1972",
  description:
    "The Rishikesh Yoga Association is a community of practitioners, teachers, and seekers dedicated to preserving the classical yoga tradition of the Himalayan foothills.",
}

export const members: Member[] = [
  {
    id: "M-001",
    name: "Swami Anand Prakash",
    role: "Founder & Patron",
    style: "Hatha Yoga",
    since: 1972,
    city: "Rishikesh",
    status: "Senior",
    email: "anand@rya.in",
    practiceHours: 42000,
    students: 3800,
  },
  {
    id: "M-002",
    name: "Shri Rajiv Mehra",
    role: "President",
    style: "Hatha Yoga",
    since: 1991,
    city: "Rishikesh",
    status: "Senior",
    email: "rajiv@rya.in",
    practiceHours: 18000,
    students: 1200,
  },
  {
    id: "M-003",
    name: "Yogini Lakshmi Devi",
    role: "Vice President",
    style: "Kundalini Yoga",
    since: 1998,
    city: "Rishikesh",
    status: "Senior",
    email: "lakshmi@rya.in",
    practiceHours: 15400,
    students: 2100,
  },
  {
    id: "M-004",
    name: "Acharya Vikram Sharma",
    role: "Secretary",
    style: "Ashtanga Yoga",
    since: 2005,
    city: "Haridwar",
    status: "Active",
    email: "vikram@rya.in",
    practiceHours: 9600,
    students: 860,
  },
  {
    id: "M-005",
    name: "Dr. Meera Nair",
    role: "Head of Research",
    style: "Restorative Yoga",
    since: 2008,
    city: "Rishikesh",
    status: "Active",
    email: "meera@rya.in",
    practiceHours: 8200,
    students: 540,
  },
  {
    id: "M-006",
    name: "Sadhak Karthik Rao",
    role: "Member",
    style: "Vinyasa Yoga",
    since: 2012,
    city: "Bangalore",
    status: "Associate",
    email: "karthik@rya.in",
    practiceHours: 4100,
    students: 220,
  },
  {
    id: "M-007",
    name: "Devi Arora",
    role: "Member",
    style: "Iyengar Yoga",
    since: 2013,
    city: "Rishikesh",
    status: "Active",
    email: "devi@rya.in",
    practiceHours: 5200,
    students: 310,
  },
  {
    id: "M-008",
    name: "Guruji Prem Nath",
    role: "Treasurer",
    style: "Kriya Yoga",
    since: 2001,
    city: "Rishikesh",
    status: "Senior",
    email: "prem@rya.in",
    practiceHours: 11900,
    students: 980,
  },
  {
    id: "M-009",
    name: "Isabella Rossi",
    role: "International Liaison",
    style: "Hatha Yoga",
    since: 2016,
    city: "Milan, Italy",
    status: "Associate",
    email: "isabella@rya.in",
    practiceHours: 3300,
    students: 175,
  },
  {
    id: "M-010",
    name: "Om Bhatt",
    role: "Member",
    style: "Pranayama",
    since: 2015,
    city: "Dehradun",
    status: "Active",
    email: "om@rya.in",
    practiceHours: 2900,
    students: 130,
  },
  {
    id: "M-011",
    name: "Sakshi Verma",
    role: "Member",
    style: "Power Yoga",
    since: 2018,
    city: "Rishikesh",
    status: "Associate",
    email: "sakshi@rya.in",
    practiceHours: 2100,
    students: 95,
  },
  {
    id: "M-012",
    name: "Yogi Deepak Joshi",
    role: "Member",
    style: "Bhakti Yoga",
    since: 2010,
    city: "Rishikesh",
    status: "Active",
    email: "deepak@rya.in",
    practiceHours: 6700,
    students: 420,
  },
]

export const stats = [
  { label: "Active Members", value: "2,400+" },
  { label: "Years of Tradition", value: "50+" },
  { label: "Certified Teachers", value: "180" },
  { label: "Retreats per Year", value: "65" },
]

export const programs = [
  {
    title: "200hr Teacher Training",
    style: "Hatha",
    duration: "4 weeks",
    level: "Beginner to Advanced",
    description:
      "Our signature residential teacher training along the banks of the Ganga, blending asana, pranayama, and philosophy.",
  },
  {
    title: "Ashtanga Morning Intensive",
    style: "Ashtanga",
    duration: "6 days",
    level: "Intermediate",
    description:
      "A focused week of guided Mysore-style practice with senior Ashtanga teachers of the association.",
  },
  {
    title: "Meditation & Pranayama Retreat",
    style: "Kriya",
    duration: "7 days",
    level: "All levels",
    description:
      "Silent mornings and pranayama sessions designed to deepen breath awareness and inner stillness.",
  },
  {
    title: "Iyengar Alignment Workshop",
    style: "Iyengar",
    duration: "Weekend",
    level: "All levels",
    description:
      "Detailed alignment study using props, taught by certified Iyengar instructors from the community.",
  },
]

export const testimonials = [
  {
    name: "Sofia Lindqvist",
    location: "Stockholm, Sweden",
    quote:
      "Training with the association in Rishikesh transformed both my practice and my teaching. The gurus' guidance is unmatched.",
    rating: 5,
  },
  {
    name: "Arjun Menon",
    location: "Mumbai, India",
    quote:
      "Forty years of accumulated wisdom, delivered with warmth. The morning ganga-side practice is an experience I will carry forever.",
    rating: 5,
  },
  {
    name: "Hannah Schmidt",
    location: "Berlin, Germany",
    quote:
      "The teachers are deeply knowledgeable and the community is welcoming. My pranayama practice changed completely.",
    rating: 4,
  },
]

export const timeline = [
  {
    year: "1972",
    title: "Foundation",
    description:
      "Swami Anand Prakash establishes the association with nine students on the banks of the Ganga.",
  },
  {
    year: "1984",
    title: "First Teacher Training",
    description:
      "The association launches its first 200-hour teacher training program in the Himalayan tradition.",
  },
  {
    year: "1999",
    title: "Research Wing",
    description:
      "A research cell is formed to document classical asana and pranayama practice.",
  },
  {
    year: "2011",
    title: "Global Community",
    description:
      "Membership opens to international practitioners, linking 30+ countries.",
  },
  {
    year: "2024",
    title: "The Ashram Today",
    description:
      "A community of 2,400+ members, 180 certified teachers, and 65 retreats every year.",
  },
]
