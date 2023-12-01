import React, { useState, useEffect } from "react";
import '../../stylesheets/main.css';
import resizeImage from "../../utilities/resizeImage";

export default function TapsHero() {
      const heroImgPath = "images/hero-image-22.jpeg";
      const [resizedHero, setResizedHero] = useState(null);

      const resizeHero = async () => {
            try {
                  const resizedHeroImage = await resizeImage(heroImgPath, 1200, 1200);
                  setResizedHero(resizedHeroImage);
            } catch (err) {
                  console.error("Error resizing hero image:", err);
            }
      }

      useEffect(() => {
            resizeHero();
      }, []); // Empty dependency array to run once on mount

      return (
            <img
                  src={resizedHero || heroImgPath}
                  height="88%"
                  alt=""
                  className="container-fluid d-flex justify-content-center hero-image"
            />
      );
}
