import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle = {
  background: "#F4FDFB",
  height: "100%"
}

const Dashboard = () => {
  const[loggedInUser, setLoggedInUser] = useContext(UserContext)
  const[selectedDate, setSelectedDate] = useState(new Date());
  const[appointments, setAppointments] = useState([])
  const handleDateChange = date => {
    setSelectedDate(date);
  }
  useEffect(()=> {
    fetch('https://marvelous-isle-royale-90944.herokuapp.com/appointmentsByDate',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({date : selectedDate, email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => {
      setAppointments(data);
    })
  }, [selectedDate])
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 col-sm-12 col-12  d-flex justify-content-center mt-5">
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 col-sm-12 col-12 mt-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;