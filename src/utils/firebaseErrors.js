const firebaseErrors = {
    'auth/email-already-in-use' : 'El correo electronico ya esta en uso',
    'auth/invalid-email': 'El correo electronico no es valido',
    'auth/weak-password': 'La contraseña es demasiado debil',
    'auth/too-many-requests': 'Hemos detectado demasiados intentos recientes. Por favor, intenta de nuevo más tarde.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/user-not-found': 'No se ha encontrado ningún usuario con este correo electrónico.',
    'auth/network-request-failed': 'Error de red. Por favor, revisa tu conexión e intenta de nuevo.',
    'auth/invalid-credential': 'Las credenciales proporcionadas no son válidas. Por favor, verifica que la información ingresada sea correcta e inténtalo de nuevo.'
}

export default firebaseErrors;