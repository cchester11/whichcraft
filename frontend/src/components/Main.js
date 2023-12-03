import React from "react";
import '../stylesheets/main.css';
import Nav from "./Nav";
import Newsletter from "./newsletters/NewsLetter";
import NewsletterSubscription from "./newsletters/NewsletterSubscription";
import Taps from "./taps/Taps";
import Footer from "./Footer";
import TapsHero from "./taps/TapsHero";

export default function Main() {
      return (
            <div>
                  < Nav />
                  <div className="hero-container-master">
                        < TapsHero />
                  </div>
                  < Taps />
                  < Newsletter />
                  < NewsletterSubscription />
                  < Footer />
            </div>
      )
}