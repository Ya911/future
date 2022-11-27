import Link from 'next/link'
import Layoutauth from '../../components/auth/layoutauth'
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@mui/joy/Button"), {
       ssr: false,
     });

const scSty = {
       paddingInline: ".5rem",
       fontFamily: "Alexandria",
       fontSize: ".8rem",
       color: "hsl(0deg 0% 95%)",
       textShadow: "-1px 1px 1px #222222",
       fontWeight: 900,
       borderRadius: ".2rem",
       minHeight: "1.9rem",
       width: "45%",

       backgroundColor: "#eab301 !important",
       ":hover": {
         backgroundColor: "#d7d7d7 !important",
         transition:'all 0.6s ease-in-out',
         color:'#222222 !important',
         boxShadow:"0px -6px 0px #eab301",
         textShadow: "none",         
   
       },
       "&.Joy-disabled":{
         userSelect:'none',
         backgroundColor:"#f7f7f847 !important",
         textShadow:'none',
         color:'#ffffff6b!important'
       }
}

export default function Index (){


return (
<div className={`flex flex-col items-center w-full gap-3 mt-[0.5rem] font-fontar `}>
<Link href='/auth/signin'><Button sx={{marginBottom:'.8rem',":hover": {marginBottom:'.5rem'},...scSty}} variant='soft' color='neutral'  id='login'>تسجيل الدخول</Button></Link>
<Link href='/auth/signup'><Button sx={{"&:hover": {marginTop:'.5rem'},...scSty}}variant='soft' color='neutral'   id='Reg'>التسجيل</Button></Link>
</div>
)
}






Index.getLayout = function getLayout(page) {
    return (
  
           <Layoutauth titel='التسجيل' isOpen={false} >
            {page}
           </Layoutauth>
    )
    

  }


