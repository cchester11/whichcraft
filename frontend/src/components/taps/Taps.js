import React from "react";
import '../../stylesheets/main.css';
import TapsHeader from "./TapsHeader";
import TapsList from "./TapsList";

export default function Taps () {
      return (
            <div>
                  <TapsHeader />
                  <TapsList />
            </div>
      )
}