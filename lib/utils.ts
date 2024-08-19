import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get initials from a full name.
 * @param {string} name - The full name.
 * @return {string} - The initials.
 */
export function getInitials(name: string): string {
  console.log(name);
  if (!name) return "";

  const nameParts = name.trim().split(/\s+/);
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}
