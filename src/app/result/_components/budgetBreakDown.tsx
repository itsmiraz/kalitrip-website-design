"use client";
// import BudgetBreakDownImage from "@/assets/images/budgetBreakDownImage.png";
// import Image from "next/image";

const BudgetBreakDown = () => {
  return (
    <div className="px-[20px]">
      <div className="bg-[#EEF8F0] mx-auto rounded-[20px] max-w-[1240px] my-[16px] md:my-[30px] py-[20px] md:py-[30px] md:px-[30px] px-[15px]  md:p-[30px]">
        <h2 className="font-clashDisplay font-semibold text-heading-color text-[14px] md:text-[24px]">
          Budget breakdown
        </h2>
        <div className="max-w-[670px] gap-y-[40px] flex flex-col justify-center items-center mx-auto">
          <div className="w-[212px] h-[212px]">
            <PieChartComponent />
          </div>
          <div className="flex flex-wrap  justify-center items-center gap-y-[15px] gap-x-[20px]">
            <div className="flex gap-x-[10px] items-center">
              <div className="md:w-[16px] w-[10px] h-[10px] md:h-[16px] bg-[#478FFD] rounded-full"></div>{" "}
              <p className="font-inter text-[#478FFD]  font-semibold text-[10px] md:text-[16px]">
                {" "}
                Accommodation
              </p>
            </div>
            <div className="flex gap-x-[10px] items-center">
              <div className="md:w-[16px] w-[10px] h-[10px] md:h-[16px] bg-[#8927FA] rounded-full"></div>{" "}
              <p className="font-inter  text-[#8927FA] font-semibold text-[10px] md:text-[16px]">
                {" "}
                Transportation
              </p>
            </div>
            <div className="flex gap-x-[10px] items-center">
              <div className="md:w-[16px] w-[10px] h-[10px] md:h-[16px] bg-[#54C58D] rounded-full"></div>{" "}
              <p className="font-inter  text-[#54C58D] font-semibold text-[10px] md:text-[16px]">
                {" "}
                Activities
              </p>
            </div>
            <div className="flex gap-x-[10px] items-center">
              <div className="md:w-[16px] w-[10px] h-[10px] md:h-[16px] bg-[#F2BC14] rounded-full"></div>{" "}
              <p className="font-inter text-[#F2BC14] font-semibold text-[10px] md:text-[16px]">
                {" "}
                Food and Contingencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakDown;

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#478FFD", "#8927FA", "#54C58D", "#F2BC14"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
