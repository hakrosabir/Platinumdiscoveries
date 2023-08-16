import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import ContactUs from "@/components/ContactUs";
import ExploreSchool from "@/components/Explore/ExploreSchools";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Offer />
      <ExploreSchool />
      <ContactUs />
    </main>
  );
}
