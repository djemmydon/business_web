import millify from "millify";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetCryptosDetailsQuery } from "./api/coinsApi";
import "./coin-details.scss";
import HTMLReactParser from "html-react-parser";

const CoinsDeTails = () => {
  const { uuid } = useParams();
  const { data: fetchDetails, isFetching } = useGetCryptosDetailsQuery(uuid);

  console.log(fetchDetails?.data?.coin);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <div className="container-fluid my_header ">
        <div className=" coin_header cointainer px-5 py-6">
          <div
            className=" image_side py-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              className="coin_image"
              src={fetchDetails?.data?.coin?.iconUrl}
              alt=""
            />
          </div>

          <div
            className="text_head"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {fetchDetails?.data?.coin?.name}
            </h1>
          </div>
        </div>
        <div className=" text_side">
          <div className="main_content">
            <h5>{fetchDetails?.data?.coin?.symbol}</h5>

            <div
              className="button_side price_change_rank"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="coin_flex">
                <span>${millify(fetchDetails?.data?.coin?.btcPrice)}</span>
                <p>Price</p>
              </div>

              <div className="coin_flex">
                <span>{millify(fetchDetails?.data?.coin?.change)}</span>
                <p>Change</p>
              </div>

              <div className="coin_flex">
                <span>{fetchDetails?.data?.coin?.rank}</span>
                <p>Rank</p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="descriptions container"
          >
            {HTMLReactParser(fetchDetails?.data?.coin?.description)}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsDeTails;
