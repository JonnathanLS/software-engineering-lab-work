import { User } from '../model-interfaces/user';

export const ErrorMessage = {
    authorized: "Authorized User",
    nonexistent: "Nonexistent User",
    unauthorized: "Unauthorized User"
}

export const mock_api_backend = {
    authenticate: (user: User): Promise<string> => {
        return new Promise( (resolve, reject) => { 
            if (user.id !== "ABC123456") reject(new Error(ErrorMessage.nonexistent))
            if (user.password !== "***") reject(new EvalError(ErrorMessage.unauthorized));
            resolve("TOKEN");
        });
    }
}