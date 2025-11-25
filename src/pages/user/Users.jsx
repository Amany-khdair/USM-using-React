//This useFetch is only available for "GET"
import "./users.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bounce, Slide, toast } from "react-toastify";
import { useState } from "react";
//import { useState } from "react";
export default function Users() {
  const [page, setPage] = useState(1);
  const {isError, isLoading, data} = useFetch(`users?limit=5&skip=${(page-1)*5}`, [page]);  
  //const [serverError, setServerError] = useState();
  const deleteUser = async (id)=>{
    //alert(id);
    try{
        const response = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
        console.log(response);
        if (response.status == 200){
            toast.success('User Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
                });
        }
    }catch(e){
        console.log(e);
        toast.error('Failed to delete user', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }
  if (isLoading) {
    return <h2>Loading, Please Wait ....</h2>;
  }

  if (isError) {
    return <div className="text-danger">{isError}</div>;
  }

  const numberOfPages = Math.ceil(data.totalCount / 5);
  console.log(numberOfPages);

  const pagesItems = [];
  for(let i=1;i<numberOfPages;i++){
    pagesItems.push(
    <li className="page-item">
      <button className="page-link" onClick={()=>setPage(i)}>{i}</button>
    </li>
    );
  }
  return (
    <>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle text-center">
            <thead>
              <tr>
                <th className="col-2">Name</th>   
                <th className="col-3">Image</th>
                <th className="col-2">Action</th>
              </tr>
            </thead>
            <tbody className="user-data">
              {data.users.map((user) => (
                <tr key={user.id} style={{ cursor: "pointer" }} onClick={() => window.location.href = `/users/${user.id}`}>
                  <td>{user.name}</td>      
                 <td>
                  <img 
                    src={user.imageUrl} 
                    className="img-fluid rounded shadow-sm"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }} 
                  />
                </td>

                  <td>
                    <Link className="btn btn-outline-success me-2" to={`/users/${user.id}`} onClick={(e) => e.stopPropagation()}>Details</Link>
                    <button onClick={(e)=>{ e.stopPropagation();deleteUser(user.id);}} className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="pagination">
              <li className="page-item">
                <button className="page-link" disabled={page==1} onClick={()=>setPage(page-1)}>Previous</button>
              </li>
              {pagesItems}
              <li className="page-item">
                <button className="page-link" disabled={page==numberOfPages} onClick={()=>setPage(page+1)}>Next</button>
              </li>
        </ul>
      </div>
    </>
  );
}
