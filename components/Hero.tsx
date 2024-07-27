import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="">
        <Image
          src="/camp.svg"
          alt="campsvg"
          width={50}
          height={50}
          className=""
        />

        <h1 className="">Putuk Truno Camp Area</h1>

        <p className="">
          {" "}
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div>
          <div>
            {Array(5)
              .fill(1)
              .map((index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  key={index}
                />
              ))}
          </div>
          <p>
            198k<span>Excellent Reviews</span>
          </p>
        </div>

        <div>
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <p>Distance</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p>Aguas Calientes</p>
          </div>

          <div>
            <div>
              <p>Distance</p>
              <p>173.28 mi</p>
            </div>
            <div>
              <p>Elevation</p>
              <p>2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
