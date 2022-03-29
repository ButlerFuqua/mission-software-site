// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()

import Airtable from 'airtable';
var base = new Airtable({ apiKey: process.env.MS_AIRTABLE_API_KEY }).base(process.env.MS_AIRTABLE_CLIENT_BASE);

export default async function handler(req, res) {

    try {
        const pledges = await base('Pledge').select()
        return res.status(200).json({ pledges })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}