import React from "react";
import '../stylesheets/main.css';

export default function NewsletterSubscription() {
      return (
            <div id="mc_embed_shell">
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                        <style type="text/css">
                        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                        </style>
                        <div id="mc_embed_signup">
                              <form action="https://WhichCraftBeerStore.us3.list-manage.com/subscribe/post?u=95437aa3de50f93eeb7f90adc&amp;id=38b77e0567&amp;f_id=00dac2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                                    <div id="mc_embed_signup_scroll"><h2>Subscribe To Our Newsletter</h2>
                                          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                                          <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" /><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
                                          <div id="mce-responses" class="clear">
                                                <div class="response" id="mce-error-response" style="display: none;"></div>
                                                <div class="response" id="mce-success-response" style="display: none;"></div>
                                          </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_95437aa3de50f93eeb7f90adc_38b77e0567" tabindex="-1" value="" /></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" /></div>
                                    </div>
                              </form>
                        </div>
                        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js">
                        </script>
            </div>
      )
}