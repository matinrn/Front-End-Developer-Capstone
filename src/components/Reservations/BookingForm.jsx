import React, { useState } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';

import Reserve from './Reserve/Reserve';

function BookingForm(props) {
  // contains the data of the user from the reservation page which will be submitted via server to the database
  const [reservation, setReservation] = useState({guests: 1, date: new Date().toISOString().split('T')[0], time: props.availableTimeSlots.morning[0], ocassion: 'birthday'});

  // handler function in the Parent component
  // time is passed to it from child component
  /*
    passing chooseTime handler function as props to TimeSelector component and then to TimeCapsule component from there on each click on radio button a specific time value is passed to it.
  */
  const chooseTime = (time) => {
    setReservation({...reservation, time: time});
  }

  // handler function in the Parent component
  const chooseGuest = (guests) => {
    setReservation({...reservation, guests: guests});
  }

  // handler function in the Parent component to get date selected from child ccomponent

  const chooseDate = (date) => {
    setReservation({...reservation, date: date});

    props.dispatchTimeslotsOnDateChange(date);

  }    

  const chooseOcassion = (ocassion) => {
    // reservationData['ocassion'] = ocassion;
    setReservation({...reservation, ocassion: ocassion});
  }



  // Form Submission
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Submission happens here
    
    props.submitReservation(reservation);
  }


  const validateReservation = () => {
    if (reservation.time !== '' && 
        reservation.date !== '' && 
        new Date().getTime() - (24 * 60 * 60 * 1000) < new Date(reservation.date).getTime() && 
        reservation.guests !== '' && 
        reservation.ocassion !== '') {
      return true;
    }

    return false;
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <GuestSelector chooseGuest={ chooseGuest } />

        <DateSelecotr chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={reservation.ocassion}/>

        <TimeSelector chooseTime={ chooseTime } availableTimeSlots={props.availableTimeSlots} />

        { // Enable, Disable Submit button on form validation
          validateReservation() ? <Reserve value={0} /> : <Reserve value={1} />
        }
      </form>
    </div>
  );
};

export default BookingForm;