import {useState , useRef } from "react";
import Layoutauth from "../../components/auth/layoutauth";
import dynamic from "next/dynamic";


const EyeIcon = dynamic(() => import('@heroicons/react/solid/EyeIcon'), {
  ssr: false,
  loading:()=><div>loding..</div>
});

const ArrowLeftIcon = dynamic(() => import('@heroicons/react/solid/ArrowLeftIcon'), {
  ssr: false,
  loading:()=><div>loding..</div>
});

const Alert = dynamic(() => import('@mui/material/Alert/Alert'), {
  ssr: false,
  loading:()=><div>loding..</div>
});

const CircularProgress = dynamic(() => import('@mui/material/CircularProgress/CircularProgress'), {
  ssr: false,
  loading:()=><div>loding..</div>
});

export default function Signin() {




// _  أدارة الراوتر للمتصفح
  const onR = useRef(null)

  //  State Start
  let [email, setEmail] = useState("");
  let [password, setpassword] = useState("");
  let [error, setError] = useState("");
  let [eyeicon, setEyeicone] = useState(false);
  let [hidine , setHiden] = useState(false)
  let [loding , setLoding] = useState(false)

// States END




  let S_ = async (e) => {
    e.preventDefault();
    let opiton = {
      email: email,
      password: password,
      redirect: false,
      callbackUrl:'/'
    };
    const roter = (await import('next/router')).default
    const signin = (await import('next-auth/react')).signIn("credentials" ,opiton)

    setLoding(true)    
    signin.then((res) => {
        if(!res.ok){
          setError("البيانات خاطئة")
          return setLoding(false)
        }
        if(res.ok){
          setError("جاري تحويلك")
          setLoding(false)
          return roter.push('/') 
        }
      }).catch(()=>{
        setLoding(false)
        return setError("البيانات خاطئة")
      })
  };


let valuWitheay = (e)=>{
setEyeicone(true)
setpassword(e.target.value)
if(e.target.value.length === 0)return setEyeicone(false)
}


let textShow =()=>{

  if(!hidine){
  setHiden(true)
  return onR.current.type = "text"
  }else{
    setHiden(false)
    return onR.current.type = "password"
  } 
}


  
  return (
    <div
      onSubmit={S_}
      className="relative flex flex-col items-center w-4/6 gap-3 p-6 py-10 mt-6 bg-white border-dashed drop-shadow-md font-fontar rounded-xl "
    >
      <ArrowLeftIcon
        onClick={async () => {
          const roter = (await import('next/router')).default
          roter.push("/auth")
        }}
        className="absolute w-5 p-1 text-white rounded-sm cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-bold left-4 top-4"
      />
  {loding && <CircularProgress className="h-[1rem] absolute left-1/2.5 top-1/3 z-10"  />}
      <h6 className="mb-1 text-sm text-center text-black">قم بستجيل الدخول </h6>
      <div className="">
        <input
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          name="email"
          required
          type="email"
          placeholder="أكتب الأيميل"
          className="w-40 p-2 px-2 text-sm text-right text-white border border-gray-100 border-solid rounded-md yasir__foc bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-black placeholder:text-sm placeholder:text-center placeholder:text-white"
        />
      </div>

      <div className="relative flex ">
        <input
          ref={onR}
          onChange={(e)=>valuWitheay(e)}
          value={password}
          name="password"
          required
          minLength={6}
          maxLength={15}
          type="password"
          placeholder="أكتب الباسورد"
          className="w-40 p-2 px-2 text-sm text-right text-white border border-white border-solid rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-black placeholder:text-sm placeholder:text-white placeholder:text-center yasir__foc"
        />
  
        { eyeicon &&      
        <EyeIcon
        id="eye"
        onClick={(e)=> textShow(e)}
        className={`transition absolute left-3 bottom-[37%] h-3 dark:text-black ${hidine && "opacity-50"} ease-in cursor-pointer`}
      />   
    }

      
      </div>

      {error &&     
      <Alert severity="success" icon={false} style={{width:'10rem',padding:'0rem', fontFamily:'Noto Kufi Arabic',fontSize:'.8rem',justifyContent:'center'  }} color="info">
     {error}
    </Alert>
    }


            <div className="flex flex-col mb-4">
              <button
                onClick={(e) => S_(e)}
                className=" mb-[0.6rem] w-40 p-1 px-2 mt-1 bg-clip-text border-sky-500 text-transparent duration-100 border border-solid bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-60 active-lg"
              >
                تسجيل الدخول
              </button>
              <span className=" hover:opacity-60 text-[0.4rem] text-black  text-center cursor-pointer">
                هل نسيت كلمة السر ؟
              </span>
            </div>

        </div>
    
  );
}






Signin.getLayout = function getLayout(page) {
  return <Layoutauth titel='تسجيل الدخول' >
          {page}
         </Layoutauth>
}




