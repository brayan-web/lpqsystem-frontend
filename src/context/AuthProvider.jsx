import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  auth, firestore } from "../firebase/config"
import { doc, setDoc } from "firebase/firestore";
import firebaseErrors from "../utils/firebaseErrors";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const signUp = async(newUser) => {
        const { name, email, password } = newUser;
        try {
          const userCredential = await  createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          await setDoc(doc(firestore, "usuarios", user.uid), {
            nombre: name
          });

          return { ok: true, msg: 'Usuario agregado correctamente' }
        } catch (error) {
            console.log(error)
            let errorMessage;
            if(error.code === 'auth/email-already-in-use'){
                errorMessage = `El correo ${email} ya esta en uso`
            }else{
                errorMessage = firebaseErrors[error.code] || 'Ocurrio un error inesperado'

                }
            return { ok: false, msg: errorMessage }

        }
    }



  return (
    <AuthContext.Provider value={{signUp}}>
        {children}
    </AuthContext.Provider>
  )
}

export {
    AuthProvider
}

export default AuthContext


