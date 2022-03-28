// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()

import Airtable from 'airtable';
var base = new Airtable({ apiKey: process.env.MS_AIRTABLE_API_KEY }).base(process.env.MS_AIRTABLE_CLIENT_BASE);

export default async function handler(req, res) {

    const {
        email: Email,
        amount: Amount,
        oneTime: OneTime,
        monthly: Monthly,
    } = req.body

    try {
        await base('Pledge').create([
            {
                "fields": {
                    Email,
                    Amount,
                    OneTime: String(OneTime),
                    Monthly: String(Monthly)
                }
            },
        ]);
        return res.status(200).json({ message: `Pledge submission added.` })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}