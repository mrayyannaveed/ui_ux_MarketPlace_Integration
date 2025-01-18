import Categories from "./components/categories";
import Explore from "./components/explore";
import Featured from "./components/featured";
import HeroSection from "./components/hero-section";
import OurProducts from "./components/ourProducts";
import Sponsor from "./components/sponsor";

export default function Home() {
  type spons = {
    sponsorImage: string,
    sponsorAlt: string
  }
  let sponsors: spons[] = [
    {sponsorImage: "/sponsor/Logo.png", sponsorAlt: "zapier"},
    {sponsorImage: "/sponsor/Logo1.png", sponsorAlt: "pipedrive"},
    {sponsorImage: "/sponsor/Logo2.png", sponsorAlt: "cib_bank"},
    {sponsorImage: "/sponsor/Logo3.png", sponsorAlt: "z"},
    {sponsorImage: "/sponsor/Logo4.png", sponsorAlt: "burnt toast"},
    {sponsorImage: "/sponsor/Logo5.png", sponsorAlt: "pandadoc"},
    {sponsorImage: "/sponsor/Logo6.png", sponsorAlt: "moz"}
  ]

  return (
      <div>
        <HeroSection/>
        <section className="flex justify-center items-center mb-20 ">

          <section className="flex justify-center w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw]">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">

            {sponsors.map((sponsor) => (
              <Sponsor image={sponsor.sponsorImage} alt={sponsor.sponsorAlt}/>
            ))}
            </section>
          </section>
        </section>
        <Featured/>
        <Categories/>
        <Explore/>
        <OurProducts/>
      </div>
  );
}
