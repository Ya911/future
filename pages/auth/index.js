import Link from 'next/link'
import Layoutauth from '../../components/auth/layoutauth'



export default function Index (){


return (
<div className={`flex flex-col items-center w-full gap-3 mt-6 font-fontar `}>
<Link href='/auth/signin'><button  id='login' className='p-1 text-black transition-all bg-white cursor-pointer hover:ease-in w-36 rounded-xl dark:text-white dark:bg-cyan-900 drop-shadow-xl hover:animate-bounce '>تسجيل الدخول</button></Link>
<Link href='/auth/signup'><button  id='Reg' className='p-1 text-black transition-all bg-white cursor-pointer hover:ease-in w-36 rounded-xl dark:text-white dark:bg-cyan-900 drop-shadow-xl hover:animate-bounce'>التسجيل</button></Link>
</div>
)
}






Index.getLayout = function getLayout(page) {
    return (
  
           <Layoutauth titel='التسجيل' >
            {page}
           </Layoutauth>
    )
    

  }


