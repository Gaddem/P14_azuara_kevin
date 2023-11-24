import React from "react";
import { Link } from "react-router-dom";

const ListEmployeeScreen = () => {
  return (
    <body>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <table id="employee-table" class="display"> </table>
        <Link to="/">Home</Link>
      </div>
    </body>
  );
};

export default ListEmployeeScreen;
