import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

// I think the next step is to do some work here. When the admin's page reloads on workshop, this component will be read by the  browser.
// So I will need to
// 1. Check if localStorage 'adminToken' exist or has a value. If not, then run the useEffect for redirect to login
// 2. If so, then send axios request with adminToken to server.
// 3. Will need to write a server api controller that can accept verification request and send back a true or false
// 4. If false, run the useEffect. If true, set auth.token to true and redirect to outlet
export default async function PrivateRoutes (props) {
      const navigate = useNavigate();
      const adminToken = localStorage.getItem('adminToken')

      let auth = {
            "token": false
      };

      useEffect(() => {
            if(!props.authStatus) {
                  navigate('/admin')
            }
      }, [navigate, props.authStatus]);

      if(adminToken) {
            const response = await axios.post('http://localhost:3001/admin/authstatus');
            // check the data results key. It should return  true or false
            console.log(response.data.tokens)
            // change the value of auth.token accordingly
      }

      if(props.authStatus) {
            auth.token = true
      };

      return (
            auth.token ? <Outlet/> : null
      )
};