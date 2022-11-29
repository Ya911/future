import PerntSidbar from "../components/index/pernt";
import { useForm , Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MenuItem = dynamic(() => import("@mui/material/MenuItem/MenuItem"), {
  ssr: false,
  loading : ()=>''
});
const Button = dynamic(() => import("@mui/material/Button/Button"), {
  ssr: false,
  loading : ()=>''
});

const Alert = dynamic(() => import("@mui/material/Alert/Alert"), {
  ssr: false,
  loading : ()=>''
});


const TextField = dynamic(() => import("@mui/material/TextField/TextField"), {
  ssr: false,
  loading : ()=>''
});

function Bot() {
  const {
    control,
    setError,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors,isValid },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const [isConcect , setisConcect]=useState(false)



  useEffect(()=>{
    if(errors.server_error || isConcect){
    setTimeout(()=>{
      reset()
      setisConcect(false)
      clearErrors('server_error')
     },[2000])
    }
    },[errors.server_error,clearErrors,reset,errors , isConcect])


  let Submit = async (data) => {



    try {

      let postToChech = `https://api.telegram.org/bot${data.api_Token}/getMe`
      let send0 = await fetch(postToChech, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
      if(!send0.ok){
        throw {message : "التوكين غير صالح"}
      }
      let send1 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/bot`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!send1.ok)throw (await send1.json());
      return setisConcect(true)

    } catch ({message}) {
      if(message === "Failed to fetch" || message === "التوكين غير صالح") return setError("api_Token", { type: "server", message:  "التوكين غير صحيح"  },{shouldFocus:true});
      return setError("server_error", { type: "server", message:  `${message + ' | خطا رقم' + 500 }`  });
    }
  };

 



  const options = [
    { label: " QR بوت أستخراج كود ", value: "$QR" },
  ];

  return (
    <div className="flex flex-col items-center h-[40%] justify-between w-full">
      {/* Start Form */}
      <form
        className="flex flex-col items-center h-[55%] justify-between"
        onSubmit={handleSubmit(Submit)}
      >
        {(errors?.server_error || isConcect) &&
              <Alert 
              style={{ width: 195, fontSize: 10 , marginBottom:10 }}
              variant="filled" 
              severity={errors?.server_error ? "error" : "success"}
              >
                {errors?.server_error?.message ? errors?.server_error?.message : "تم الأتصال"}
              </Alert>
        }
        <Controller
        control={control}
        name="api_Token"
        defaultValue=''
        rules={{required:true}}
        render={({field , fieldState:{error}})=>{
          return <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
                borderWidth:'1px'
              }
            },
          "& .MuiOutlinedInput-notchedOutline":{borderRadius:'.7rem' , borderWidth:'.1.5rem' },        
        
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "black"
          }},
          
      }}
        
          {...field}
          type='text'
          id="outlined-multiline-flexible"
          label="api_Token"
          size="small"
          helperText={error ? (errors?.api_Token.message || "لايمكن ترك الخانة فارغة") :''}
          error={error !== undefined}
        />}}
        />

        <Controller
        control={control}
        name="dojop"
        defaultValue=''
        rules={{required:true}}
        render={({field , fieldState:{error}})=>{
          return <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
                borderWidth:'1px'
              }
            },
          "& .MuiOutlinedInput-notchedOutline":{borderRadius:'.7rem' , borderWidth:'.1.5rem' },        
        
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "black"
          }},
          
      }}
          {...field}
          defaultValue=''
          autoComplete="off"
          size="small"
          style={{ width: 195 }}
          id="outlined-select-currency"
          select
          label="مهمة البوت"
          helperText={error ? "لايمكن ترك الخانة فارغة" : ''}
          error={error !== undefined}
        >
          {options.map((option) => (
        <MenuItem key={option.value} value={option.value || ""}>
              {option.label}
        </MenuItem>
          ))}
        </TextField>}}
        />



        <Button
        sx={{backgroundColor:"#27272a" , cursor:"pointer" , fontFamily:"font-fontar" , ":hover":{opacity:"95%" , backgroundColor:"#27272a"}}}
          className="font-fontar"
          disabled={!isValid}
          type="submit"
          variant="contained"
          size="medium"
        >
          أرسال
        </Button>
      </form>

      <Alert
        className="font-fontar"
        style={{ width: 195, fontSize: 10 }}
        severity="warning"
      >
        ملاحظة حين خروجك من الموقع لن يعمل البوت{" "}
      </Alert>
    </div>
  );
}

Bot.getLayout = function getLayout(page) {
  return <PerntSidbar titel='بوت تليجرام'>{page}</PerntSidbar>;
};

export default Bot;
