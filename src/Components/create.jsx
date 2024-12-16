import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate =useNavigate();

  console.log(name,email,age);

  const handleSubmit =async(e)=>{
    e.preventDefault();
  const addUser = {name,email,age}

  const response= await fetch("http://localhost:5000",{
  method :"POST",
  body:JSON.stringify(addUser),
  headers :{
    "Content-type" : "application/json",
  }


  });

  const result = await response.json();

  if(!response.ok){
    console.log(result.error);
    setError(result.error);
    
  }

  if(response.ok){
    console.log(result)
    setError("");
    setAge(0);
    setEmail("");
    setName("");
    navigate("/all");

  }




  }




  return (
    <div className='container my-2'>
     
      <h2 className='text-center'> Enter the data

      </h2>
      {error && 
      <div class="alert alert-danger" >
      {error}
    </div>
      }
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />

        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>



    </div>
  )
}

export default Create