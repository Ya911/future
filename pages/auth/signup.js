import Layoutauth from "../../components/auth/layoutauth";
import { skemayup } from "../../lib/vaildetor/vaildetor";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from "next/dynamic";



const ArrowLeftIcon = dynamic(() => import('@heroicons/react/solid/ArrowLeftIcon'), {
  ssr: false,
  loading : ()=>''
});
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress/CircularProgress'), {
  ssr: false,
  loading : ()=>''
});



export default function Signup() {
  
  let [looding , setLooding] = useState(false)
  let [errorServer , setErrorServer] = useState(null)


  const { register , handleSubmit,formState: {errors}} = useForm({
    mode:'onTouched',
    resolver: yupResolver(skemayup),
    criteriaMode:'firstError',
    reValidateMode:'onChange'
  });









  const onSubmitHandler = async (data) => {
    const { fristname, email, username, password , image } = data;
    let formdata = new FormData();
    formdata.append("fristname", fristname);
    formdata.append("email", email);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("image", image[0]);

    let url = "http://localhost:3000/api/auth/signup";
    setLooding(true)
    const Router = (await (await import('next/router'))).default
    const axios = (await import('axios')).default
    
    axios
      .post(url, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setLooding(false);
     
        res.data && Router.push("/auth");
      })
      .catch(e=>{
        setLooding(false);
        setErrorServer(e.response.data)})
    };
      
 

  return (

    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="bg-sky-600 gap-2 relative rounded-md p-6 w-[85%] flex flex-col items-center  justify-center font-fontar"
    >
     {looding && <CircularProgress
      className='absolute translate-y-full'
      />}
      <ArrowLeftIcon
        onClick={async () => {
          const Router = (await import('next/router')).default
          return Router.push('/auth')

        }}
        className="absolute w-6 p-1 text-white rounded-sm cursor-pointer hover:opacity-75 text-bold left-4 top-4"
      />

{/* Start Form input  */}
      <div className={'flex flex-col gap-1'}>
      <label htmlFor="fristname" className={'text-right'}>
        {"الأسم الأول"}
      </label>

      <input
        className={`"px-2 rounded-sm py-1 border-[1.0px] border-transparent border-solid text-right" ${errors.fristname  && " border-red-600 "} focus:border-sky-300 focus:border-2`}
        type='text'
        name="fristname"
        id="fristname"
       {...register('fristname')}
      />
      {errors.fristname && (
        <span className={'text-xs text-right text-red-500'}>{errors.fristname.message}</span>
      )}
    </div>

    <div className={'flex flex-col gap-1'}>
      <label htmlFor="username" className={'text-right'}>
        {"أسم المستخدم"}
      </label>

      <input
        className={`${`px-2 rounded-sm py-1 border-[1.0px] border-transparent border-solid text-right`} ${errors.username && "  border-red-600 "}focus:border-sky-300 focus:border-2`}
        type='text'
        name="username"
        id="username"
       {...register('username')}
      />
      {(errors?.username || errorServer?.username) && (
        <span className={'text-xs text-right text-red-500'}>{errors.username?.message || errorServer?.username}</span>
      )}
    </div>

    <div className={'flex flex-col gap-1'}>
      <label htmlFor="email" className={'text-right'}>
        {"البريد الألكتروني"}
      </label>

      <input
               className={`${`px-2 rounded-sm py-1 border-[1.0px] border-transparent border-solid text-right`} ${errors.email&& "  border-red-600 "}focus:border-sky-300 focus:border-2`}
        type='email'
        name="email"
        id="email"
       {...register('email')}
      />
      {(errors.email || errorServer?.email ) && (
        <span className={'text-xs text-right text-red-500'}>{errors.email?.message || errorServer.email}</span>
      )}
    </div>

    <div className={'flex flex-col gap-1'}>
      <label htmlFor='password' className={'text-right'}>
        {"كلمة المرور"}
      </label>

      <input
        className={`${`px-2 rounded-sm py-1 border-[1.0px] border-transparent border-solid text-right`} ${errors.password && "border-red-600 "}focus:border-sky-300 focus:border-2`}
        type='password'
        name="password"
        id="password" 
       {...register('password')}
  
      />
      {errors.password && (
        <span className={'text-xs text-right text-red-500'}>{errors.password.message}</span>
      )}
    </div>


    <label htmlFor='image' className='text-right'>
        {"صورة العرض"}
      </label>
      <input
        {...register('image')}
        type="file"
        name="image"
        id="image"
        accept="image/*"
      />

      { errors.image && (
        <span className="text-xs text-right text-red-500">{errors.image.message}</span>
      )}

      {/* ENF Form input  */}

      <button  type="submit" className="w-[60%] text-xs bg-white p-2 ">
        أرسال
      </button>
    </form>

  );
}




Signup.getLayout = function getLayout(page) {
  return <Layoutauth titel='تسجيل عضوية جديدة' >{page}</Layoutauth>;
};



