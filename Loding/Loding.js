import {CircularProgress} from '@mui/material'

function LodingPage() {
    return <CircularProgress


    sx={{
        boxShadow:'inset 4px 12px 0px #eab401 , inset -6px 11px 0px #d7d7d7',
        borderRadius: "2rem",
    "& .MuiCircularProgress-circle":{stroke :'none'}


}}
style={{    
position:'absolute',    
top:'50%',
height:"4rem",
width:'4rem',
translate: "0% -50%",
zIndex: 1
}}

    />
}

export default LodingPage;


// 