import dynamic from "next/dynamic";
import {useContext, memo } from "react";
import { MYCONTEXTBOOOK } from "../Books/reduserContext";


const Select = dynamic(() => import("@mui/material/Select"), {
  ssr: false,
  loading : ()=>''
});

const FormControl = dynamic(() => import("@mui/material/FormControl"), {
  ssr: false,
  loading : ()=>''
});
const MenuItem = dynamic(() => import("@mui/material/MenuItem"), {
  ssr: false,
  loading : ()=>''
});

const InputLabel = dynamic(() => import("@mui/material/InputLabel"), {
  ssr: false,
  loading : ()=>''
});

function Category() {


  const {addCategories  , Categories} = useContext(MYCONTEXTBOOOK);



    return (
        <div className="w-[50%] flex justify-end">
        <FormControl   
        sx={{
        width:'80%' ,
        '& .MuiSelect-select':{pb:'.6rem'  ,textAlign:"center",  fontSize:'.3rem', fontFamily:"Noto Kufi Arabic", color:'white'},
      }} 
        size='small'
        variant="filled" 
        >
        <InputLabel 
        sx={{color:"#9e9e9e" , fontFamily:"Noto Kufi Arabic", fontSize:'.8rem', "&.Mui-focused":{color:'#fcd34d'}}}
        id="demo-simple-select-filled-label">الفئة
        </InputLabel>
        <Select
          sx={{'&:after':{borderBottomColor:"#fcd34d"} , "& .MuiFilledInput-input":{
            paddingX:0,
            paddingTop:1,
            paddingBottom:'.61rem'
          }}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Categories}
          onChange={(e)=>addCategories(e.target.value)}
          MenuProps={{
            sx: {
              "& .MuiMenuItem-root":{
                fontFamily: "Noto Kufi Arabic",
                fontSize:'.8rem',
                "&:hover":{backgroundColor:'#18181b' , color:'white'},
                '&.Mui-selected': {
                  backgroundColor: '#fcd34d !important',
                  color:'black'
                }
              },
            
            }
          }}

        >
          <MenuItem
         
            value="all">
            <em   style={{textAlign:'center'}}  >الجميع</em>
          </MenuItem>
          <MenuItem
           value={"Botany"}>علم النبات</MenuItem>
          <MenuItem value={"Flower language"}>لغة الزهور</MenuItem>
          <MenuItem value={"English poetry"}>الشعر الأنجليزي</MenuItem>
          <MenuItem value={"History"}> التاريخ</MenuItem>
          <MenuItem value={"Great Britain"}> بريطانيا الصغرى</MenuItem>
          <MenuItem value={"Flowers"}> زهور</MenuItem>
          <MenuItem value={"Floriculture"}> زراعة الزهور</MenuItem>
        </Select>
      </FormControl>
        </div>
    );
}

export default memo(Category)