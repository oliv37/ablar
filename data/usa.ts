import {
  type Data,
  type Category,
  type Item,
  type Settings,
  type Option,
} from "@/types";

const items: Item[] = [
  { id: "AL", name: "Alabama", city: "Montgomery" },
  { id: "AK", name: "Alaska", city: "Juneau" },
  { id: "AZ", name: "Arizona", city: "Phoenix" },
  { id: "AR", name: "Arkansas", city: "Little Rock" },
  { id: "CA", name: "Californie", city: "Sacramento" },
  { id: "NC", name: "Caroline du Nord", city: "Raleigh" },
  { id: "SC", name: "Caroline du Sud", city: "Columbia" },
  { id: "CO", name: "Colorado", city: "Denver" },
  { id: "CT", name: "Connecticut", city: "Hartford" },
  { id: "ND", name: "Dakota du Nord", city: "Bismarck" },
  { id: "SD", name: "Dakota du Sud", city: "Pierre" },
  { id: "DE", name: "Delaware", city: "Dover" },
  { id: "FL", name: "Floride", city: "Tallahassee" },
  { id: "GA", name: "Géorgie", city: "Atlanta" },
  { id: "HI", name: "Hawaï", city: "Honolulu" },
  { id: "ID", name: "Idaho", city: "Boise" },
  { id: "IL", name: "Illinois", city: "Springfield" },
  { id: "IN", name: "Indiana", city: "Indianapolis" },
  { id: "IA", name: "Iowa", city: "Des Moines" },
  { id: "KS", name: "Kansas", city: "Topeka" },
  { id: "KY", name: "Kentucky", city: "Frankfort" },
  { id: "LA", name: "Louisiane", city: "Bâton-Rouge" },
  { id: "ME", name: "Maine", city: "Augusta" },
  { id: "MD", name: "Maryland", city: "Annapolis" },
  { id: "MA", name: "Massachusetts", city: "Boston" },
  { id: "MI", name: "Michigan", city: "Lansing" },
  { id: "MN", name: "Minnesota", city: "Saint Paul" },
  { id: "MS", name: "Mississippi", city: "Jackson" },
  { id: "MO", name: "Missouri", city: "Jefferson City" },
  { id: "MT", name: "Montana", city: "Helena" },
  { id: "NE", name: "Nebraska", city: "Lincoln" },
  { id: "NV", name: "Nevada", city: "Carson City" },
  { id: "NH", name: "New Hampshire", city: "Concord" },
  { id: "NJ", name: "New Jersey", city: "Trenton" },
  { id: "NY", name: "État de New York", city: "Albany" },
  { id: "NM", name: "Nouveau-Mexique", city: "Santa Fe" },
  { id: "OH", name: "Ohio", city: "Columbus" },
  { id: "OK", name: "Oklahoma", city: "Oklahoma City" },
  { id: "OR", name: "Oregon", city: "Salem" },
  { id: "PA", name: "Pennsylvanie", city: "Harrisburg" },
  { id: "RI", name: "Rhode Island", city: "Providence" },
  { id: "TN", name: "Tennessee", city: "Nashville" },
  { id: "TX", name: "Texas", city: "Austin" },
  { id: "UT", name: "Utah", city: "Salt Lake City" },
  { id: "VT", name: "Vermont", city: "Montpelier" },
  { id: "VA", name: "Virginie", city: "Richmond" },
  { id: "WV", name: "Virginie-Occidentale", city: "Charleston" },
  { id: "WA", name: "Washington", city: "Olympia" },
  { id: "WI", name: "Wisconsin", city: "Madison" },
  { id: "WY", name: "Wyoming", city: "Cheyenne" },
];

const categories: Category[] = [
  { from: 0, to: 16 },
  { from: 17, to: 33 },
  { from: 34 },
];

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
