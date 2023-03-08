
const json = (dataString) => {
    try {
        return JSON.parse(dataString); // Проверка получен ли json или нет
    } catch (error) {
        console.error(error);
    }
}

const stringify = (data) => {
    try {
        return JSON.stringify(data);
    } catch (error) {
        console.error(error);
    }
}

const callWithRandomDelay = (callback) => {
    setTimeout(callback, Math.round(Math.random() * 1000))
}

class UserServer {
    static #BASE_URL = 'https://custom-server/api/v1/';
    static #USERS_KEY = 'USERS';
    static USERS_URL = `${UserServer.#BASE_URL}users`;

    get users() {
       return json(localStorage.getItem(UserServer.#USERS_KEY) || '[]');
    }

    set users(newUser) {
        localStorage.getItem(UserServer.#USERS_KEY, stringify(newUser));
    }

    fetch(url, options = {method: 'GET'}) {
        switch (options.method) {
            case 'GET':
                switch (url) {
                    case UserServer.USERS_URL:
                        return new Promise((resolve) => {
                            callWithRandomDelay(() => resolve(stringify(this.users)))
                        });
                
                    default:
                        break;
                }
                break;
            
            // case 'POST':

            //     break;
            
            // case 'PUT':

            //     break;
            
            // case 'DELETE':

            //     break;
            
            default:
                return Promise.reject(`${options.method} is incorrect`)
        }
    }
}

export {UserServer, json, stringify};