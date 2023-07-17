import React from "react";
import '../stylesheets/main.css';
import NewsLetterNavButtons from "./NewsLetterNavButtons";
import NewsLettersContainer from "./NewsLettersContainer";

export default function Newsletter() {
      return (
            <div>
                  <NewsLetterNavButtons />
                  <NewsLettersContainer />
            </div>
      )
}