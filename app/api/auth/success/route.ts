import { getBaseUrl } from "@/lib/url";
import db from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null || !user.id)
    throw new Error("something went wrong with authentication");

  let dbUser = await db.user.findUnique({
    where: { authId: user.id },
  });

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        authId: user.id,
        givenName: user.given_name ?? "",
        familyName: user.family_name ?? "",
        email: user.email ?? "",
        paymentMethods: {
          create: [
            { name: "Cash" },
            { name: "Credit Card" },
            { name: "Account Transfer" },
          ],
        },
        recurringIntervals: {
          create: [
            { interval: "WEEKLY" },
            { interval: "MONTHLY" },
            { interval: "ANNUALLY" },
          ],
        },
      },
    });
  }

  return NextResponse.redirect(`${getBaseUrl()}/dashboard`);
}
