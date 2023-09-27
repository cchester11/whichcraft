import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRoutes() {
      const [auth, setAuth] = useState({ token: false });
      const navigate = useNavigate();
      const clientToken = localStorage.getItem("clientToken");

      useEffect(() => {
            const checkAuthStatus = async () => {
                  if (clientToken) {
                        try {
                              const response = await axios.post(
                                    "http://localhost:3001/admin/authstatus",
                                    {
                                          clientToken: clientToken,
                                    }
                              );

                              const status = response.data.status;

                              if(status === true) {
                                    setAuth({ token: true });
                              }
                        } catch (error) {
                              console.error("Error checking auth status: ", error);
                              navigate("/admin");
                        }
                  } else {
                        navigate("/admin");
                  }
            };
      
            checkAuthStatus();
      }, [clientToken, navigate]);

      return auth.token ? <Outlet /> : null;
}
