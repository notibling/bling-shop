// pages/api/createMerchant.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { merchantData } = req.body;

    try {
        const response = await axios.post('https://api.mastercard.com/merchant/onboarding', merchantData, {
            headers: {
                'Authorization': `Bearer ${process.env.MASTERCARD_API_KEY}`, // Asegúrate de establecer tu API Key
                'Content-Type': 'application/json',
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json({ error: error.message });
    }
}
