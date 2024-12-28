import clsx from "clsx";

export function cn(...inputs: string[]): string {
  return clsx(inputs);
}
