import React from "react";
import Hero from "./_components/hero";
import PlanResult from "./_components/planResult";
import BudgetBreakDown from "./_components/budgetBreakDown";
import Expertise from "./_components/expertise";
import Footer from "./_components/footer";

const Result = () => {
  return (
    <div className="bg-[#FDF7FA]/10 backdrop-blur-3xl">
      <Hero />
      <PlanResult />
      <BudgetBreakDown />
      <Expertise />
       <Footer/>
    </div>
  );
};

export default Result;
