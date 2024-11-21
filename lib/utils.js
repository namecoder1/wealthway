import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
  };
  return new Intl.DateTimeFormat("it-IT", options).format(date);
}
