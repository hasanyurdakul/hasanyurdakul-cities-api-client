import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function CreateCity() {
  const API_URL = process.env.REACT_APP_API_URL;
  const CITY_CREATE_URL = `${API_URL}/city/`;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (city) => {
    axios({
      method: "post",
      url: CITY_CREATE_URL,
      data: city,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            City
          </label>
          <input
            id="name"
            {...register("name")}
            className=" border  text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400    "
            placeholder="Enter a city name"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Country
          </label>
          <input
            id="country"
            {...register("country")}
            placeholder="Enter a country name"
            className="   border  text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400       "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="population"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Population
          </label>
          <input
            id="population"
            {...register("population")}
            placeholder="Enter population"
            className="   border  text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400       "
          />
        </div>
        <div className="flex items-start mb-5 ">
          <div className="flex items-center h-5 gap-2 ">
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900  "
            >
              Is your city a capital?
            </label>
            <input
              id="isCapital"
              {...register("isCapital")}
              type="checkbox"
              defaultValue="false"
              className="w-4 h-4 border  rounded    focus:ring-3    bg-gray-700  border-gray-600  focus:ring-blue-600  ring-offset-gray-800  focus:ring-offset-gray-800"
            />
          </div>
        </div>
        <button
          type="submit"
          className=" text-white     hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-blue-600     focus:ring-blue-800"
        >
          <a href="/"> Add City</a>
        </button>
      </form>
    </div>
  );
}

export default CreateCity;
