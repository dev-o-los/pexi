import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
