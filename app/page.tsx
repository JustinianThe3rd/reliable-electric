import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ReviewsConveyor from "./components/ReviewsConveyor";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <ReviewsConveyor />
      <CallToAction />
      <Footer />
    </main>
  );
}
