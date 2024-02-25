import {
  type Data,
  type Category,
  type Item,
  type Settings,
  type Option,
} from "@/types";

const items: Item[] = [
  { id: "AT", name: "Autriche", city: "Vienne" },
  { id: "BE", name: "Belgique", city: "Bruxelles" },
  { id: "BG", name: "Bulgarie", city: "Sofia" },
  { id: "CY", name: "Chypre", city: "Nicosie" },
  { id: "HR", name: "Croatie", city: "Zagreb" },
  { id: "CZ", name: "République tchèque", city: "Prague" },
  { id: "DE", name: "Allemagne", city: "Berlin" },
  { id: "DK", name: "Danemark", city: "Copenhague" },
  { id: "EE", name: "Estonie", city: "Tallinn" },
  { id: "GR", name: "Grèce", city: "Athènes" },
  { id: "ES", name: "Espagne", city: "Madrid" },
  { id: "FI", name: "Finlande", city: "Helsinki" },
  { id: "FR", name: "France", city: "Paris" },
  { id: "HU", name: "Hongrie", city: "Budapest" },
  { id: "IE", name: "Irlande", city: "Dublin" },
  { id: "IT", name: "Italie", city: "Rome" },
  { id: "LT", name: "Lituanie", city: "Vilnius" },
  { id: "LU", name: "Luxembourg", city: "Luxembourg" },
  { id: "LV", name: "Lettonie", city: "Riga" },
  { id: "MT", name: "Malte", city: "La Valette" },
  { id: "NL", name: "Pays-Bas", city: "Amsterdam" },
  { id: "PL", name: "Pologne", city: "Varsovie" },
  { id: "PT", name: "Portugal", city: "Lisbonne" },
  { id: "RO", name: "Roumanie", city: "Bucarest" },
  { id: "SI", name: "Slovénie", city: "Ljubljana" },
  { id: "SE", name: "Suède", city: "Stockholm" },
  { id: "SK", name: "Slovaquie", city: "Bratislava" },
];

const categories: Category[] = [{ from: 0, to: 14 }, { from: 15 }];

const defaultSettings: Settings = {
  nbQuestions: 10,
  categoryIndexes: "all",
};

const nbQuestionsOptions: Option[] = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
];

export const data: Data = {
  items,
  categories,
  defaultSettings,
  nbQuestionsOptions,
};
