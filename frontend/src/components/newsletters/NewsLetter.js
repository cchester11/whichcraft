import React from "react";
import '../../stylesheets/main.css';
import NewsLettersHeader from "./NewsLettersHeader";
import NewsLettersContainer from "./NewsLettersContainer";

export default function Newsletter() {
      return (
            <div>
                  <NewsLettersHeader />
                  <NewsLettersContainer />
            </div>
      )
}