export function getBaseUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return (
      process.env.NEXT_PUBLIC_BASE_URL || "https://pegboard-wheat.vercel.app"
    );
  }
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}
