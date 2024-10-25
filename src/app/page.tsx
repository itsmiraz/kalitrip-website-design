import Expertise from "./components/expertise";
import Hero from "./components/hero";
import PricingPlan from "./components/pricingPlan";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <PricingPlan />
      <Products/>
    </div>
  );
}
