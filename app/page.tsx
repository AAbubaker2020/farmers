import Head from 'next/head';
import { LandingPageComponent } from "@/components/landing-page";

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/app_farm.jpg?v=3" type="image/png" />
        <title>Local Farmer Community</title>
      </Head>
      <LandingPageComponent />
    </>
  );
}
