import CustomerReview from "./sections/CustomerReview";
import Hero from "./sections/hero";
import NavBar from "./sections/NavBar";
import Popular from "./sections/Popular";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subcribe from "./sections/Subcribe";
import SuperQuality from "./sections/SuperQuality";







export default function App() {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular/>
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding -x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
       fotter
      </section>
    </main>
  )
}

