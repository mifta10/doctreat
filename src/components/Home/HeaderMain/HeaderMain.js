import React from 'react';
import HeaderImg from '../../../images/chair.png';

const HeaderMain = () => {
  return (
    
      <main className="row d-flex align-items-center" style={{ height: '600px' }}>
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: '#3A4256' }}>Your New Smile <br />starts here</h1>
          <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ut qui, numquam error nostrum magni!</p>
          <a href="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></a>
        </div>
        <div className="col-md-6">
          <img src={HeaderImg} alt="" className="img-fluid" />
        </div>
      </main>
    
  );
};

export default HeaderMain;