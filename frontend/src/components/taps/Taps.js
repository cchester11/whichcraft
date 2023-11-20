import React from "react";
import '../../stylesheets/main.css';
import TapsHeader from "./TapsHeader";
import TapsHero from "./TapsHero";
import TapsList from "./TapsList";

export default function Taps () {
      return (
            <div>
                  <TapsHero />
                  <TapsHeader />
                  <TapsList />
            </div>
      )
}