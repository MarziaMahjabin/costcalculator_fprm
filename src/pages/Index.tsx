import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/components/ui/ProgressBar";
import IndustryCard from "@/components/industry/IndustryCard";
import SummaryCard from "@/components/industry/SummaryCard";
import {
  EducationIcon,
  AIIcon,
  Web3Icon,
  FintechIcon,
  HealthcareIcon,
  EcommerceIcon,
} from "@/components/industry/IndustryIcons";

const Index: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Education");
  const [customIndustry, setCustomIndustry] = useState<string>("");

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
  };

  const handleCustomIndustryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomIndustry(e.target.value);
  };

  const handleNextClick = () => {
    const industry =
      selectedIndustry === "Other" ? customIndustry : selectedIndustry;
    console.log("Selected industry:", industry);
    // Here you would typically navigate to the next step or submit the form
  };

  return (
    <div className="w-full min-h-screen bg-[#050D36] flex flex-col">
      <Header />

      <main className="flex flex-col px-[85px] max-md:px-[30px] max-sm:px-5">
        <section className="flex flex-col gap-[15px] mb-11">
          <h1 className="text-[#F9F9F9] text-5xl font-semibold max-md:text-[40px] max-sm:text-[32px]">
            Choose your industry
          </h1>
          <p className="text-[#F9F9F9] text-[26px] font-normal max-md:text-[22px] max-sm:text-lg">
            Select one option to continue
          </p>
        </section>

        <ProgressBar progress={25} className="mb-[72px]" />

        <div className="grid grid-cols-3 gap-9 max-md:grid-cols-2 max-sm:grid-cols-1">
          <IndustryCard
            title="Education"
            icon={<EducationIcon />}
            isSelected={selectedIndustry === "Education"}
            onClick={() => handleIndustrySelect("Education")}
          />

          <IndustryCard
            title="AI"
            icon={<AIIcon />}
            isSelected={selectedIndustry === "AI"}
            onClick={() => handleIndustrySelect("AI")}
          />

          <SummaryCard />

          <IndustryCard
            title="Web3"
            icon={<Web3Icon />}
            isSelected={selectedIndustry === "Web3"}
            onClick={() => handleIndustrySelect("Web3")}
          />

          <IndustryCard
            title="Fintech"
            icon={<FintechIcon />}
            isSelected={selectedIndustry === "Fintech"}
            onClick={() => handleIndustrySelect("Fintech")}
          />

          <IndustryCard
            title="Healthcare"
            icon={<HealthcareIcon />}
            isSelected={selectedIndustry === "Healthcare"}
            onClick={() => handleIndustrySelect("Healthcare")}
          />

          <IndustryCard
            title="Ecommerce"
            icon={<EcommerceIcon />}
            isSelected={selectedIndustry === "Ecommerce"}
            onClick={() => handleIndustrySelect("Ecommerce")}
          />

          <div
            className={`text-white text-[26px] font-semibold leading-[38px] gap-[45px] bg-[linear-gradient(0deg,rgba(145,59,255,0.30),rgba(145,59,255,0.30))] px-[25px] py-8 rounded-[30px] cursor-pointer transition-all duration-200 hover:bg-[linear-gradient(0deg,rgba(145,59,255,0.40),rgba(145,59,255,0.40))] ${selectedIndustry === "Other" ? "border-2 border-[#A35AFF]" : ""}`}
            onClick={() => handleIndustrySelect("Other")}
          >
            Other
          </div>

          <div className="flex flex-col items-start">
            <label
              htmlFor="customIndustry"
              className="text-white text-[22px] mb-3"
            >
              Enter Your Option
            </label>
            <input
              id="customIndustry"
              type="text"
              value={customIndustry}
              onChange={handleCustomIndustryChange}
              className="w-full h-[40px] bg-transparent border-b-[1.5px] border-white text-white text-xl focus:outline-none"
              placeholder="Type your industry here"
              disabled={selectedIndustry !== "Other"}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-[60px]">
          <button
            className="flex items-center justify-center w-[134px] h-[53px] bg-[#913BFF] gap-[5px] rounded-lg hover:bg-[#7B32D5] transition-colors"
            onClick={handleNextClick}
          >
            <span className="text-[#F9F9F9] text-2xl font-semibold">Next</span>
            <svg
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[39px] h-[39px]"
            >
              <path
                d="M10.25 19.5H29.75M29.75 19.5L21.625 11.375M29.75 19.5L21.625 27.625"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
