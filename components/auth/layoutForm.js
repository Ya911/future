import { extendTheme, CssVarsProvider } from "@mui/joy/styles";
import { Container } from "@mui/material";
import { memo } from "react";





let thems = extendTheme({
  components: {
    JoyAlert: {
      styleOverrides: {
        root: {
          "--joy-radius-sm": ".2rem",
          width:"100%",
          gap:'.3rem',
          minHeight:'2.5rem',
          direction:'rtl',
          overflow:'hidden',
          textOverflow:'unset',
          "--Alert-gap":'0rem',
          "--Alert-padding": "0.3rem",
          fontSize:'1rem',
          fontFamily: "Noto Kufi Arabic",
          


        },
      },
    },
    JoyTextField: {
      styleOverrides: {
        root: {
          alignItems: "center",
          width:"100%",

          "--FormLabel-margin": "0 0 0.28rem 0",
          "--FormHelperText-margin": "0.35rem 0 0 0",
          ":hover": { color: "#eab301 !important" },
        },
      },
    },

    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            width: "100%",
            minHeight: "2.6rem",
            "&:hover": { borderColor: `#eab301 !important` },
            "--Input-focusedHighlight": "none",
            "--Input-minHeight": "2.3rem",
            fontFamily: "Noto Kufi Arabic",
            fontSize: ".8rem !important",
            border: `3px solid #f4f4f4`,
            borderRadius: ".4rem",

            backgroundColor: "#f4f4f4",
            // boxShadow: "0px 1px 3px #f0d800d6",
            "& ::placeholder": { fontSize: "0.9rem", textAlign: "right" },
            "&.Joy-focused": {
              borderColor: `#eab301`,
              borderRadius: ".4rem",
              boxShadow: "0px 2px 0px #deaa0a , 2px 2px 0px #deaa0a , -2px 2px 0px #deaa0a , -2px -2px 1px #deaa0a , 2px -2px 1px #deaa0a",
            },
            "& .JoyInput-input": { textAlign: "right" , width:'88%' , fontSize: "1rem"},
            "&.Joy-error": {
              borderColor: "red !important",
              borderRadius: ".4rem",
              boxShadow: "0px 0px 0px #D30002,0px 0px 0px #d30000,0px 0px 0px #ff0000ba,0px 0px 0px #D30000,0px 0px 0px #d30000!important",
              "&.Joy-focused": {
                // boxShadow: "0px 2px 0px #deaa0a , 2px 2px 0px #deaa0a , -2px 2px 0px #deaa0a , -2px -2px 1px #deaa0a , 2px -2px 1px #deaa0a",
              },
            },
          };
        },
      },
    },

    JoyFormLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            fontFamily: "Alexandria",
            fontSize: ".9rem",
            fontWeight: 300,
            paddingRight: "1px",
            marginBottom: "7px",
            color: `#eab301`,
            alignSelf: "flex-end",
          };
        },
      },
    },

    JoyFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "Alexandria",
          fontSize: "`1rem`",
          alignSelf: "flex-end",
          paddingTop: 2,
        },
      },
    },
  

    JoyButton: {
      styleOverrides: {
        root: {
          paddingInline: ".5rem",
          fontFamily: "Noto Kufi Arabic",
          fontSize: ".9rem",
          color: "hsl(0deg 100% 96%)",
          textShadow: "0px 0px 1px black",
          fontWeight: 600,
          borderRadius: ".2rem",
          minHeight: "2.8rem",
          width: "100%",
          backgroundColor: "#eab301 !important",
          // marginBottom: "1.5rem",
          marginTop: ".5rem",
          ":hover": {
            backgroundColor: "#d7d7d7 !important",
            transition:'all 0.6s ease-in-out',
            color:'#eab301 !important',
            boxShadow:"0px -6px 0px #eab301",
            textShadow: "none",
      
          },
          "&.Joy-disabled":{
            userSelect:'none',
            backgroundColor:"#f7f7f847 !important",
            textShadow:'none',
            color:'#ffffff6b!important'
          }
        },
      },
    },
  },
});

function LayoutForm({children , rouls}) {
  return (
    <div
      className={`
        relative flex flex-col  items-center  w-[60.666667%] p-1 rounded-[0.6rem]
        before:absolute before:left-[-2%]  before:h-12 before:w-[calc(100%_+_4%)]
        before:bottom-[-2%] ${rouls} before:rounded-[0.8rem]
        after:absolute after:right[-2%]  after:h-20 after:z-[-1] after:w-[calc(100%_+_4%)]
        after:top-[-2%]  after:rounded-[0.8rem]
        `}
    >
      <Container
        fixed
        sx={{
          display: "grid",
          gap: ".7rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center',
          margin:'auto',
          padding: '0 !important',
          position:'relative',
          justifyItems:'center'
        }}
      >
        <CssVarsProvider theme={thems} >{children}</CssVarsProvider>
      </Container>
    </div>
  );
}

export default memo(LayoutForm)
