import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact Form says "Contact Me"', () => {
    it('inserts text content into the contact form', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact-form')).toHaveTextContent('Contact Me');
    });
})

describe('button text content is "Submit"', () => {
    it('inserts text content into the contact form submit button', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    });
})
