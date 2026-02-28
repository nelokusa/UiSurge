// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UiSurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/UiSurge/i);
    expect(titleElement).toBeInTheDocument();
});
