import React from "react";
import '../stylesheets/main.css';
import NewsLetterNavButtons from "./NewsLetterNavButtons";
import NewsLettersContainer from "./NewsLettersContainer";
// import TestNewsLetters from "./NewsLettersTestContainer";

export default function Newsletter() {
      return (
            <div>
                  <NewsLetterNavButtons />
                  {/* <TestNewsLetters /> */}
                  <NewsLettersContainer />
            </div>
      )
}