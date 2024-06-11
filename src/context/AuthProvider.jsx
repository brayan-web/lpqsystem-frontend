import { createContext, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {  auth, firestore } from "../firebase/config"
import { doc, setDoc } from "firebase/firestore";
import firebaseErrors from "../utils/firebaseErrors";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

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

    const logOut = async() => {
        await signOut(auth);
        setUser(null);
        navigate('/', { replace: true })
    }

const Login = async(user) => {
        const { email, password } = user;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        navigate('/home', { replace: true })

          return { ok: true, msg: 'Inicio exitoso' }

        } catch (error) {
            console.log(error)
           let errorMessage = firebaseErrors[error.code] || 'Ocurrio un error inesperado';
           return { ok: false, msg: errorMessage }

            
        }
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false)
    });

    return () => unsubscribe()
}, [])



  return (
    <AuthContext.Provider value={{signUp, Login, user, loading, logOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export {
    AuthProvider
}

export default AuthContext


