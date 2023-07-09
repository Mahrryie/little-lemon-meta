import React, {useState } from 'react';

const BookingForm = ({availableTimesProps, dispatch, submitFcProp}) => {
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [occasion, setOcassion] = useState('');

	const handleDateChange = (e) => {
		const selectedDate = e.target.value;
		setDate(selectedDate);
		dispatch({type: 'UPDATE_TIMES', date: selectedDate})
	}

	const confirmBooking = () => {
		submitFcProp(date)
	}

  return (
		<>
			<h3 data-test-id='form-title'>Reserve a table</h3>
			<form className="booking-form" onSubmit={confirmBooking}>
				<label htmlFor="res-date">Choose date</label>
				<input type="date" id="res-date" value={date} onChange={handleDateChange}/>
				<label htmlFor="res-time">Choose time</label>
				<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
					{availableTimesProps?.map(item => <option>{item}</option>)}
				</select>
				<label htmlFor="guests">Number of guests</label>
				<input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}/>
				<label htmlFor="occasion">Occasion</label>
				<select id="occasion" value={occasion} onChange={(e) => setOcassion(e.target.value)}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input type="submit" value="Make Your reservation"/>
			</form>
		</>
  )
}

export default BookingForm;