

export default async function handler(req, res) {

    const data = {
        apiKey: process.env.MS_AIRTABLE_API_KEY,
        base: process.env.MS_AIRTABLE_CLIENT_BASE
    }

    return res.status(200).json(data)

}