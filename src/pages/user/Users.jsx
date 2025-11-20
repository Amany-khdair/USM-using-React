import axios from "axios";
import React, { useEffect, useState } from "react";
import "./users.css";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const getUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      //console.log(response);
      setUsers(response.data.users);
    } catch (err) {
      //console.log(err.message);
      setIsError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <h2>Wait ....</h2>;
  }

  if (isError) {
    return <div className="text-danger">{isError}</div>;
  }
  return (
    <>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle text-center">
            <thead>
              <tr>
                <th className="col-2">Name</th>
                <th className="col-1">Age</th>
                <th className="col-3">Email</th>
                <th className="col-3">Image</th>
                <th className="col-2">Action</th>
              </tr>
            </thead>
            <tbody className="user-data">
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.imageUrl} width="150px" />
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
