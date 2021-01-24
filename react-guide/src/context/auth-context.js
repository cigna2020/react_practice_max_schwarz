import {createContext} from 'react';

const authContext = createContext({
    auth: false,
    login: () => { }
});

export default authContext;