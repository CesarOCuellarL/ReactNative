import React, {createContext, useState} from "react";
import {list} from "../../services/Books";


const initialState={
    user:null,
    colorDefault:"#00a884"
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children, user}) => {
    const [state, setState] = useState(initialState);
    const [books, setBooks] = useState();
    const [usuario, setUsuario] = useState(user);

    function login(email, pwd){
        setState((current)=> ({ ...current, user: usuario}));
    }

    function logout(){
        //setState((current)=>({ ...current, user: null }));
        setUsuario((current)=> ({ ...current, authState: "signedOut" }));
        console.log(usuario);
    }

    async function listBooks(){
        const booksFetched = await list();
        if(booksFetched) setBooks(booksFetched);
    }

    return(
        <GlobalContext.Provider value={{ state, login, logout, listBooks, books, usuario}}>
            {children}
        </GlobalContext.Provider>
    );
};