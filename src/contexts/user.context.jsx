import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeLsitener } from "../utils/firebase.utils";

//as the actual value we want to access ;;;; intail we provide empty
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:() =>null

});


//provider is componetn which wrpas around all components which needed the conrext object/value

export const UserProvider = ({children}) =>{

    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    useEffect(()=> {
        const unsubscribe = onAuthStateChangeLsitener((user)=>{
            console.log("usercontext:",user);
            setCurrentUser(user);
        })

        return unsubscribe;
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
