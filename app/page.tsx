import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ablar - HomePage",
  description: "Ablar HomePage",
};

export default async function Page() {
  return (
    <main className="flex flex-col justify-center m-10">
      <Link href="/geo/fra-dpt" className="underline my-5">
        Départements France métropolitaine
      </Link>
      <Link href="/geo/usa" className="underline my-5">
        États des États-Unis
      </Link>
      <Link href="/geo/eu" className="underline my-5">
        Union Européenne
      </Link>
    </main>
  );
}
