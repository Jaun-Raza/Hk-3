import Hero from "@/components/Hero";
import Ourblog from "@/components/Ourblog";
import Ourinsta from "@/components/Ourinsta";
import Proddetail from "@/components/Proddetail";
import Toppicks from "@/components/Toppicks";
import Twoproduct from "@/components/Twoproduct";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Twoproduct/>
      <Toppicks/>
      <Proddetail/>
      <Ourblog/>
      <Ourinsta/>
    </div>
  );
}
