import React from "react";

const PortfolioCard = ({ image, type }: { image: string; type: string }) => {
  return (
    <div className="group relative" data-aos="fade-up">
      <img src={image} alt={type} />
      {/* <span className="hidden absolute w-full h-full top-0 -left-100 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex"> */}
      <span className="hidden absolute w-full h-full top-0 -left-[100%] bg-secondary-800 text-white z-10 items-center justify-center group-hover:flex group-hover:left-0 group-hover:opacity-85 group-hover:transition-all group-hover:ease-in-out group-hover:delay-1000 ">
        {type}
      </span>
    </div>
  );
};

export default PortfolioCard;
