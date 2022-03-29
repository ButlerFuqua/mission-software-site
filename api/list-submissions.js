// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()

import axios from 'axios'


export default async function handler(req, res) {

    try {
        const response = await axios.get(`https://api.airtable.com/v0/${process.env.MS_AIRTABLE_CLIENT_BASE}/Pledge?maxRecords=500&view=Grid%20view`, {
            headers: {
                Authorization: `Bearer ${process.env.MS_AIRTABLE_API_KEY}`
            }
        })

        return res.status(200).json({
            pledges:
            {
                monthly: response.data.records.filter(rec => rec.fields.Monthly === 'true').map(rec => (rec.fields)),
                oneTime: response.data.records.filter(rec => rec.fields.OneTime === 'true').map(rec => (rec.fields))
            }
        })

    } catch (error) {
        console.log(error.response.data)
        return res.status(500).json({ error })
    }

}