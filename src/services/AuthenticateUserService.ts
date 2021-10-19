import axios from "axios"; 

/*

*receber o codigo via string
*recuperar o acess_token no github
*verificar se o usuario existe no banco de dados
--- Se sim = gera um token
---Se não = cria no db, gera um token
*retornar token com as infos do user 

*/



class AuthenticateUserService{
    async execute(code: string) {
        const url = "https://github.com/login/oauth/acess_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code, 
            },
            headers: {
                "Accept": "application/json"
            }
        })


        return response.data

        
    }

}



export {AuthenticateUserService}