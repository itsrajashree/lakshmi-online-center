import { 
  FileText, 
  Smartphone, 
  CreditCard, 
  GraduationCap, 
  Printer, 
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  Shield,
  Zap,
  Heart,
  Users,
  CheckCircle,
  Star
} from "lucide-react";

export const businessInfo = {
  name: "Lakshmi Online Center",
  tagline: "All Your Online Needs in One Place",
  slogan: "Empowering You Digitally",
  address: "41C, Agraharam, Orathanadu – 614 625",
  phone1: "+91 82704 87840",
  phone2: "+91 73395 34394",
  email: "lakshmionlinecenterond@gmail.com",
  whatsapp: "+91 82704 87840",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  mapUrl: "https://maps.app.goo.gl/MkPjKATHC2LVctSM7"
};

export const services = [
  {
    id: "aadhaar-pan",
    title: "Aadhaar & PAN Services",
    description: "Complete assistance for Aadhaar updates, PAN applications, and related documentation.",
    icon: FileText,
    features: [
      "Aadhaar enrollment & updates",
      "PAN card applications", 
      "Document verification"
    ]
  },
  {
    id: "passport",
    title: "Passport Assistance", 
    description: "Complete support for passport applications, renewals, and documentation.",
    icon: FileText,
    features: [
      "New passport applications",
      "Passport renewals",
      "Document preparation"
    ]
  },
  {
    id: "recharge",
    title: "Mobile & DTH Recharges",
    description: "Instant recharges for all mobile networks and DTH services.",
    icon: Smartphone,
    features: [
      "All network recharges",
      "DTH top-ups", 
      "Data pack activations"
    ]
  },
  {
    id: "bills",
    title: "Bill Payments",
    description: "Easy payment solutions for all your utility bills.",
    icon: CreditCard,
    features: [
      "Electricity bill payments",
      "Gas & water bills",
      "Insurance premiums"
    ]
  },
  {
    id: "applications",
    title: "Application Support",
    description: "Online applications for schools, colleges, and job opportunities.",
    icon: GraduationCap,
    features: [
      "School admissions",
      "College applications",
      "Job portal registrations"
    ]
  },
  {
    id: "printing",
    title: "Printing & Scanning",
    description: "Professional printing, scanning, and photo services.",
    icon: Printer,
    features: [
      "Document printing",
      "Photo printing",
      "Scanning services"
    ]
  }
];

export const features = [
  {
    icon: Zap,
    title: "Fast Service",
    description: "No more waiting days! Quick and efficient processing."
  },
  {
    icon: MessageSquare,
    title: "Friendly Help", 
    description: "We explain everything in simple terms."
  },
  {
    icon: Shield,
    title: "Secure & Trustworthy",
    description: "Your info is safe with us."
  },
  {
    icon: Heart,
    title: "Affordable Pricing",
    description: "Top services, pocket-friendly rates."
  }
];

export const facilities = [
  {
    icon: "fa-wifi",
    title: "High-speed Internet",
    description: "Reliable connectivity"
  },
  {
    icon: "fa-print", 
    title: "Professional Equipment",
    description: "Printer, scanner & more"
  },
  {
    icon: "fa-couch",
    title: "Comfortable Seating", 
    description: "Relaxing environment"
  },
  {
    icon: "fa-video",
    title: "CCTV Monitored",
    description: "Your safety first"
  }
];

export const serviceFeatures = [
  {
    icon: Clock,
    title: "Instant Response",
    description: "Fast processing for all services"
  },
  {
    icon: Users,
    title: "Clear Guidance", 
    description: "Step-by-step assistance"
  },
  {
    icon: Heart,
    title: "Affordable Pricing",
    description: "No hidden charges"
  },
  {
    icon: CheckCircle,
    title: "Customer-First",
    description: "Friendly approach always"
  }
];

export const testimonials = [
  {
    name: "Ravi Sharma",
    initials: "RS",
    rating: 5,
    comment: "Very quick service for my Aadhaar update. Staff was very helpful and explained everything clearly. Highly recommended!"
  },
  {
    name: "Priya Krishnan", 
    initials: "PK",
    rating: 5,
    comment: "Best place for all document work. Got my passport application done smoothly. Clean office and friendly staff."
  },
  {
    name: "Arun Muthu",
    initials: "AM", 
    rating: 5,
    comment: "Regular customer for bill payments and recharges. Always reliable service and good prices. Keep up the good work!"
  }
];
