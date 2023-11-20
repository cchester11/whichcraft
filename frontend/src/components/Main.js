import React from "react";
import '../stylesheets/main.css';
import Nav from "./Nav";
import Newsletter from "./newsletters/NewsLetter";
import Taps from "./taps/Taps";
import Footer from "./Footer";

export default function Main() {
      return (
            <div>
                  < Nav />
                  < Taps />
                  < Newsletter />
                  < Footer />
            </div>
      )
}