import React from "react";
import { PersonStanding } from "lucide-react";

function CityCard({ data }) {
  return (
    <div className="flex flex-wrap  gap-2">
      {data &&
        data.map((city, index) => (
          <div key={index}>
            <div className="relative flex justify-between flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border border-black border rounded-xl min-w-48 max-h-48 min-h-48 max-w-48">
              <div className="p-6 flex flex-col justify-evenly ">
                <h5 className="block  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {city.name}
                </h5>

                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {city.country}
                </p>
                {city.isCapital && (
                  <p className="text-green-700 font-bold"> Capital </p>
                )}
              </div>
              <div className="flex p-6 pt-0">
                <PersonStanding />
                <span className="ml-2 font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {city.population}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CityCard;
