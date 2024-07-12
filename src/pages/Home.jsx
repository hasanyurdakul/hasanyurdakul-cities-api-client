import React, { useEffect, useState } from "react";
import axios from "axios";
import CityCard from "./../components/CityCard";
import AddButton from "./../components/AddButton";
import { consoleArt } from "../lib/contants";

function Home() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const fetchCityData = async () => {
    try {
      const response = await axios.get(`${API_URL}/city/`);
      setData(response.data.city);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCityData();
  }, []);
  console.log(consoleArt);
  return (
    <div className="flex flex-col justify-center items-center mx-auto p-5">
      <AddButton />
      <CityCard data={data} />
    </div>
  );
}

export default Home;
