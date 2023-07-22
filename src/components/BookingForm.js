import React, {useState } from 'react';
import * as Yup from 'yup';
import Button from './Button';

const BookingForm = ({availableTimesProps, dispatch, submitFcProp}) => {
	const [formData, setFormData] = useState({});
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [occasion, setOcassion] = useState('Birthday');
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

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
      await validationSchema.validate({date, time, numberOfGuests, occasion}, { abortEarly: false });
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
		<div className='container'>
			<h3 data-test-id='form-title' className='form-title'>Reserve a table</h3>
			<form className="booking-form" onSubmit={handleSubmit}>
				<div className='input-wrapper'>
					<label htmlFor="res-date" className='form-label paragraph-font'>Choose date</label>
					<input className='form-input' type="date" id="res-date" value={date} onChange={handleDateChange}/>
					{errors.date && <p className='form-input-error'>{errors.date}</p>}
				</div>
				<div className='input-wrapper'>
					<label className='form-label paragraph-font' htmlFor="res-time">Choose time</label>
					<select className="form-select" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
						{availableTimesProps?.map(item => <option>{item}</option>)}
					</select>
					{errors.time && <p className='form-input-error'>{errors.time}</p>}
				</div>
				<div className='input-wrapper'>
					<label htmlFor="guests" className='form-label paragraph-font'>Number of guests</label>
					<input
						className='form-input'
						type="number"
						placeholder="1"
						id="guests"
						value={numberOfGuests}
						onChange={(e) => setNumberOfGuests(e.target.value)}
					/>
					{errors.numberOfGuests && <p className='form-input-error'>{errors.numberOfGuests}</p>}
				</div>
				<div className='input-wrapper'>
					<label htmlFor="occasion" className='form-label paragraph-font'>Occasion</label>
					<select className="form-select" id="occasion" value={occasion} onChange={(e) => setOcassion(e.target.value)}>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					{errors.occasion && <p className='form-input-error'>{errors.occasion}</p>}
				</div>
				<Button type="submit" btnClass='primary-button'>Make Your reservation</Button>
			</form>
		</div>
  )
}

export default BookingForm;