import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const user = [
        { id: 1, name: 'hugo' },
        { id: 2, name: 'Diego' },
        { id: 1, name: 'Dani' },
    ]
    return response.json(user)
}