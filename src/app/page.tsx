import Blogs from "./components/blogs";
import Expertise from "./components/expertise";
import Footer from "./components/footer";
import Hero from "./components/hero";
import PricingPlan from "./components/pricingPlan";
import Products from "./components/products";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
       <Expertise />
      <PricingPlan />
   <Products />
        <Testimonials />
     <Blogs />
    {/*    <Footer/> */}
    </div>
  );
}
