import React from "react";
import Hero from "./_components/hero";
import PlanResult from "./_components/planResult";
import BudgetBreakDown from "./_components/budgetBreakDown";
import Expertise from "./_components/expertise";

const Result = () => {
  return (
    <div>
      <Hero />
      <PlanResult />
      <BudgetBreakDown />
      <Expertise />
    </div>
  );
};

export default Result;
