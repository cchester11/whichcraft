import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

// I think the next step is to do some work here. When the admin's page reloads on workshop, this component will be read by the  browser.
// So I will need to
// 1. Check if localStorage 'adminToken' exist or has a value. If not, then run the useEffect for redirect to login
// 2. If so, then send axios request with adminToken to server.
// 3. Will need to write a server api controller that can accept verification request and send back a true or false
// 4. If false, run the useEffect. If true, set auth.token to true and redirect to outlet

// ** something goes wrong when pulling  the token from local storage into the file. React doesnt like its data type or form
export default async function PrivateRoutes(props) {
      let tokens = [];
      let auth = {
            "token": false
      };
      const navigate = useNavigate();
      const clientToken = localStorage.getItem('clientToken')

      const response = await axios.post('http://localhost:3001/admin/authstatus', {
                        clientToken: clientToken
                  });

      useEffect(() => {
            if (clientToken) {
                  tokens = response.data.tokens;
                  console.log(tokens)
            } else {
                  navigate('/admin')
            }
      }, [navigate, props.authStatus]);

      if (props.authStatus) {
            auth.token = true
      };

      return (
            auth.token ? <Outlet /> : null
      )
};