import { useEffect } from 'react';
import $ from 'jquery';

export default function MailchimpForm() {
      useEffect(() => {
            // Mailchimp script
            window.fnames = [];
            window.ftypes = [];
            let fnames = window.fnames;
            let ftypes = window.ftypes;
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
            fnames[2] = 'LNAME';
            ftypes[2] = 'text';
            fnames[3] = 'MMERGE3';
            ftypes[3] = 'text';

            // Initialize Mailchimp
            const $mcj = $.noConflict(true);
            console.log($mcj)
      }, []);

      return null;
};