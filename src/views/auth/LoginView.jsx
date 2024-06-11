import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import { ErrorIcon } from "../../components/Icons";
import Swal from "sweetalert2";
import classNames from "classnames";
import useAuth from "../../hooks/useAuth";
import AnimatedLayout from "../../layouts/AnimatedLayout";


const LoginView = () => {
  const navigate = useNavigate();


  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { Login } = useAuth();



  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email invalido")
        .required("este campo es obligatorio"),
      password: Yup.string().required("este campo es obligatorio"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setError(null);
      try {
        const resul = await Login(values);
        const { ok, msg } = resul;
        if (!ok) {
          setError(msg);
        } else {
          console.log(msg);
          navigate("/home");
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: msg,
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
        }
      } catch (error) {
        setError("Ocurrio un error inesperado . Por favor, intentalo de nuevo");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
  
   <AnimatedLayout>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <h1 className="text-gray-900 text-center text-2xl py-2">
            Iniciar sesión
          </h1>
          {error && (
            <div className="bg-[#D89D31] w-full px-3 py-2 m-0 rounded-md font-bold">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-3">
            <label
              className="font-normal text-md text-gray-500"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={classNames(
                "w-full p-3 border  text-sm focus:outline-none focus:border-[#079284] focus:ring-[#079284] transition duration-300 outline-0 rounded-3xl ",
                {
                  "border-red-500":
                    formik.touched.email &&
                    formik.errors.email &&
                    !isEmailEditing,
                  "border-gray-300": !(
                    formik.touched.email &&
                    formik.errors.email &&
                    !isEmailEditing
                  ),
                }
              )}
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e), setIsEmailEditing(false);
              }}
              onFocus={() => setIsEmailEditing(true)}
              value={formik.values.email}
            />
            {!isEmailEditing && formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs flex items-center transition duration-200">
                <ErrorIcon className="size-3 mr-1" /> {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="font-normal text-md text-gray-500"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={classNames(
                "w-full p-3 border  text-sm focus:outline-none focus:border-[#079284] focus:ring-[#079284] transition duration-300 outline-0 rounded-3xl ",
                {
                  "border-red-500":
                    formik.touched.password &&
                    formik.errors.password &&
                    !isPasswordEditing,
                  "border-gray-300": !(
                    formik.touched.password &&
                    formik.errors.password &&
                    !isPasswordEditing
                  ),
                }
              )}
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e), setIsPasswordEditing(false);
              }}
              onFocus={() => setIsPasswordEditing(true)}
              value={formik.values.password}
            />
            {!isPasswordEditing &&
            formik.touched.password &&
            formik.errors.password ? (
              <div className="text-red-500 text-xs flex items-center transition duration-200">
                <ErrorIcon className="size-3 mr-1" /> {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex items-center justify-center bg-[#079284] p-3 w-full rounded-3xl text-white text-md cursor-pointer transition duration-300 hover:opacity-75"
          >
            {isSubmitting ? <div id="loading"></div> : "Iniciar sesión"}
          </button>
          <hr className="border-t border-gray-300 my-4" />
          <nav className="text-center">
            <Link to={"/registro"} className="text-[#079284] text-sm">
              ¿No tienes cuenta? Crea una
            </Link>
          </nav>
        </form>
        </AnimatedLayout>
  );
};

export default LoginView;
