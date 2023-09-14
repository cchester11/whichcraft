import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function PrivateRoutes (props) {
      const navigate = useNavigate();

      useEffect(() => {
            if(!props.authStatus) {
                  navigate('/admin')
            }
      }, [navigate, props.authStatus]);

      let auth = {
            "token": false
      };

      if(props.authStatus) {
            auth.token = true
      };

      return (
            auth.token ? <Outlet/> : null
      )
};