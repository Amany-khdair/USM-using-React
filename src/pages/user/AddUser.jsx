
import { useForm } from 'react-hook-form';

export default function AddUser() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const addUser = (test)=>{
        console.log(test);
    }
  return (
    
    <div className='container'>
        <form onSubmit={handleSubmit(addUser)}>
            <div className="form-floating mb-3">
                <input {...register('name')} type="text" className="form-control" id="floatingInput" placeholder="User Name" />
                <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating mb-3">
                <input {...register('email')} type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input {...register('age')} type="number" className="form-control" id="floatingInput" placeholder="Age" />
                <label htmlFor="floatingInput">User Age</label>
            </div>
            <button className='btn btn-outline-success'>Add User</button>            
        </form>
    </div>

   
  )
}







// import React, { useState } from 'react'

// export default function AddUser() {
//     // //const [userName, setUserName] = useState('');
//     // // const handleChange = (e)=>{
//     // //     setUserName(e.target.value);
//     // // }

//     const [user, setUser] = useState({
//         name:'',
//         email:'',
//         age:0
//     })

//     // // const handleUserNameChange = (e)=>{
//     // //     setUser({name:e.target.value,email:user.email});
//     // // }
//     // // const handleUserEmailchange = (e)=>{
//     // //     setUser({name:user.name,email:e.target.value});
//     // // }
    
//     const handleChange = (e)=>{
//         const {name, value} = e.target;
//        // // setUser({...user});//get old user
//       //  // setUser({name:e.target.value, email:user.email, age:user.age});
//       //  // setUser({name:user.name, email:e.target.value, age:user.age});
//       //  // setUser({name:user.name, email:user.email, age:e.target.value});
//         setUser({...user, [name]:value});
//     }
//     const handleAddUser = (e)=>{
//         e.preventDefault();
//         console.log(user);
//     }

//   return (
    
//   // // <div className='container'>
//   // //     <form onSubmit={handleAddUser}>
//   // //         <div className="form-floating mb-3">
//   // //             <input type="text" value={user.name} onChange={handleUserNameChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
//   // //             <label htmlFor="floatingInput">User Name</label>
//   // //         </div>
//   // //         <div className="form-floating">
//   // //             <input type="email" value={user.email} onChange={handleUserEmailchange} className="form-control" id="floatingEmail" placeholder="Email" />
//   // //             <label htmlFor="floatingPassword">Email</label>
//   // //         </div>
//   // //         <div className="form-floating mb-3">
//   // //             <input type="text" value={user.age} onChange={handleUserAgeChange} className="form-control" id="floatingInput" placeholder="age" />
//   // //             <label htmlFor="floatingInput">User Age</label>
//   // //         </div>
//   // //         <button className='btn btn-outline-success'>Add User</button>            
//   // //     </form>
//   // // </div>
//     <div className='container'>
//         <form onSubmit={handleAddUser}>
//             <div className="form-floating mb-3">
//                 <input name='name' type="text" value={user.name} onChange={handleChange} className="form-control" id="floatingInput" placeholder="User Name" />
//                 <label htmlFor="floatingInput">User Name</label>
//             </div>
//             <div className="form-floating mb-3">
//                 <input name='email' type="email" value={user.email} onChange={handleChange} className="form-control" id="floatingEmail" placeholder="Email" />
//                 <label htmlFor="floatingPassword">Email</label>
//             </div>
//             <div className="form-floating mb-3">
//                 <input name='age' type="text" value={user.age} onChange={handleChange} className="form-control" id="floatingInput" placeholder="Age" />
//                 <label htmlFor="floatingInput">User Age</label>
//             </div>
//             <button className='btn btn-outline-success'>Add User</button>            
//         </form>
//     </div>

   
//   )
// }

