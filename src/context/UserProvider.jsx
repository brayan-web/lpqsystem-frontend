import { createContext, useEffect, useState } from "react";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
const UserContext = createContext();

const UserProvider = ({children}) => {

    const [ userData, setUserData ] = useState(null);
    const getDataUser = async() => {
        const db = getFirestore();
        try{
            const currentUser = auth.currentUser;
            if(currentUser){
                const userDocRef = doc(db, 'usuarios', currentUser.uid);
                const userDocSnapshot = await getDoc(userDocRef);
                if(userDocSnapshot.exists()){
                    const userData = userDocSnapshot.data();
                    setUserData(userData)
                }else{
                    console.error('El documento del usuario no existe')
                    
                }
            }else{
                console.log('No hay usuario autenticado');
                
            }
        }catch(error){
                console.error('Error al obtener los datos del usuario en firestore', error);
              
        }
        
    }
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            if(currentUser){
                 await getDataUser();
             
            }else{
                setUserData(null)
            }
      });

      return () => unsubscribe();
    }, [])


        return(
            <UserContext.Provider value={{userData}}>
                {children}
            </UserContext.Provider>
        )
}

export {
    UserProvider
}

export default UserContext;