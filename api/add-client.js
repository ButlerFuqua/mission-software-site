// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()

import Airtable from 'airtable';
var base = new Airtable({ apiKey: process.env.MS_AIRTABLE_API_KEY }).base(process.env.MS_AIRTABLE_CLIENT_BASE);

export default async function handler(req, res) {

    const {
        orgName: OrgName,
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        aboutOrg: AboutOrg,
        needs: Needs
    } = req.body


    try {
        await base('Client').create([
            {
                "fields": { OrgName, FirstName, LastName, Email, AboutOrg, Needs }
            },
        ]);
        return res.status(200).json({ message: `Client submission added.` })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}