import Footer from "@/components/Footer/Footer";
import Categories from "@/components/Homepage/Categories";
import HeroSection from "@/components/Homepage/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // List of product paths
    const productPaths = [
      "yx1-earphones",
      "zx9-speakers",
      "zx7-speakers",
      "xx59-headphones",
      "xx99-mark-one-headphones",
      "xx99-mark-two-headphones",
    ];

    // List of categories paths
    const categoriesPaths = ["headphones", "speakers", "earphones"];

    // Prefetch each product path
    productPaths.forEach((path) => {
      router.prefetch(`/products/${path}`);
    });

    categoriesPaths.forEach((path) => {
      router.prefetch(`/categories/${path}`);
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>Audiophile | Home </title>

        {/* Meta Tags for Description and Social Sharing */}
        <meta
          name="description"
          content={`All in one stop to fulfill your audio needs and get the most out of personal audio.`}
        />

        {/* Fix hydration warning */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />

        {/* Open Graph meta tags for social sharing (Facebook, LinkedIn, etc.)  */}
        <meta property="og:title" content={`Audiophile | Home`} />
        <meta
          property="og:description"
          content={`All in one stop to fulfill your audio needs and get the most out of personal audio.`}
        />
        <meta property="og:site_name" content="Audiophile" />
        <meta property="og:site" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/juwon-tech/image/upload/v1696234058/Screenshot_2023-10-02_at_09.06.55_mkc9co.png"
        />
        <meta
          property="og:url"
          content="https://audiophile-ecommerce-247.vercel.app/"
        />

        {/* Twitter Card meta tags for social sharing (Twitter)  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Audiophile | Home" />
        <meta
          name="twitter:description"
          content="All in one stop to fulfill your audio needs and get the most out of personal audio."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/juwon-tech/image/upload/v1696234058/Screenshot_2023-10-02_at_09.06.55_mkc9co.png"
        />
      </Head>
      <section className="homeHero">
        <Navbar style={{ backgroundColor: "transparent" }} />

        <HeroSection />
      </section>
      <Categories />

      <Footer />
    </>
  );
}
