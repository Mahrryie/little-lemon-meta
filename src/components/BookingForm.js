import React, {useEffect, useState } from 'react';
import * as Yup from 'yup';

const BookingForm = ({availableTimesProps, dispatch, submitFcProp}) => {
	const [formData, setFormData] = useState({});
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [occasion, setOcassion] = useState('');
	const [errors, setErrors] = useState({});

	const handleDateChange = (e) => {
		const selectedDate = e.target.value;
		setDate(selectedDate);
		dispatch({type: 'UPDATE_TIMES', date: selectedDate})
	}

	const validationSchema = Yup.object().shape({
		date: Yup.date().required('Please choose a date'),
		time: Yup.string().required('Please choose a time'),
		numberOfGuests: Yup.number()
			.typeError('Please enter a valid number')
			.min(1, 'Number of guests must be at least 1')
			.required('Please enter the number of guests'),
		occasion: Yup.string().required('Please select an occasion'),
	});

	useEffect(() => {
		console.log(date)
  });

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
      await validationSchema.validate({date, time, numberOfGuests}, { abortEarly: false });
      // Validation succeeded, proceed with form submission
      console.log('Form submitted:', {date, time, numberOfGuests});
			submitFcProp(date);
    } catch (validationErrors) {
      // Validation failed, update the errors state
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
	}

  return (
		<>
			<h3 data-test-id='form-title'>Reserve a table</h3>
			<form className="booking-form" onSubmit={handleSubmit}>
				<label htmlFor="res-date">Choose date</label>
				<input type="date" id="res-date" value={date} onChange={handleDateChange}/>
				{errors.date && <p>{errors.date}</p>}
				<label htmlFor="res-time">Choose time</label>
				<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
					{availableTimesProps?.map(item => <option>{item}</option>)}
				</select>
				{errors.time && <p>{errors.time}</p>}
				<label htmlFor="guests">Number of guests</label>
				<input type="number" placeholder="1" id="guests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}/>
				{errors.numberOfGuests && <p>{errors.numberOfGuests}</p>}
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