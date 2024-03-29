import { useEffect, useState } from "react";
import Layoutauth from "../../components/auth/layoutauth";
import dynamic from "next/dynamic";


const Container = dynamic(() => import("../../components/auth/layoutForm"));

const Button = dynamic(() => import("@mui/joy/Button"), {
  ssr: false,
});
const Warnin = dynamic(() => import('@heroicons/react/outline/ExclamationCircleIcon'), {
  ssr: false,
});

const EyeIcon = dynamic(() => import("@heroicons/react/solid/EyeIcon"), {
  ssr: false,
});

const CheckIcon = dynamic(() => import("@heroicons/react/solid/CheckIcon"), {
  ssr: false,
});

const TextField = dynamic(() => import("@mui/joy/TextField"), {
  ssr: false,
});



const Alert = dynamic(() => import("@mui/joy/Alert"), {
  ssr: false,
});

const CircularProgress = dynamic(() => import('../../Loding/Loding.js'));


export default function Signin() {
  // _  أدارة الراوتر للمتصفح

  //  State Start
  let [email, setEmail] = useState("");
  let [password, setpassword] = useState("");
  let [error, setError] = useState({ password: false, email: false});
  let [errorAlert, setErrorAlert] = useState(false);
  let [eyeicon, setEyeicone] = useState(false);
  let [loding, setLoding] = useState(false);

  // States END
let ckesValusDown = (value ,l)=> setError((e)=>{

  if(l > 0){
  return {...e , [value]:false}
  }
  return {...e , [value]: value === 'email' ? 'يجب أدخال البريد الألكتروني':'يجب أدخال كلمة مرور '}
});


useEffect(()=>{
let doSmthing = setTimeout(()=>{
return setErrorAlert(false)
},300000)

return ()=> clearTimeout(doSmthing) 
},[setErrorAlert , errorAlert])


  let S_ = async (e) => {
    e.preventDefault();
    if(error.email || error.password)return 
    if (password.length <= 0 || email.length <= 0)
    return setError({
      password: password.length <= 0 ? "يجب أدخال كلمة مرور" : false,
      email: email.length <= 0 ? 'يجب أدخال أسم المستخدم ' : false,
    });
    setError({ password: false, email: false });

    let opiton = {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: "/",
    };

    setLoding(true);
    const roter = (await import("next/router")).default;
    const signin = (await import("next-auth/react")).signIn("credentials",opiton);

    signin.then((res) => {
        if (!res.ok) {
          setErrorAlert("البيانات خاطئة");
          return setLoding(false);
        }
        if (res.ok) {
          setErrorAlert("جاري تحويلك");
          setLoding(false);
          return roter.push("/");
        }
      })
      .catch(() => {
        setLoding(false);
        return setErrorAlert("البيانات خاطئة");
      });
  };

  let valuWitheay = (e) => setpassword(e.target.value);
  let textShow = () => setEyeicone((eye) => !eye);
  const handleMouseDownPassword = (e) => e.preventDefault();

  return (


        <Container rouls={"before:shadow-[rgba(234,179,1,1)_0px_1.5rem,rgba(234,179,1,0.80)_0px_2rem,rgba(234,179,1,0.70)_0px_2.5rem] after:shadow-[rgb(215_215_215)_0px_-2rem] mt-12"}>
        {loding && <CircularProgress />}
        <form  className="grid gap-[.8rem] items-center w-full grid-rows-[4] mt-9 mb-7  ">
        {errorAlert && (
          <Alert     
            startDecorator={errorAlert === 'جاري تحويلك' ? <CheckIcon className="h-5"/> :  <Warnin className="h-5"/> }
            variant='soft'
            color={errorAlert === 'جاري تحويلك' ? 'success' :'danger'}
            size="sm"        
          >
            <span style={{overflow:'scroll'  , textOverflow:'ellipsis ellipsis' ,whiteSpace:'nowrap', scrollbarColor:'red' }}>{errorAlert}</span>
            
          </Alert>
        )}
          <TextField
            size="sm"
            label=" : أسم المستخدم"
            value={email}
            name="email"
            placeholder="أكتب أسم المستخدم "
            onChange={(e) => setEmail(e.target.value)}
            onBlur={({target})=>ckesValusDown(target.name , target.value.length)}
            error={error?.email}
            helperText={error?.email}
          />

          <TextField
            size="sm"
            label=": كلمة المرور"
            helperText={error?.password && error?.password}
            onChange={(e) => valuWitheay(e)}
            onBlur={({target})=> ckesValusDown(target.name , target.value.length)}
            value={password}
            name="password"
            error={error?.password && true}
            minLength={6}
            startDecorator={
            <EyeIcon
            height={20}
            onMouseDown={handleMouseDownPassword}
            onClick={textShow}
            />
            }
            maxLength={15}
            type={eyeicon ? "password" : "text"}
            placeholder="أكتب كلمة المرور"
          />
          <span className="self-start w-[70%] text-[.8rem] font-[Alexandria] text-white cursor-pointer hover:opacity-80 mb-3 ">
                  هل نسيت كلمة السر ؟
          </span>

          <Button
            size="md"
            variant="soft"
            color="neutral"
            type="submit"
            onClick={(e) => S_(e)}
          >
            تسجيل الدخول
          </Button>
          </form>

      </Container>
   

  );
}




Signin.getLayout = function getLayout(page) {
  return (
    <Layoutauth titel="تسجيل الدخول" isOpen={true}>
      {page}
    </Layoutauth>
  );
};
