import React from "react";

interface PageCoverProps {
  img: string; // Type for the image URL
  title: string; // Type for the title
}

const PageCover: React.FC<PageCoverProps> = ({ img, title }) => {
  return (
    <div>
      <div
        className="carousel-item w-full rounded-xl bg-cover relative text-white"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${img})`,
        }}
      >
        <div className="ml-5 md:ml-14">
          <h2 className="text-3xl font-Cinzel font-semibold py-20">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
