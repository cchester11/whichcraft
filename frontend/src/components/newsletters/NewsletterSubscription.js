import React from "react";
import MailchimpForm from "../../utilities/MailchimpForm";
import '../../stylesheets/main.css';

export default function NewsletterSubscription() {
      return (
            <div id="mc_embed_shell" className="border-top border-secondary">
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                        <div id="mc_embed_signup">
                              <form action="https://WhichCrafttapstore.us3.list-manage.com/subscribe/post?u=95437aa3de50f93eeb7f90adc&amp;id=38b77e0567&amp;f_id=00dac2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                    <div id="mc_embed_signup_scroll"><h2>Subscribe To Our Newsletter</h2>
                                          <div className="mc-field-group">
                                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
                                                </label>
                                                <input 
                                                      type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" placeholder="example@gmail.com" 
                                                />
                                                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                          </div>
                                          <div id="mce-responses" className="clear">
                                                <div className="response" id="mce-error-response" style={{display: 'none'}}>

                                                </div>
                                                <div className="response" id="mce-success-response" style={{display: 'none'}}>

                                                </div>
                                          </div>
                                          <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                                                <input 
                                                      type="text" name="b_95437aa3de50f93eeb7f90adc_38b77e0567" tabIndex="-1" defaultValue="" 
                                                />
                                          </div>
                                          <div className="clear">
                                                <input 
                                                      type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" 
                                                />
                                          </div>
                                    </div>
                              </form>
                        </div>
                        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js">
                        </script>
                        <MailchimpForm />
            </div>
      )
}