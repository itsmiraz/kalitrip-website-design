import Customization from "@/assets/icons/expertise/customization.svg";
import EaseOfUse from "@/assets/icons/expertise/EaseOfUse.svg";
import Ecofriendly from "@/assets/icons/expertise/EcoFriendly.svg";
import SaveTime from "@/assets/icons/expertise/SaveTime.svg";
import Budget from "@/assets/icons/expertise/Budget.svg";
import Random from "@/assets/icons/expertise/Random.svg";
import Filter from "@/assets/icons/expertise/SpecelizedFilter.svg";
import DirectLink from "@/assets/icons/expertise/DirectLink.svg";
import Trending from "@/assets/icons/expertise/Trending.svg";
import Tshirt from "@/assets/images/products/t-shirt.png";
import Shoes from "@/assets/images/products/shoes.png";
import SunGlass from "@/assets/images/products/sunglass.png";
import Profile from "@/assets/images/profile.png";


export const navLinks = [
    {
      label: "Welcome",
    },
    {
      label: "Features",
    },
    {
      label: "Testimonials",
    },
    {
      label: "Blogs",
    },
    {
      label: "Boutique",
    },
  ];

  export const FilterOptions = [
    { label: "🌿 Eco-responsible itinerary" },
    { label: "🏞️ Nature and adventure" },
    { label: "🏛️ Cultural discovery" },
    { label: "🎲 Random discovery" },
    { label: "🌟 Popular destinations" },
  ];
  

  export interface Airport {
    name: string;
    iata_code: string; // Add any other fields if necessary
    country: string; // Add any other fields if necessary
  }
  
  export type Region =
    | "Oceania"
    | "Asia"
    | "Europe"
    | "MiddleEast"
    | "Americas"
    | "Africa"; // Define available regions
  
  export const AirportSuggestions: Record<Region, Airport[]> = {
    Asia: [
      { name: "Tokyo Haneda Airport", iata_code: "HND", country: "Japan" },
      {
        name: "Tokyo Narita International Airport",
        iata_code: "NRT",
        country: "Japan",
      },
      {
        name: "Singapore Changi Airport",
        iata_code: "SIN",
        country: "Singapore",
      },
      {
        name: "Incheon International Airport",
        iata_code: "ICN",
        country: "South Korea",
      },
      {
        name: "Beijing Capital International Airport",
        iata_code: "PEK",
        country: "China",
      },
      {
        name: "Shanghai Pudong International Airport",
        iata_code: "PVG",
        country: "China",
      },
      {
        name: "Hong Kong International Airport",
        iata_code: "HKG",
        country: "Hong Kong",
      },
      {
        name: "Kuala Lumpur International Airport",
        iata_code: "KUL",
        country: "Malaysia",
      },
      {
        name: "Bangkok Suvarnabhumi Airport",
        iata_code: "BKK",
        country: "Thailand",
      },
      {
        name: "Mumbai Chhatrapati Shivaji Maharaj International Airport",
        iata_code: "BOM",
        country: "India",
      },
      {
        name: "New Delhi Indira Gandhi International Airport",
        iata_code: "DEL",
        country: "India",
      },
      {
        name: "Manila Ninoy Aquino International Airport",
        iata_code: "MNL",
        country: "Philippines",
      },
      {
        name: "Jakarta Soekarno-Hatta International Airport",
        iata_code: "CGK",
        country: "Indonesia",
      },
      {
        name: "Taipei Taoyuan International Airport",
        iata_code: "TPE",
        country: "Taiwan",
      },
      {
        name: "Hanoi Noi Bai International Airport",
        iata_code: "HAN",
        country: "Vietnam",
      },
      {
        name: "Phuket International Airport",
        iata_code: "HKT",
        country: "Thailand",
      },
      {
        name: "Bangalore Kempegowda International Airport",
        iata_code: "BLR",
        country: "India",
      },
      {
        name: "Chengdu Shuangliu International Airport",
        iata_code: "CTU",
        country: "China",
      },
      {
        name: "Chennai International Airport",
        iata_code: "MAA",
        country: "India",
      },
      {
        name: "Hyderabad Rajiv Gandhi International Airport",
        iata_code: "HYD",
        country: "India",
      },
      {
        name: "Guangzhou Baiyun International Airport",
        iata_code: "CAN",
        country: "China",
      },
      {
        name: "Ho Chi Minh City Tan Son Nhat International Airport",
        iata_code: "SGN",
        country: "Vietnam",
      },
      {
        name: "Colombo Bandaranaike International Airport",
        iata_code: "CMB",
        country: "Sri Lanka",
      },
      {
        name: "Kathmandu Tribhuvan International Airport",
        iata_code: "KTM",
        country: "Nepal",
      },
      {
        name: "Yangon International Airport",
        iata_code: "RGN",
        country: "Myanmar",
      },
      {
        name: "Male Velana International Airport",
        iata_code: "MLE",
        country: "Maldives",
      },
      {
        name: "Dhaka Hazrat Shahjalal International Airport",
        iata_code: "DAC",
        country: "Bangladesh",
      },
      {
        name: "Doha Hamad International Airport",
        iata_code: "DOH",
        country: "Qatar",
      },
      {
        name: "Dammam King Fahd International Airport",
        iata_code: "DMM",
        country: "Saudi Arabia",
      },
      {
        name: "Jeddah King Abdulaziz International Airport",
        iata_code: "JED",
        country: "Saudi Arabia",
      },
      {
        name: "Medina Prince Mohammad Bin Abdulaziz Airport",
        iata_code: "MED",
        country: "Saudi Arabia",
      },
      { name: "Dubai International Airport", iata_code: "DXB", country: "UAE" },
      { name: "Sharjah International Airport", iata_code: "SHJ", country: "UAE" },
      {
        name: "Abu Dhabi International Airport",
        iata_code: "AUH",
        country: "UAE",
      },
      {
        name: "Kuwait International Airport",
        iata_code: "KWI",
        country: "Kuwait",
      },
      { name: "Muscat International Airport", iata_code: "MCT", country: "Oman" },
      {
        name: "Amman Queen Alia International Airport",
        iata_code: "AMM",
        country: "Jordan",
      },
      {
        name: "Tehran Imam Khomeini International Airport",
        iata_code: "IKA",
        country: "Iran",
      },
      {
        name: "Beirut Rafic Hariri International Airport",
        iata_code: "BEY",
        country: "Lebanon",
      },
      {
        name: "Bahrain International Airport",
        iata_code: "BAH",
        country: "Bahrain",
      },
      {
        name: "Karachi Jinnah International Airport",
        iata_code: "KHI",
        country: "Pakistan",
      },
      {
        name: "Lahore Allama Iqbal International Airport",
        iata_code: "LHE",
        country: "Pakistan",
      },
      {
        name: "Islamabad International Airport",
        iata_code: "ISB",
        country: "Pakistan",
      },
      {
        name: "Tashkent International Airport",
        iata_code: "TAS",
        country: "Uzbekistan",
      },
      {
        name: "Astana Nursultan Nazarbayev International Airport",
        iata_code: "NQZ",
        country: "Kazakhstan",
      },
      {
        name: "Almaty International Airport",
        iata_code: "ALA",
        country: "Kazakhstan",
      },
      {
        name: "Ulaanbaatar Chinggis Khaan International Airport",
        iata_code: "UBN",
        country: "Mongolia",
      },
      {
        name: "Ashgabat International Airport",
        iata_code: "ASB",
        country: "Turkmenistan",
      },
      {
        name: "Bishkek Manas International Airport",
        iata_code: "FRU",
        country: "Kyrgyzstan",
      },
      {
        name: "Dushanbe International Airport",
        iata_code: "DYU",
        country: "Tajikistan",
      },
      {
        name: "Baku Heydar Aliyev International Airport",
        iata_code: "GYD",
        country: "Azerbaijan",
      },
      {
        name: "Tbilisi International Airport",
        iata_code: "TBS",
        country: "Georgia",
      },
      {
        name: "Yerevan Zvartnots International Airport",
        iata_code: "EVN",
        country: "Armenia",
      },
    ],
    Europe: [
      { name: "London Heathrow Airport", iata_code: "LHR", country: "UK" },
      {
        name: "Paris Charles de Gaulle Airport",
        iata_code: "CDG",
        country: "France",
      },
      { name: "Frankfurt Airport", iata_code: "FRA", country: "Germany" },
      {
        name: "Amsterdam Schiphol Airport",
        iata_code: "AMS",
        country: "Netherlands",
      },
      { name: "Madrid Barajas Airport", iata_code: "MAD", country: "Spain" },
      { name: "Rome Fiumicino Airport", iata_code: "FCO", country: "Italy" },
      { name: "Zurich Airport", iata_code: "ZRH", country: "Switzerland" },
    ],
    MiddleEast: [
      { name: "Dubai International Airport", iata_code: "DXB", country: "UAE" },
      {
        name: "Doha Hamad International Airport",
        iata_code: "DOH",
        country: "Qatar",
      },
      {
        name: "King Khalid International Airport",
        iata_code: "RUH",
        country: "Saudi Arabia",
      },
      { name: "Ben Gurion Airport", iata_code: "TLV", country: "Israel" },
      {
        name: "Abu Dhabi International Airport",
        iata_code: "AUH",
        country: "UAE",
      },
      {
        name: "Kuwait International Airport",
        iata_code: "KWI",
        country: "Kuwait",
      },
      { name: "Muscat International Airport", iata_code: "MCT", country: "Oman" },
    ],
    Americas: [
      {
        name: "Los Angeles International Airport",
        iata_code: "LAX",
        country: "USA",
      },
      {
        name: "John F. Kennedy International Airport",
        iata_code: "JFK",
        country: "USA",
      },
      {
        name: "Toronto Pearson International Airport",
        iata_code: "YYZ",
        country: "Canada",
      },
      {
        name: "São Paulo Guarulhos International Airport",
        iata_code: "GRU",
        country: "Brazil",
      },
      {
        name: "Mexico City International Airport",
        iata_code: "MEX",
        country: "Mexico",
      },
      { name: "Miami International Airport", iata_code: "MIA", country: "USA" },
      {
        name: "Vancouver International Airport",
        iata_code: "YVR",
        country: "Canada",
      },
    ],
    Africa: [
      {
        name: "O. R. Tambo International Airport",
        iata_code: "JNB",
        country: "South Africa",
      },
      { name: "Cairo International Airport", iata_code: "CAI", country: "Egypt" },
      {
        name: "Addis Ababa Bole International Airport",
        iata_code: "ADD",
        country: "Ethiopia",
      },
      {
        name: "Casablanca Mohammed V International Airport",
        iata_code: "CMN",
        country: "Morocco",
      },
      {
        name: "Cape Town International Airport",
        iata_code: "CPT",
        country: "South Africa",
      },
      {
        name: "Nairobi Jomo Kenyatta International Airport",
        iata_code: "NBO",
        country: "Kenya",
      },
      {
        name: "Lagos Murtala Muhammed International Airport",
        iata_code: "LOS",
        country: "Nigeria",
      },
    ],
    Oceania: [
      {
        name: "Sydney Kingsford Smith Airport",
        iata_code: "SYD",
        country: "Australia",
      },
      { name: "Melbourne Airport", iata_code: "MEL", country: "Australia" },
      { name: "Auckland Airport", iata_code: "AKL", country: "New Zealand" },
      { name: "Brisbane Airport", iata_code: "BNE", country: "Australia" },
      {
        name: "Christchurch International Airport",
        iata_code: "CHC",
        country: "New Zealand",
      },
      {
        name: "Fiji Nadi International Airport",
        iata_code: "NAN",
        country: "Fiji",
      },
      { name: "Perth Airport", iata_code: "PER", country: "Australia" },
    ],
  };
  
  export  const HomeExpertiseData = [
    {
      icon: <Customization />,
      title: "Full customization",
      desc: "The bot offers tailor-made itineraries based on your preferences, whether for cultural, nature or adventure trips.",
    },
    {
      icon: <EaseOfUse />,
      title: "Ease of use",
      desc: "With an intuitive interface, no technical skills are required to create a suitable route.",
    },
    {
      icon: <Ecofriendly />,
      title: "Eco-friendly",
      desc: "Eco-friendly travel options for sustainable and eco-responsible itineraries.",
    },
    {
      icon: <SaveTime />,
      title: "Save time",
      desc: "The bot makes planning your trip easier by instantly providing you with route suggestions without lengthy research.",
    },
    {
      icon: <Budget />,
      title: "Budget flexibility",
      desc: "Tailor your trips to your budget, with recommendations optimized for each price range.",
    },
    {
      icon: <Random />,
      title: "Random discovery",
      desc: "Let yourself be surprised with random destinations that fit your budget, for unexpected and exciting trips.",
    },
    {
      icon: <Filter />,
      title: "Specialized filters",
      desc: "Personalize your trips even more with filters like “eco-friendly,” “nature,” or “cultural discovery” for a unique experience.",
    },
    {
      icon: <DirectLink />,
      title: "Direct links to book",
      desc: "After choosing an itinerary, you receive direct links to make your reservations, making every step of the preparation easier.",
    },
    {
      icon: <Trending />,
      title: "Trending recommendations",
      desc: "The bot suggests the hottest destinations of the moment to inspire you in choosing your next adventure.",
    },
  ];


  export const plansData= [
    {
      name: "Basic Plan",
      price:
        "<span class='text-[#040F16] text-[28px] md:text-[38px]  font-semibold'>$1,600/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium Plan",
      price:
        "<span class='text-[#040F16] text-[28px] md:text-[38px]  font-semibold'>$2,200/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
    },
    {
      name: "Business Plan",
      price:
        "<span class='text-[#040F16] text-[28px] md:text-[38px]  font-semibold'>$3,500/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
      badge: "POPULAR",
    },
  ];







  export const TestimonialsData = [
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
  ];

  export const Productsdata = [
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: Shoes,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: SunGlass,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
  ];
