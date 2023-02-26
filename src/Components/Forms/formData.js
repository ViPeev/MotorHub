const cars = {
  "Alfa-Romeo": [
    "145",
    "146",
    "147",
    "155",
    "156",
    "159",
    "164",
    "166",
    "8C",
    "4C",
    "Brera",
    "Giulia",
    "Giulietta",
    "GT",
    "GTV",
    "Stelvio",
    "Tonale",
  ],
  "Aston-Martin": [
    "Cygnet",
    "DB7",
    "DB9",
    "DB11",
    "DBS",
    "DBX",
    "Rapide",
    "Vantage",
    "Vanquish",
    "One-77",
  ],
  Audi: [
    "80",
    "90",
    "100",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q7",
    "Q8",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "SQ7",
    "SQ8",
    "RS2",
    "RS3",
    "RS4",
    "RS5",
    "RS6",
    "RS7",
    "R8",
    "TT",
  ],
  Bentley: [
    "Azure",
    "Brooklands",
    "Bakalar",
    "Bentayga",
    "Continental",
    "Flying Spur",
    "Mulsanne",
  ],
  BMW: [
    "1-Series",
    "2-Series",
    "2-Series Gran Coupe",
    "2-Series Active Tourer",
    "3-Series",
    "3-Series GT",
    "4-Series",
    "5-Series",
    "5-Series GT",
    "6-Series",
    "6-Series GT",
    "7-Series",
    "8-Series",
    "i3",
    "i8",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "XM",
    "Z1",
    "Z3",
    "Z4",
    "M1",
    "1M",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M8",
    "X3M",
    "X4M",
    "X5M",
    "X6M",
  ],
  Bugatti: ["EB110", "Veyron", "Chiron"],
  Cadillac: ["ATS", "BLS", "CT6", "CTS", "Deville", "Eldorado", "Escalade"],
  Chevrolet: [
    "Avalanche",
    "Aveo",
    "Beretta",
    "Blazer",
    "Camaro",
    "Caprice",
    "Captiva",
    "Corvette",
    "Chevelle",
    "Colorado",
    "Cruze",
    "Epica",
    "Impala",
    "Kalos",
    "Malibu",
    "Tahoe",
    "Trailblazer",
    "Trax",
    "Silverado",
    "Suburban",
    "Lacetti",
    "Spark",
    "Volt",
  ],
  Citroen: [
    "Berlingo",
    "C1",
    "C2",
    "C3",
    "C3 AirCross",
    "C3 Picasso",
    "C4",
    "C4 Aircross",
    "C4 Cactus",
    "C4 Picasso",
    "C5",
    "C5 AirCross",
    "C5 X",
    "C6",
    "C8",
    "C-Elysee",
    "DS2",
    "DS3",
    "DS4",
    "DS4 CrossBack",
    "DS5",
    "Jumper",
    "Jumpy",
    "Nemo",
    "Saxo",
    "Xantia",
    "Xsara",
    "Xsara Picasso",
  ],
  Dacia: ["Dokker", "Duster", "Logan", "Sandero", "Jogger", "Lodgy"],
  Dodge: [
    "Avenger",
    "Caliber",
    "Challenger",
    "Charger",
    "Dart",
    "Demon",
    "Durango",
    "Hornet",
    "Magnum",
    "Neon",
    "RAM",
    "Viper",
  ],
  Ferrari: [
    "296 GTB",
    "360",
    "F430",
    "458",
    "488",
    "599",
    "812 SuperFast",
    "California",
    "Enzo Ferrari",
    "F12",
    "F40",
    "F50",
    "FF",
    "GTC4 Lusso",
    "LaFerrari",
    "Purosangue",
    "Roma",
    "SF90",
    "Testarossa",
  ],
  Fiat: [
    "124 Spider",
    "Punto",
    "500",
    "500C",
    "500L",
    "500X",
    "Brava",
    "Bravo",
    "Coupe",
    "Cinquecento",
    "Marea",
    "Multipla",
    "Panda",
    "Croma",
    "Linea",
    "Doblo",
    "Ducato",
    "Tipo",
  ],
  Ford: [
    "Bronco",
    "Capri",
    "Cougar",
    "Courier",
    "Crown Victoria",
    "EcoSport",
    "Edge",
    "Escape",
    "Escort",
    "Excursion",
    "Explorer",
    "Kuga",
    "F150",
    "F250",
    "F350",
    "Focus",
    "Fiesta",
    "Fusion",
    "Galaxy",
    "C-Max",
    "B-Max",
    "S-Max",
    "Mustang",
    "Mondeo",
    "Puma",
    "Probe",
    "Ka",
  ],
  Honda: [
    "Accord",
    "City",
    "Civic",
    "CR-V",
    "CR-X",
    "CR-Z",
    "Element",
    "FR-V",
    "HR-V",
    "Insight",
    "Integra",
    "Jazz",
    "Legend",
    "Logo",
    "NSX",
    "Odyssey",
    "Pilot",
    "Prelude",
    "Ridgeline",
    "S2000",
  ],
  Hyundai: [
    "Accent",
    "Atos",
    "Coupe",
    "Elantra",
    "Galloper",
    "Genesis",
    "Getz",
    "Grandeur",
    "Grand Santa Fe",
    "i10",
    "i20",
    "i30",
    "i40",
    "IONIQ 5",
    "IONIQ 6",
    "ix20",
    "ix35",
    "ix55",
    "Kona",
    "Matrix",
    "Sonata",
    "Tucson",
    "Terracan",
    "Veloster",
  ],
  Infiniti: [
    "EX30",
    "EX35",
    "EX37",
    "FX",
    "G35",
    "G37",
    "M30",
    "M35",
    "M37",
    "Q30",
    "Q45",
    "Q50",
    "Q60",
    "Q70",
    "QX30",
    "QX50",
    "QX56",
    "QX60",
    "QX70",
    "QX80",
  ],
  Jaguar: [
    "E-Pace",
    "E-Type",
    "F-Pace",
    "F-Type",
    "I-Pace",
    "S-Type",
    "XE",
    "XF",
    "XJ",
    "XK",
    "X-Type",
  ],
  Jeep: [
    "Cherokee",
    "Commander",
    "Compass",
    "Gladiator",
    "Grand Cherokee",
    "Patriot",
    "Wagoneer",
    "Willys",
    "Wranger",
  ],
  Kia: [
    "Carens",
    "Carnival",
    "Ceed",
    "Cerato",
    "Clarus",
    "EV6",
    "Magentis",
    "Niro",
    "Opirus",
    "Optima",
    "Picanto",
    "Rio",
    "Sephia",
    "Shuma",
    "Sorento",
    "Soul",
    "Sportage",
    "Stinger",
    "Stonic",
    "Venga",
    "XCeed",
  ],
  Koenigsegg: ["Agera", "CCR", "CCXR", "Gemera", "Regera", "Jesko"],
  Lada: [
    "110",
    "111",
    "112",
    "1200",
    "2107",
    "2110",
    "2111",
    "2112",
    "Granta",
    "Kalina",
    "Niva",
    "Vesta",
    "X-Ray",
  ],
  Lamborghini: [
    "Aventador",
    "Countact",
    "Diablo",
    "Espada",
    "Gallardo",
    "Huracan",
    "Jalpa",
    "LM002",
    "Miura",
    "Murcielago",
    "Urraco",
    "Urus",
  ],
  Lancia: [
    "Beta",
    "Dedra",
    "Delta",
    "Flavia",
    "Fulvia",
    "Gamma",
    "Kappa",
    "Lybra",
    "Thema",
    "Thesis",
    "Ypsilon",
  ],
  "Land Rover": [
    "Defender",
    "Discovery",
    "Discovery Sport",
    "Freelander",
    "Range Rover",
    "Range Rover Sport",
    "Range Rover Evoque",
    "Range Rover Velar",
  ],
  Lexus: [
    "CT",
    "ES Series",
    "GS Series",
    "GX Series",
    "IS Series",
    "LC",
    "LS Series",
    "LX Series",
    "NX Series",
    "RC Series",
    "RX Series",
  ],
  Lincoln: ["Aviator", "Continental", "LS", "Navigator", "Town Car"],
  Lotus: [
    "Cortina",
    "Elan",
    "Elise",
    "Elite",
    "Emira",
    "Esprit",
    "Europa",
    "Evora",
    "Exige",
    "Super Seven",
  ],
  Maserati: [
    "Biturbo",
    "Ghibli",
    "GranTurismo",
    "Grecale",
    "Levante",
    "MC12",
    "MC20",
    "Merak",
    "Quattroporte",
    "Spyder",
  ],
  Mazda: [
    "121",
    "2",
    "3",
    "323",
    "5",
    "6",
    "626",
    "929",
    "CX-3",
    "CX-30",
    "CX-5",
    "CX-60",
    "CX-7",
    "CX-9",
    "Demio",
    "MPV",
    "MX-3",
    "MX-5",
    "MX-6",
    "Premacy",
    "Protege",
    "RX-6",
    "RX-7",
    "RX-8",
    "Tribute",
  ],
  McLaren: [
    "540C",
    "570GT",
    "570S",
    "600LT",
    "650S",
    "675LT",
    "720S",
    "765",
    "Artura",
    "Elva",
    "GT",
    "MP4-12C",
    "P1",
    "Senna",
    "Speedtail",
  ],
  "Mercedes-Benz": [
    "190",
    "124",
    "A-Class",
    "B-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "G-Class",
    "R-Class",
    "X-Class",
    "T-Class",
    "V-Class",
    "Citan",
    "CE",
    "CLA",
    "CLC",
    "CL",
    "CLK",
    "CLS",
    "EQA",
    "EQB",
    "EQC",
    "EQE",
    "EQS",
    "EQT",
    "EQV",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLK",
    "GLS",
    "GL",
    "GT",
    "GT 4-Door",
    "ML",
    "SL",
    "SLC",
    "SLK",
    "SLS AMG",
    "SLR McLaren",
    "Sprinter",
    "Viano",
    "Vito",
  ],
  Mini: ["Cooper", "Clubman", "Countryman", "Coupe", "Paceman", "Roadster"],
  Mitsubishi: [
    "3000 GT",
    "ASX",
    "Carisma",
    "Colt",
    "Eclipse",
    "Eclipse Cross",
    "Galant",
    "Galloper",
    "Grandis",
    "i-MiEV",
    "L200",
    "L300",
    "L400",
    "Lancer",
    "Mirage",
    "Montero",
    "Outlander",
    "Pajero",
    "Pajero Sport",
    "Pajero Pinin",
    "Space Runner",
    "Space Star",
  ],
  Nissan: [
    "100 NX",
    "200 SX",
    "240 SX",
    "300ZX",
    "350Z",
    "370Z",
    "Almera",
    "Almera Tino",
    "Altima",
    "Ariya",
    "Armada",
    "Cargo",
    "Cube",
    "e-NV200",
    "Frontier",
    "GT-R",
    "Juke",
    "Leaf",
    "Maxima",
    "Micra",
    "Murano",
    "Navara",
    "Note",
    "NP 300",
    "Pathfinder",
    "Patrol",
    "Primera",
    "Pulsar",
    "Qashqai",
    "Sentra",
    "Silvia",
    "Skyline",
    "Sunny",
    "Terano",
    "Tiida",
    "Titan",
    "X-Trail",
  ],
  Opel: [
    "Adam",
    "Agila",
    "Ampera",
    "Antara",
    "Astra",
    "Calibra",
    "Combo",
    "Corsa",
    "Crossland",
    "Frontera",
    "Grandland",
    "GT",
    "Insignia",
    "Kadett",
    "Karl",
    "Meriva",
    "Mokka X",
    "Movano",
    "Omega",
    "Signum",
    "Sintra",
    "Speedster",
    "Tigra",
    "Vectra",
    "Vivaro",
    "Zafira",
  ],
  Pagani: ["Huayra", "Zonda"],
  Peugeot: [
    "1007",
    "106",
    "107",
    "108",
    "2008",
    "204",
    "205",
    "206",
    "207",
    "208",
    "3008",
    "305",
    "306",
    "307",
    "308",
    "309",
    "4007",
    "4008",
    "404",
    "405",
    "406",
    "407",
    "408",
    "5008",
    "504",
    "505",
    "508",
    "604",
    "605",
    "607",
    "806",
    "807",
    "Bipper",
    "Boxer",
    "Expert",
    "Partner",
  ],
  Pontiac: [
    "Firebird",
    "G6",
    "Grand Am",
    "GTO",
    "Montana",
    "Solstice",
    "Sunfire",
    "Trans Am",
    "Trans Sport",
  ],
  Porsche: [
    "911",
    "912",
    "918",
    "924",
    "944",
    "959",
    "Boxster",
    "Carrera GT",
    "Cayenne",
    "Cayman",
    "Macan",
    "Panamera",
    "Taycan",
  ],
  Renault: [
    "11",
    "14",
    "19",
    "21",
    "25",
    "Alaskan",
    "Alpine",
    "Arkana",
    "Austral",
    "Avantime",
    "Captur",
    "Clio",
    "Espace",
    "Express",
    "Fluence",
    "Modus",
    "Scenic",
    "Kadjar",
    "Kangoo",
    "Koleos",
    "Laguna",
    "Latitude",
    "Master",
    "Megane",
    "Safrane",
    "Spider",
    "Talisman",
    "Trafic",
    "Twingo",
    "Twizy",
    "Vel Satis",
    "ZOE",
  ],
  "Rolls-Royce": ["Cullinan", "Dawn", "Ghost", "Phantom", "Wraith"],
  Saab: ["90", "900", "9000", "9-3", "9-4X", "9-5", "9-7X"],
  Seat: [
    "Arosa",
    "Ateca",
    "Cordoba",
    "Exeo",
    "Ibiza",
    "Inca",
    "Leon",
    "Mii",
    "Tarraco",
    "Toledo",
  ],
  Skoda: [
    "Citigo",
    "Enyaq",
    "Fabia",
    "Favorit",
    "Felicia",
    "Kamiq",
    "Karoq",
    "Kodiaq",
    "Octavia",
    "Rapid",
    "Roomster",
    "Scala",
    "Superb",
    "Yeti",
  ],
  Smart: ["Crossblade", "ForFour", "ForTwo", "Roadster"],
  Ssangyong: [
    "Actyon",
    "Family",
    "Korando",
    "Kyron",
    "Musso",
    "Rexton",
    "Rodius",
    "Tivoli",
  ],
  Subaru: [
    "B9 Tribeca",
    "Baja",
    "BRZ",
    "Forester",
    "Impreza",
    "Justy",
    "Legacy",
    "Levorg",
    "Libero",
    "Outback",
    "Solterra",
    "SVX",
    "WRX STI",
    "XT",
    "XV",
  ],
  Suzuki: [
    "Alto",
    "SX4",
    "Baleno",
    "Cappuccino",
    "Celerio",
    "Grand Vitara",
    "Ignis",
    "Jimny",
    "Kizashi",
    "Liana",
    "SJ Samurai",
    "Splash",
    "Swift",
    "Vitara",
  ],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Roadster"],
  Toyota: [
    "4-Runner",
    "Auris",
    "Avalon",
    "Avensis",
    "Avensis Verso",
    "Aygo",
    "Aygo X",
    "bZ4X",
    "Camry",
    "Carina",
    "Celica",
    "C-HR",
    "Corolla",
    "Corolla Verso",
    "Crown",
    "FJ",
    "Fortuner",
    "GT86",
    "Highlander",
    "Hilux",
    "IQ",
    "Land Cruiser",
    "Mirai",
    "MR 2",
    "Paseo",
    "Prius",
    "Proace",
    "RAV 4",
    "Sequoia",
    "Supra",
    "Tacoma",
    "Tundra",
    "Urban Cruiser",
    "Verso",
    "Verso-S",
    "Yaris",
  ],
  Trabant: ["600", "601"],
  Volkswagen: [
    "Amarok",
    "Arteon",
    "Beetle",
    "Bora",
    "Caddy",
    "CC",
    "Corrado",
    "Crafter",
    "Eos",
    "Fox",
    "Golf",
    "ID.3",
    "ID.4",
    "ID.5",
    "ID.6",
    "ID.Buzz",
    "Jetta",
    "Lupo",
    "Passat",
    "Phaeton",
    "Polo",
    "Scirocco",
    "Sharan",
    "Transporter",
    "Taigo",
    "T-Cross",
    "T-Roc",
    "Tiguan",
    "Touareg",
    "Touran",
    "up!",
    "Vento",
  ],
  Volvo: [
    "C30",
    "C70",
    "EX90",
    "S40",
    "S60",
    "S70",
    "S80",
    "S90",
    "V40",
    "V50",
    "V70",
    "V90",
    "XC40",
    "XC60",
    "XC70",
    "XC90",
  ],
};

const makes = Object.keys(cars);
const fuel = [
  "Petrol",
  "Diesel",
  "Hybrid",
  "Plug-in Hybrid",
  "Electric",
  "LPG",
];
const condition = ["Used", "New", "Damaged"];
const priceFrom = [
  "500",
  "1000",
  "2000",
  "3000",
  "4000",
  "5000",
  "10000",
  "20000",
  "50000",
  "75000",
  "100000",
  "200000",
];
const priceUpTo = [
  "1000",
  "2000",
  "3000",
  "4000",
  "5000",
  "10000",
  "20000",
  "50000",
  "75000",
  "100000",
  "200000",
  "1000000",
];
const maxPower = [
  "50",
  "100",
  "150",
  "200",
  "250",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
];

const mileage = [
  "5000",
  "10000",
  "25000",
  "50000",
  "100000",
  "150000",
  "200000",
  "250000",
  "300000",
];

const colors = [
  "White",
  "Black",
  "Blue",
  "Beige",
  "Brown",
  "Green",
  "Red",
  "Gray",
  "Silver",
  "Gold",
  "Violet",
  "Pink",
  "Yellow",
  "Orange",
  "Turquoise",
];

const countries = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
];

const transmission = ["Manual", "Automatic", "Semi-automatic"];
const years = [];
const firstYear = 1950;
const lastYear = Number(new Date().getFullYear());

for (let i = lastYear; i >= firstYear; i--) {
  years.push(i);
}

const formData = {
  make: "all",
  model: "all",
  fuelType: "all",
  condition: "all",
  maxPower: "all",
  priceFrom: "all",
  priceUpTo: "all",
};

const extendedFormData = {
  ...formData,
  transmission: "all",
  cubicCapacity: "",
  color: "all",
  location: "all",
  yearFrom: "all",
  yearUpTo: "all",
  maxMileage: "all",
  modification: "",
};

export default {
  makes,
  cars,
  fuel,
  condition,
  priceFrom,
  priceUpTo,
  maxPower,
  formData,
  extendedFormData,
  transmission,
  years,
  mileage,
  colors,
  countries,
};
