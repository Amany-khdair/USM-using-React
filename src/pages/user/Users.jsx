//This useFetch is only available for "GET"
import "./users.css";
import useFetch from "../../hooks/useFetch";
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
                <th className="col-1">Age</th>
                <th className="col-3">Email</th>
                <th className="col-3">Image</th>
                <th className="col-2">Action</th>
              </tr>
            </thead>
            <tbody className="user-data">
              {data.users.map((user) => (
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
