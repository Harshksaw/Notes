import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import test from '@playwright/test';



test.describe('Contact', ()=>{

    test('submitting contact form', async({page}) => {
        // render(<ContactForm />);
        
        await page.goto('https://harshksaw.netlify.app/');
        
        // Fill in the form fields
        const nameInput = screen.getByPlaceholderText('Enter your name');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        
        const emailInput = screen.getByPlaceholderText('Enter your Email');
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        
        const messageInput = screen.getByRole('textbox', { name: 'message' });
        fireEvent.change(messageInput, { target: { value: 'Hello, I have a question.' } });
        
        // Submit the form
        const submitButton = screen.getByText('Lets talk');
        fireEvent.click(submitButton);
        
        // Assert that the form is submitted successfully
        // Add your assertions here
    })
    
})