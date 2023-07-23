import Layoutauth from "../../components/auth/layoutauth";
import {skemayup} from "../../lib/vaildetor/vaildetor"
import {  useState } from "react";
import { useForm , Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from "next/dynamic";

const CircularProgress = dynamic(() => import('../../Loding/Loding'));
const Container = dynamic(() => import('../../components/auth/layoutForm'));
const TextField = dynamic(() => import("@mui/joy/TextField"), {
  ssr: false,
});
const Button = dynamic(() => import("@mui/joy/Button"), {
  ssr: false,
});

const Uploud = dynamic(() => import('@heroicons/react/outline/CloudUploadIcon'));



export default function Signup() {
  
  let [looding , setLooding] = useState(false)



  const {control ,handleSubmit ,trigger , setError , formState:{isValid}} = useForm({
    mode:'onChange',
    resolver: yupResolver(skemayup),
    criteriaMode:'firstError',
    reValidateMode:'onChange',
    shouldFocusError: true,
  });








  const onSubmitHandler = async (data, e) => {
    setLooding(true)
    e.preventDefault();
    const { fristname, email, username, password , image } = data;
    let formdata = new FormData();
    formdata.append("fristname", fristname);
    formdata.append("email", email);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("image", image[0]);


  

    const Router = (await import('next/router')).default
    const axios = (await import('axios')).default
    axios
      .post("/api/signup", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setLooding(false)
        return res.data && Router.push("/")
      })
      .catch(e=>{
        setLooding(false);
        let [frist , scend] = Object.keys(e.response.data || {})
        if(frist) setError(frist,{type:'value' , message:e.response.data[frist]})
        if(scend) setError(scend,{type:'value' , message:e.response.data[scend]})
        return 
      })
    };
      


  return (


      <Container rouls={"before:shadow-[rgba(234,179,1,1)_0px_.3rem,rgba(234,179,1,0.80)_0px_.5rem,rgba(234,179,1,0.70)_0px_.9rem] after:shadow-[rgb(215_215_215)_0px_-1.2rem] mt-8"}>

      {looding&& <CircularProgress/>}
      <form onSubmit={handleSubmit(onSubmitHandler)} className="grid gap-[.8rem] items-center w-full grid-rows-[4] ">
      {/* Start Form input  */}
       <Controller
        control={control}
        name="fristname"
        defaultValue=''
        render={({field , fieldState:{error}})=>
         <TextField
          {...field}
          size="sm"
          type='text'
          label=": الأسم الأول"
          required
          placeholder="أكتب أسمك الأول"
          error={error && true}
          helperText={error && error?.message}
        />}
        />

        <Controller
        control={control}
        name="username"
        defaultValue=''
        render={({field , fieldState:{error}})=>
        <TextField
          {...field}
          size="sm"
          label=": أسم المستخدم"
          required
          type='text'
          placeholder="أكتب اسم المستخدم"
          error={error && true}
          helperText={error && error?.message}
        />}
        />

        <Controller
        control={control}
        name="email"
        defaultValue=''
        render={({field , fieldState:{error}})=>
        <TextField
          {...field}
          required
          size="sm"
          label=": البريد الألكتروني"
          type='email'
          placeholder="أكتب البريد الألكتروني"
          error={error && true}
          helperText={error && error?.message}
        />}


        />

        <Controller
        control={control}
        name="password"
        defaultValue=''
        render={({field , fieldState:{error}})=>
        <TextField
          {...field}
          required
          size="sm"
          label=': كلمة المرور'
          type='password'
          placeholder="أكتب كلمة المرور"
          error={error && true}
          helperText={error && error?.message}
        />}
        />

        <Controller
        control={control}
        name="image"
        defaultValue=''
        render={({field:{onChange,value,name ,ref} , fieldState:{error}})=>
        <div className="flex flex-col items-center w-full gap-1">
        <Button 
        variant="contained" 
        component="label"
        sx={{background:'black !important' , border:`${error ? "3px solid red":'none' }`, boxShadow:`${error ? "0px 0px 0px #ff0000bd":'none'}`  , width:'100%', textShadow:'none' , marginTop:'.1rem' , color:'hsl(0deg 0% 84%)' , ":hover":{backgroundColor:'#0000002b !important' , boxShadow:'none' ,opacity:'80%', color :'white !important' }}}
        style={{ fontSize:'0.8rem',fontFamily:'Alexandria',gap:'.2rem'}}
        startDecorator={<Uploud color="#e8eaed" className="h-5"/>}
        name={name}
        ref={ref}
        value={value}
        onChange={(e)=>onChange(e.target.files)}  
        onClick={()=> document.body.onfocus = ()=> setTimeout(()=>{
          trigger("image")
          return document.body.onfocus = null
        },200)}
        >
     {"أختر صوره"}
        <input hidden  accept="image/*"  type="file"/>
       </Button>
       {error && <span className="font-[Alexandria] text-[#d3232f] text-[0.75rem] self-end ">{error.message}</span>}
       {(!error && value) && <span className="font-[Alexandria] text-[white] text-[.4rem] self-end pr-[8%]"> <span className="text-[#eab301]">{value[0]?.name.split('.')[0].substring(0,10)}&nbsp;</span> :  أسم الصورة </span>}
       </div>}
        />



        <Button
        size="md"
        variant='soft'
        color='neutral'
        type='submit'
        sx={{marginBottom:0}}
        disabled={!isValid}
       >تسجيل عضوية        
       </Button>



      </form>
      </Container>


  );
}




Signup.getLayout = function getLayout(page) {
  return <Layoutauth titel='تسجيل عضوية جديدة' isOpen={true} >{page}</Layoutauth>;
};



