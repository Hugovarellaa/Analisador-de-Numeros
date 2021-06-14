import { NextApiRequest, NextApiResponse } from 'next'

//Seriço de atenticação 
//JWT (Storage) 
//Next Auth (Social)
//Cognito , Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
    const user = [
        { id: 1, name: 'hugo' },
        { id: 2, name: 'Diego' },
        { id: 1, name: 'Dani' },
    ]
    return response.json(user)
}