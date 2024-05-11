import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

//TODO: TEST NEEDS to be Corrected, as they failed abnormally

  const availableTimeSlots = {morning: ['17:00', '17:30'],afternoon: ['17:00', '17:30'],evening: ['17:00', '17:30']};
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitReservation = jest.fn();


test ('Should Successfully Submit Form with all data Fields Filled', () =>{
    render(<BookingForm 
        submitReservation={submitReservation} 
        availableTimeSlots={availableTimeSlots} 
      />);

    const submitButtom = screen.getByRole('button');
    fireEvent.click(submitButtom);

    expect(submitReservation).toHaveBeenCalledWith({
        date: today,
        guests: 1,
        ocassion: "birthday",
        time: availableTimeSlots.morning[0],
    });
});

