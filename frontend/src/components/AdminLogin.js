import React from "react";
import '../stylesheets/main.css';
import AdminEntry from "./AdminEntry";
import AdminHeader from "./AdminHeader";

export default function AdminLogin(props) {
      return (
            <div>
                  <AdminHeader />
                  <AdminEntry setAuthStatus={props.setAuthStatus} />
            </div>
      )
}