import Image from "next/image";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Perntsidbar from "../components/index/pernt";
import useSWR from "swr";
import dynamic from "next/dynamic";

const Paper = dynamic(() => import("@mui/material/Paper/Paper"), {
  ssr: false,
  loading : ()=>''
});
const Box = dynamic(() => import("@mui/material/Box/Box"), {
  ssr: false,
  loading : ()=>''
});
const CircularProgress = dynamic(() => import("@mui/material/CircularProgress/CircularProgress"), {
  ssr: false,
  loading : ()=>''
});
const ChevronLeftIcon = dynamic(() => import("@mui/icons-material/ChevronLeft"), {
  ssr: false,
  loading : ()=>''
});
const ChevronRightIcon = dynamic(() => import("@mui/icons-material/ChevronRight"), {
  ssr: false,
  loading : ()=>''
});
const PencilAltIcon = dynamic(() => import("@heroicons/react/solid/PencilAltIcon"), {
  ssr: false,
  loading : ()=>''
});
const CloudUploadIcon = dynamic(() => import("@heroicons/react/solid/CloudUploadIcon"), {
  ssr: false,
  loading : ()=>''
});

const Button = dynamic(() => import("@mui/material/Button/Button"), {
  ssr: false,
  loading : ()=>''
});
const Slider = dynamic(() => import("@mui/material/Slider/Slider"), {
  ssr: false,
  loading : ()=>''
});
const Stack = dynamic(() => import("@mui/material/Stack/Stack"), {
  ssr: false,
  loading : ()=>''
});

const fetcher = url => fetch(url).then(r =>r.json())

export default function MyAccount() {

    const inputImg = useRef(null);
    const { data: session } = useSession()
    const { data} = useSWR(["/api/infousers/" +session?.user?.id], fetcher)
    let [newImage, setnewImage] = useState();
    let [textimg, setTextimg] = useState({
      text: "رفع صوره",
      mode: "uploudfromDev",
      str:0
    });
    let [file, setFile] = useState();
    let [inproc, setInproc] = useState(null);
    let [processerver, setProcesserver] = useState(null);
    const marks = [
      {
        value: 0,
      },
      {
        value: 50,
      },
      {
        value: 100,
      },
    ];
  


    
    

    const inputHiden = async (e) => {
      e.preventDefault();
      if (textimg.mode === "upludtoServer") {
        const axios = (await import('axios')).default
        if (file) {
          const form = new FormData();
          form.append("img", file);
  
          const uplud = await axios.put(
            `${"/api/users/" + session.user.id}`,
            form,
            {
              onUploadProgress: (progressEvent) => {
                if (progressEvent.lengthComputable) {
                  setProcesserver(
                    Math.round((progressEvent.loaded * 100) / progressEvent.total)
                  );
                }
              },
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          if (!uplud.data) return;
          setProcesserver(null);
          return setTextimg({ text: "تم رفع الصورة بنجاح", mode: "done",str:100 });
        } else return;
      } else {
        inputImg.current.click();
      }
    };
  
  const backButoon = ()=>{
      setTextimg({
          text: "رفع صوره",
          mode: "uploudfromDev",
          str:0
      })
      setnewImage(null)
      return setFile(null)
  
  }
  
    const vileuImg =  (e) => {
    let file =  e.target.files[0]
    if(!file)return 
    let redImg = new FileReader();
    redImg.readAsDataURL(file);
    redImg.onprogress = setInproc(true);
    return redImg.onload = function () {
      setFile(file)
      setnewImage(redImg.result)
      setTextimg({ text: "أظغط للرفع", mode: "upludtoServer",str:50 });
      setInproc(null);
    };
  
}






    return (
        <div action="PUT" className="flex flex-row-reverse ">
          {/* info User Start */}
          <form className="flex  p-2 flex-col items-end  overflow-hidden text-right w-[50%]">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-white" htmlFor="name">
                {" "}
                : أسمك
              </label>
{              data?.fristname &&
              <input
                name="name"
                id="name"
                readOnly
                className="py-2 text-xs text-[#fcd34d] text-right bg-transparent border-none opacity-80"
                htmlFor="name"
                defaultValue={data.fristname}
              />}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-white" htmlFor="username">
                {" "}
                : أسم المستخدم
              </label>
{ data?.username && <input
                name="username"
                id="username"
                readOnly
                className="py-2 text-xs text-[#fcd34d] text-right bg-transparent border-none opacity-80"
                htmlFor="username"
                defaultValue={data.username}
              />}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-white" htmlFor="email">
                {" "}
                : أيميل المستخدم
              </label>
{    data?.email &&          <input
                name="email"
                id="email"
                readOnly
                className="py-2 text-xs text-[#fcd34d] text-right bg-transparent border-none opacity-80"
                htmlFor="email"
                defaultValue={data.email}
              />}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-white " htmlFor="role">
                {" "}
                : أسم العضوية
              </label>
{ data?.role  && <input
                name="role"
                id="role"
                readOnly
                className="py-2 text-xs text-[#fcd34d] text-right bg-transparent border-none opacity-80"
                htmlFor="role"
                defaultValue={data.role}
              />}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-white" htmlFor="AccountـCreationـDate">
                {" "}
                : تاريخ أنشاء الحساب
              </label>
{data?.AccountـCreationـDate &&              <input
                name="AccountـCreationـDate"
                id="AccountـCreationـDate"
                readOnly
                className="py-2 text-xs text-[#fcd34d] text-right bg-transparent border-none opacity-80"
                htmlFor="AccountـCreationـDate"
                defaultValue={data.AccountـCreationـDate.slice(0,-14)}
              />}
            </div>

          </form>
          {/* info User END */}

          {/* Image Start */}
          <form className="flex relative justify-between items-start gap-3 flex-col w-[50%]">
            <div className="w-full p-2 relative h-[60%]">
              {inproc && (
                <Box
                  sx={{
                    display: "flex",
                    position: "absolute",
                    left: "40%",
                    top: "40%",
                    zIndex: 1,
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              {data?.image?.url && <Image
                priority={true}
                quality={100}
                objectFit="cover"
                className="rounded-tr-md rounded-br-md"
                layout="fill"
                src={newImage || data.image.url}
                alt="img"
              />}
            </div>
                  
            <div className='relative flex flex-col items-center w-full gap-5 p-1 py-3 overflow-hidden shadow-md ' >
            <Paper
          style={{
            background: "#27272a",
            top: "0%",
            left:"0%",
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius:'0',
             borderTopRightRadius:'.4rem',
             borderBottomRightRadius:'.4rem'
          }}

        />
            <Stack 
            
            sx={{ height: 250 , paddingTop:2 }}
            direction='column-reverse'>
            <Slider
            orientation="vertical"
            step={null}
            value={textimg.str}
            defaultValue={0}
            aria-label="Temperature"
            size='small'
            marks={marks}
            sx={{       
                '& .MuiSlider-thumb': {
                    display:`${textimg.str === 100 && 'none'}`,
                    cursor: 'none',
                    height: 13,
                    width: 13,
                    marginBottom:0.5,
                    boxShadow: '0 0 0 4px rgba(58, 133, 137, 0.16)',
                    borderRadius:1,
                    backgroundColor: 'rgb(234, 179, 0)',

                },
                '& .MuiSlider-track': {
                    border: 'default',
                    backgroundColor:'rgb(234, 179, 0)',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#fff',
                    border: 'default',
                  },
                  '& .MuiSlider-mark': {
                    cursor:'none',
                    backgroundColor: '#b1afaf',
                    height: 9,
                    width: 9,
                    borderRadius:50,
                    opacity:"100%",
                    '&.MuiSlider-markActive': {
                      opacity: 10,
                      backgroundColor: 'rgb(234, 179, 0)',
                      border:'solid 2px #fff'
                      
                    },
                },
                    
                     cursor:'none'   }}
            />
             </Stack>

{/* sss */}
{textimg.str === 50 && (
    <div className="absolute top-[45%] flex justify-between w-full ">
    <Button
    onClick={backButoon}
                  sx={{
                    ":hover": {
                      bgcolor: "##27272a29",
                      transition: 'ease-out 0.3s' ,
                      color: "rgb(234, 179, 0)",
                      paddingLeft:1
                    },
                    fontSize: "0.8rem",
                    color: "rgb(234, 179, 0)",
                    padding:0,
                    minWidth:0,
                    alignItems:'center',
                    paddingLeft:1
                    
                  }}
                  startIcon={<ChevronLeftIcon style={{fontSize:'1.4rem' , zIndex:'0'}}/>}
                >
                </Button>
    
                <Button
                onClick={(e)=>inputHiden(e)}
                  sx={{
                    ":hover": {
                      bgcolor: "##27272a29",
                      transition: 'ease-out 0.3s' ,
                      color: "rgb(234, 179, 0)",
                    },
                    fontSize: "0.8rem",
                    color: "rgb(234, 179, 0)",
                    padding:0,
                    minWidth:0,
                    alignItems:'center'
                    
                  }}
                  startIcon={<ChevronRightIcon style={{fontSize:'1.4rem' , zIndex:'0'}}/>}
                >
                </Button>
    
    
    </div>
    
)}




  <input
              onChange={(e) => vileuImg(e)}
              onClick={(({target})=> {
                if(target.files[0]){
                  return target.value = null
                } 
              })}
              ref={inputImg}
              accept="image/*"
              type="file"
              hidden
              name="img"
              id="img"
            />
            <Button
              sx={{
                ":hover": {
                  bgcolor: "##27272a29",
                  transition: 'ease-out 0.3s' ,
                  // theme.palette.primary.main
                  color: "rgb(234, 179, 0)",
                
                },

                fontSize: "0.8rem",
                width: "100%",
                color: "rgb(234, 179, 0)",
                
              }}
              onClick={inputHiden}
              type="submit"
              startIcon={textimg.str !== 100 ?(!processerver ?<CloudUploadIcon className="h-[1.0rem]"/>:'') : ''}
            >
              {processerver ? <CircularProgress className="h-[1.0rem]" /> :  textimg.text}
            </Button>

            </div>

          </form>
          {/* Image END */}
        </div>
    );
}


MyAccount.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='حسابي'>
    {page}
    </Perntsidbar>
    )

}



  

