// pages/api/book-call.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { name, email, phone, preferredTime } = req.body;

            // Make API call to CallChimp API to book the call
            const response = await axios.post('https://api.callchimp.ai/book-call', {
                name,
                email,
                phone,
                preferredTime
                // Add other necessary parameters as required by the API
            }, {
                headers: {
                    'Authorization': `BlOkwsI3.Kjf3F8ZpdHqK1AHpm5CgzrWxXClGGGSI`, // Replace with your CallChimp API key
                    'Content-Type': 'application/json'
                }
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error booking call:', error);
            res.status(500).json({ error: 'Failed to book call' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
