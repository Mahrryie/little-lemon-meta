import { render, screen } from '@testing-library/react';
import Bookingpage from './pages/Bookingpage';

test('Renders the BookingForm heading', () => {
  render(<Bookingpage availableTimesProps={['12:00', '13:00']} dispatch={() => console.log('some console')}/>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})
