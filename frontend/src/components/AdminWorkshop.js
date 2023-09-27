import React from "react";
import '../stylesheets/main.css';

export default function AdminWorkshop () {
      // onClick function for logout button
      // sends a request to an endpoint on the server that will destroy the server token
      // sends back a response
      // empty local storage
      // redirect to home page 

      return (
            <div>
                  <h1>Admin Workshop</h1>
                  <button className="btn btn-large btn-primary">Logout</button>
            </div>
      )
}