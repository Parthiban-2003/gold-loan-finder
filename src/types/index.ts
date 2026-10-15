// SHOP TYPES
export interface Shop {
    id: string;
    name: string;
    district: string;
    area: string;
    address: string;
    lat: number;
    lng: number;
    goldRatePerGram: number;
    silverRatePerGram: number;
    interestRate: number;
    minLoanAmount: number;
    maxLoanAmount: number;
    contact: string;
    rating: number;
    reviewCount: number;
    image: string;
    description: string;
    openHours: string;
    features: string[];
}

// TESTIMONIAL TYPES
export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    review: string;
    avatar: string;
    loanAmount: string;
    date: string;
}

// BENEFIT TYPES
export interface Benefit {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

// FORM TYPES
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface LoanApplicationData {
    fullName: string;
    phone: string;
    email: string;
    goldWeight: number;
    metalType: "gold" | "silver";
    purpose: "business" | "personal" | "medical" | "education" | "other";
    preferredTime: string;
    message?: string;
}

// FILTER TYPES
export interface ShopFilter {
    district: string;
    searchQuery: string;
    sortBy: "rating" | "interest" | "goldRate";
}