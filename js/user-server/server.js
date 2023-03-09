import { string } from "joi";

const usersInLocaleStorage = [
    {
        name: 'Vasja',
        age: 22,
        isFriend: true
    },
    {
        name: 'Boris',
        age: 31,
        isFriend: false
    },
    {
        name: 'Lena',
        age: 25,
        isFriend: true
    }
];

const setUsers = (firstUsers) => {
    localStorage.setItem('USERS', JSON.stringify(firstUsers));
}

setUsers(usersInLocaleStorage);
//====================================================================================//

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
    static #_404_RESPONSE = { ok: false, status: 404 };

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
                        return Promise.resolve(stringify(UserServer.#_404_RESPONSE));
                }
            
            case 'POST':
                switch (url) {
                    case UserServer.USERS_URL:
                        const newUser = json(options.body)

                        if (!newUser) {
                            return Promise.reject(stringify({ message: 'Body in User is incorrect. Try to change!' }));
                        }

                        if (!newUser.name || !newUser.age) {
                            return Promise.reject(stringify({ message: 'Data in body of User is incorrect. Try to change!' }));
                        }

                        if (this.users.some((user) => user.name.toLowerCase() === newUser.name.toLowerCase())) {
                            return Promise.reject(stringify({ message: 'Sorry, this name is already exist' }));
                        }

                        return new Promise((resolve) => {
                            callWithRandomDelay(() => {
                                localStorage.setItem(UserServer.#USERS_KEY, stringify([...this.users, newUser]))
                            });
                        });
                
                    default:
                        return Promise.resolve(stringify(UserServer.#_404_RESPONSE))
                }
            
            // case 'PUT':

            //     break;
            
            // case 'DELETE':

            //     break;
            
            default:
                return Promise.reject(`${options.method} is incorrect`)
        }
    }
}

export { UserServer, json, stringify };

//========================================================================================//
const server = new UserServer();

server.fetch(UserServer.USERS_URL, { method: 'POST', body: {name: 'Gir', age: 40, isFriend: true} })
    .then((response) => {
        const res = json(response);
        if (!res.ok && res.status === 404) {
            throw new Error({ wtf: '404. Page not found' });
        }
        console.log(json(response));
    })
    .catch(error => {
        console.log(typeof error === string ? json(error.message) : error.wtf);
    });

