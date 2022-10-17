import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useContext, memo } from "react";
import { MYCONTEXTBOOOK } from "../Books/reduserContext";



function Category() {


  const {addCategories  , Categories} = useContext(MYCONTEXTBOOOK);
// useEffect(()=>{},[Categories])



    return (
        <div className="flex justify-center  items-center  w-[50%]">
        <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel 
        style={{color:'white'}}
        id="demo-simple-select-filled-label">الفئة</InputLabel>
        <Select
          style={{color:'white'}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Categories}
          onChange={(e)=>addCategories(e.target.value)}
        >
          <MenuItem  value="all">
            <em>الجميع</em>
          </MenuItem>
          <MenuItem value={"Botany"}>علم النبات</MenuItem>
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