import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import WhySynergy from "@/components/WhySynergy";
import Testimonials from "@/components/Testimonials";
import PatientStories from "@/components/PatientStories";
import Locations from "@/components/Locations";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <WhySynergy />
        <Testimonials />
        <PatientStories />
        <Locations />
        <HowItWorks />
        <Team />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
