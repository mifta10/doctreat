import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar'

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);

    fetch('https://marvelous-isle-royale-90944.herokuapp.com/addADoctor', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        <h5 className="text-brand">Add a doctor</h5>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Doctors Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input name="file" onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </section>
  );
};

export default AddDoctor;