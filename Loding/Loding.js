import {CircularProgress} from '@mui/material'

function LodingPage() {
    return <CircularProgress


    sx={{
        boxShadow:'inset 4px 2px 1px #eab401 , inset 8px 4px 1px #d7d7d7',
        borderRadius: "2rem",
    "& .MuiCircularProgress-circle":{stroke :'none'}


}}
style={{    
position:'absolute',    
top:'37%',
translate: "0% -50%",
zIndex: 1
}}

    />
}

export default LodingPage;


// 