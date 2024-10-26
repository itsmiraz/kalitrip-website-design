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
