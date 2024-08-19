import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto flex flex-col  px-4 py-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Track Your Expenses Effortlessly
        </h2>
        <p className="text-lg mb-8">
          Our expense tracker helps you manage your finances with ease. Get
          insights into your spending habits and save more efficiently.
        </p>
        <Link
          href="/api/auth/register"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-sm flex items-center justify-center gap-2 w-fit mx-auto"
        >
          Get Started
          <ExternalLinkIcon />
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Track Your Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Keep an eye on where your money goes and set budgets for different
              categories.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Set Up Recurring Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your subscriptions and regular payments easily.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visualize Your Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Get insightful charts and graphs to understand your spending
              patterns.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
