import React, {createContext, useState} from "react";
import {list} from "../../services/todos";


const initialState={
    user:null,
    colorDefault:"#00a884"
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children, user}) => {
    const [state, setState] = useState(initialState);
    const [todos, setTodos] = useState();
    const [usuario, setUsuario] = useState(user);

    function login(email, pwd){
        setState((current)=> ({ ...current, user: usuario}));
    }

    function logout(){
        setState((current)=>({ ...current, user: null }));
        setUsuario((current)=> ({ ...current, authState: "signedOut" }));
    }

    async function listTodos(){
        const todosFetched = await list();
        if(todosFetched) setTodos(todosFetched);
    }

    return(
        <GlobalContext.Provider value={{ state, login, logout, listTodos, todos, usuario}}>
            {children}
        </GlobalContext.Provider>
    );
};