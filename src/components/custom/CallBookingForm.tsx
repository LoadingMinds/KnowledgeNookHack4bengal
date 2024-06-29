"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CallBookingForm: React.FC = () => {
    const router = useRouter(); // Call useRouter at the top level

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [preferredTime, setPreferredTime] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/book-call', {
                name,
                email,
                phone,
                preferredTime
            });
            setMessage('Call booked successfully!');
            console.log(response.data); 
        } catch (error) {
            console.error('Error booking call:', error);
            setMessage('Failed to book call. Please try again.');
        }
    };

    useEffect(() => {
        if (!router) {
            return; // Exit early if router is not available
        }
        // Perform any additional setup that relies on router
    }, [router]);

    return (
        <div>
            <h2>Book a Call</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label><br />
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

                <label htmlFor="phone">Phone Number:</label><br />
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br /><br />

                <label htmlFor="preferredTime">Preferred Time:</label><br />
                <input type="datetime-local" id="preferredTime" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} required /><br /><br />

                <button type="submit">Submit</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default CallBookingForm;
