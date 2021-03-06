import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    console.log(doctor.image.img);
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image ? <img style={{ height: '200px' }} src={`data:image/png;base64,${doctor.image.img}`} /> :
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://marvelous-isle-royale-90944.herokuapp.com/${doctor.img}`} alt="" />}
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
        </div>
    );
};

export default Doctor;