import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AvergeRating from './AvergeRating';

const Cards = () => {
  let [stations, setStation] = useState([]);
  let [filterKey, setFilterKey] = useState("");
  let filterStations = stations.filter((station) =>
    station.station_name.toLowerCase().includes(filterKey.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://ecocharge-backend-3ms8.onrender.com/api/stations/AllStations").then((res) => {
      setStation(res.data.data);
    });
  }, []);

  if (filterStations.length > 0 || stations.length > 0) {
    return (
      <section className="py-5 text-center">
        <h2 className="card-h pt-3">Electric Stations</h2>
        <p className="lead card-p text-dark ">
          You can find your electronic vehicle charging station in Egypt here{" "}
          <i className="fa-solid fa-charging-station"></i>
        </p>
        <div className="find-location">
          <input
            type="text"
            placeholder="Find your station..."
            onChange={(e) => setFilterKey(e.target.value)}
          ></input>
        </div>
        <div className="container text-left pt-5">
          <div className="row">
            {(filterKey ? filterStations : stations).map((station) => (
              <div className="col-md-4  p-3 pb-4 rounded-3" key={station._id}>
                <div className="card-imge ">
                  <img src={station.photo} alt=""></img>
                </div>
                <Link to={`StationDetails/${station._id}`}>
                  <div className="card-content p-3 d-flex justify-content-between align-items-center">
                    <div className="text-center">
                      <h5 className="stationName pt-1 d-block text-center mt-1">
                        {station.station_name}
                      </h5>
                      <div className="text-center mb-2 rating">
                        <AvergeRating stationId={station._id} />
                      </div>
                      <p className="pt-1 text-dark text-center">
                        {station.address}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
};

export default Cards;
