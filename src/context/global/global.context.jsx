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

    function login(email, pwd){
        const user = {name: "Cesar ", lastname:"Cuellar"}

        setState((current)=> ({ ...current, user}));
    }

    function logout(){
        setState((current)=>({ ...current, user: null }));
    }

    async function listTodos(){
        const todosFetched = await list();
        if(todosFetched) setTodos(todosFetched);
    }

    return(
        <GlobalContext.Provider value={{ state, login, logout, listTodos, todos, user}}>
            {children}
        </GlobalContext.Provider>
    );
};