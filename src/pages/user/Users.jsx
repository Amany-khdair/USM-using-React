//This useFetch is only available for "GET"
import "./users.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
export default function Users() {
  const {isError, isLoading, data} = useFetch('users');
  
  if (isLoading) {
    return <h2>Loading, Please Wait ....</h2>;
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
                <th className="col-2">Action</th>
              </tr>
            </thead>
            <tbody className="user-data">
              {data.users.map((user) => (
                <tr key={user.id} style={{ cursor: "pointer" }} onClick={() => window.location.href = `/users/${user.id}`}>
                  <td>{user.name}</td>                   
                  <td>
                    <Link className="btn btn-outline-success me-2" to={`/users/${user.id}`} onClick={(e) => e.stopPropagation()}>Details</Link>
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
