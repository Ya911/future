import PerntSidbar from "../components/index/pernt";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useState } from "react";


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
    register,
    setError,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });


const [token , setToken]=useState()

  useEffect(()=>{
    if(errors.server_error){
    setTimeout(()=>{
      reset()
      clearErrors('server_error')
     },[2000])
    }
    },[errors.server_error,clearErrors,reset,errors])


  let Submit = async (data) => {
    try {
      let send = await fetch("/api/bot", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!send.ok)throw (await send.json());
      return;

    } catch ({description , error_code}) {
      return setError("server_error", { type: "server", message:  `${description + ' | خطا رقم' + error_code }`  });
    }
  };

 
// if(errors)



  const options = [
    { label: " QR بوت أستخراج كود ", value: "$QR" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {/* Start Form */}
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(Submit)}
      >
        {errors?.server_error &&
              <Alert 
              className="font-fontar"
              style={{ width: 195, fontSize: 10 , marginBottom:10 }}
              variant="filled" severity="error"
              >
                {errors?.server_error.message}
              </Alert>
        }
        <TextField
          defaultValue=''
          value={token}
          id="outlined-multiline-flexible"
          label="api_Token"
          size="small"
          {...register("api_Token", {
            required: { value: true, message: "لايمكن ترك الخانة فارغة" },
          })}
          helperText={errors.api_Token && errors.api_Token.message}
          error={errors.api_Token && true}
        />
        <TextField
          defaultValue=''
          autoComplete="off"
          size="small"
          // value={getValues}
          style={{ width: 195 }}
          id="outlined-select-currency"
          select
          label="مهمة البوت"
          {...register("dojop", {
            required: { value: true, message: "لايمكن ترك الخانة فارغة" },
          })}
          helperText={errors.dojop && errors.dojop.message}
          error={errors.dojop && true}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value || ""}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          className="font-fontar"
          disabled={!isValid && true}
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
