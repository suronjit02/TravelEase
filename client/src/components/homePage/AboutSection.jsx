import React from "react";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 sm:my-16 xs:my-12 px-4 sm:px-2 text-center">
      <h2 className="text-3xl sm:text-2xl xs:text-xl font-semibold mb-4">
        About TravelEase
      </h2>

      <p className="text-gray-600 max-w-3xl sm:max-w-2xl xs:max-w-full mx-auto text-base sm:text-sm xs:text-xs">
        TravelEase is a trusted platform for renting vehicles with ease. Whether
        you’re planning a family trip, business travel, or local transport — we
        connect you with verified vehicle owners to ensure a safe and smooth
        journey.{" "}
        <Link to={"/about"} className="text-sky-900 underline">
          view details
        </Link>
      </p>
    </div>
  );
};

export default AboutSection;
