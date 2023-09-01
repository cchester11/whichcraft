import React from "react";
import '../stylesheets/main.css';
import NewsletterSubscription from "./NewsletterSubscription";
import NewsLettersHeader from "./NewsLettersHeader";
import NewsLetterNavButtons from "./NewsLetterNavButtons";
import NewsLettersContainer from "./NewsLettersContainer";

export default function Newsletter() {
      return (
            <div>
                  <NewsletterSubscription />
                  <NewsLettersHeader />
                  <NewsLetterNavButtons />
                  <NewsLettersContainer />
            </div>
      )
}