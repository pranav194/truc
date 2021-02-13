import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersTable = ({ customers = [], onDelete }) => {
  const tableHeader = [
    "name",
    "username",
    "email",
    "phone",
    "created Date",
    "action",
  ];

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {tableHeader.map((th) => (
            <th key={th} className="text-capitalize">
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, ind) => (
          <tr key={ind}>
            <td>{customer.name}</td>
            <td>{customer.username}</td>
            <td>{customer.email}</td>
            <td>{customer.phone || "NA"}</td>
            <td>{customer.createdAt.toISOString() || "NA"}</td>
            <td>
              <div className="my-auto align-middle">
                <Link to={"/edit/" + customer.id} className="btn btn-link">
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(customer.id)}
                  className="btn btn-link"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {};

export default UsersTable;
