import React from "react";
import '../stylesheets/main.css';
import Nav from "./Nav";
import Newsletter from "./NewsLetter";
import Beers from "./Beers";
import Footer from "./Footer";

export default function Main() {
      return (
            <div>
                  < Nav />
                  < Beers />
                  < Newsletter />
                  < Footer />
            </div>
      )
}