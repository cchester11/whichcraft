import React from "react";
import '../../stylesheets/main.css';
import BeersHeader from "./BeersHeader";
import BeersHero from "./BeersHero";
import BeersList from "./BeersList";

export default function Beers () {
      return (
            <div>
                  <BeersHero />
                  <BeersHeader />
                  <BeersList />
            </div>
      )
}