import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

export default function User() {
    const {id} = useParams();
    const {isError, isLoading, data} = useFetch(`users/${id}`);

    if (isError){
        return <div className='text-danger text-center mt-5'>{isError}</div>
    }

    if (isLoading){
        return <h2 className="text-center mt-5">Loading, Please Wait...</h2>
    }
    console.log(id);
  return (

    //  {/* {console.log(data.data.name)} */}
    
<div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>

        <div className="text-center">
          <img src={data.data.image} alt={data.data.name} className="rounded-circle mb-4"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              border: "4px solid #198754"
            }}/></div>
       
        <h3 className="text-center mb-3">{data.data.name}</h3>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Age:</strong> {data.data.age}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {data.data.email}
          </li>
        </ul>

        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-success px-4">Edit</button>
        </div>
      </div>
    </div>
  );
}
