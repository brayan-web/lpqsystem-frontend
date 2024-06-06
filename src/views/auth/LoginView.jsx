import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();



 


  const onSubmit = (data) => {
    if (!data.email && !data.password) {
      setError('email', { message: 'El E-mail es obligatorio' });
      setError('password', { message: 'Por favor, introduce tu contraseña.' });
      return;
    }
    if (!data.email) {
      setError('email', { message: 'El E-mail es obligatorio' });
      return;
    }
    if (!data.password) {
      setError('password', { message: 'Por favor, introduce tu contraseña.' });
      return;
    }
    console.log("Formulario enviado:", data);
  };

  
  

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
         
      
   

      <h1 className="text-gray-900 text-center text-2xl py-2">
        Iniciar sesión
      </h1>
      <div className="flex flex-col gap-3">
        <label className="font-normal text-md text-gray-500">E-mail</label>
        <input
                

     
          type="email"
          className={`w-full p-3  border text-sm focus:outline-none transition duration-300 outline-0  rounded-3xl
            ${errors.email ? 'border-red-500 focus:border-[#079284] focus:ring-[#079284]' : 'border-gray-300 focus:border-[#079284] focus:ring-[#079284]'}`}
          {...register('email',{
            
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'El E-mail no es valido'
            }
          })}
          autoComplete="email"
    
          />
          { errors.email && <span className="text-red-500 text-xs transition duration-200">{errors.email.message}</span> }
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-normal text-md text-gray-500">contraseña</label>
        <input
         

          type="password"
          className={`w-full p-3  border text-sm focus:outline-none transition duration-300 outline-0  rounded-3xl
            ${errors.password ? 'border-red-500 focus:border-[#079284] focus:ring-[#079284]' : 'border-gray-300 focus:border-[#079284] focus:ring-[#079284]'}`}
          {...register('password',{
           
           minLength: {
            value: 6,
            message: 'La contraseña debe de tener al menos 6 caracteres'
           }
          })}
          autoComplete="current-password"
         
        />
          { errors.password  && <span className="text-red-500 text-xs transition duration-200">{errors.password.message}</span> }

      </div>
      <input
        type="submit"
        className="bg-[#079284] p-3 w-full rounded-3xl text-white text-md cursor-pointer transition duration-300 hover:opacity-75"
        value="Iniciar sesión"
      />
      <hr className="border-t border-gray-300 my-4" />
      <nav className="text-center">
        <Link to={"/registro"} className="text-[#079284] text-sm">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </form>
  );
};

export default LoginView;
