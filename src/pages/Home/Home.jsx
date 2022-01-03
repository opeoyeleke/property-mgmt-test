import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BannerImage } from "../../assets/svg/banner-image.svg";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <section className="banner">
        <div className="wrapper-banner">
          <div className="banner-left">
            <div className="row-one">Create & Manage Properties Easily</div>
            <div className="row-two">
              Makes it easy for you to create properties along with detailed
              information of your choice.
            </div>
            <div className="row-three">
              <Link to="/signup">
                <div className="app-btn wide">Get started for free</div>
              </Link>
            </div>
            <div className="row-four">
              made with ❤️ by{" "}
              <a href="https://github.com/opeoyeleke">@opeoyeleke</a>
            </div>
          </div>

          <div className="banner-right">
            <BannerImage className="banner-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
