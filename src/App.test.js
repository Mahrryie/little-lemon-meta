import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import Main from "./components/Main";
import { initializeTimes } from './components/Main';
import { fetchAPI } from './api/api';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

// Mock the fetchAPI function to control its behavior during testing
jest.mock('./api/api', () => ({
  fetchAPI: jest.fn(),
}));

// Helper function to set the mock implementation of fetchAPI
const setMockFetchAPI = (mockedResult) => {
  fetchAPI.mockImplementation(() => mockedResult);
};

describe('Main Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize times correctly', () => {
    // Define the expected result for the mocked fetchAPI call
    const mockedResult = ['17:00', '17:30', '18:00', '19:00', '20:30'];

    // Set the mock implementation of fetchAPI
    setMockFetchAPI(mockedResult);

    // Call the initializeTimes function
    const result = initializeTimes();

    // Expect the result to be equal to the mocked result from fetchAPI
    expect(result).toEqual(mockedResult);
  });

  test('should handle empty result from fetchAPI', () => {
    // Define the expected result for the mocked fetchAPI call
    const mockedResult = [];

    // Set the mock implementation of fetchAPI
    setMockFetchAPI(mockedResult);

    // Call the initializeTimes function
    const result = initializeTimes();

    // Expect the result to be an empty array
    expect(result).toEqual(mockedResult);
  });
});