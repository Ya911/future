import { extendTheme, CssVarsProvider } from "@mui/joy/styles";
import { Container } from "@mui/material";
import dynamic from "next/dynamic";
import { memo } from "react";





let thems = extendTheme({
  components: {
    JoyAlert: {
      styleOverrides: {
        root: {
          "--joy-radius-sm": ".2rem",
          width:"87%",
          gap:'.3rem',
          direction:'rtl',
          overflow:'hidden',
          textOverflow:'unset',
          "--Alert-gap":'0rem',
          "--Alert-padding": "0.3rem",
          fontSize:'.7rem',
          fontFamily: "Noto Kufi Arabic",
          


        },
      },
    },
    JoyTextField: {
      styleOverrides: {
        root: {
          alignItems: "center",

          "--FormLabel-margin": "0 0 0.28rem 0",
          "--FormHelperText-margin": "0.35rem 0 0 0",
          width: "85%",
          ":hover": { color: "#eab301 !important" },
        },
      },
    },

    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            width: "100%",
            minHeight: "1.8rem",
            "&:hover": { borderColor: `#eab301 !important` },
            "--Input-focusedHighlight": "none",
            "--Input-minHeight": "2.3rem",
            fontFamily: "Noto Kufi Arabic",
            fontSize: ".8rem",
            border: `1px solid #f4f4f4`,
            borderRadius: ".2rem",

            backgroundColor: "#f4f4f4",
            boxShadow: "0px 1px 3px #f0d800d6",
            "& ::placeholder": { fontSize: "0.3rem", textAlign: "right" },
            "&.Joy-focused": {
              borderColor: `#eab301`,
              outline: `3px solid #f0d800d6`,
              borderRadius: ".2rem",
              boxShadow: "0px 2px 10px #f0d800d6",
            },
            "& .JoyInput-input": { textAlign: "right" },
            "&.Joy-error": {
              borderColor: "red !important",
              borderRadius: ".2rem",
              boxShadow: "0px 2px 10px #ff0000bd",
              "&.Joy-focused": {
                borderColor: `red`,
                outline: `3px solid #ff000075`,
                borderRadius: ".2rem",
                boxShadow: "0px 2px 10px #ff000075",
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
            fontSize: ".7rem",
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
          fontSize: "10px",
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
          fontSize: ".8rem",
          color: "hsl(0deg 100% 96%)",
          textShadow: "0px 0px 1px black",
          fontWeight: 600,
          borderRadius: ".2rem",
          minHeight: "1.9rem",
          width: "87%",
          backgroundColor: "#eab301 !important",
          marginBottom: "1.5rem",
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

function LayoutForm({children}) {
  return (
    <div
      className=" 
        relative flex flex-col  items-center  w-[76.666667%] p-4 mt-5 rounded-[0.6rem]
        before:absolute before:left-[-2%]  before:h-8 before:w-[calc(100%_+_4%)]
        before:bottom-[-2%] before:shadow-[rgba(234,179,1,1)_0px_4px,rgba(234,179,1,0.80)_0px_11px,rgba(234,179,1,0.70)_0px_17px] before:rounded-[0.8rem]
        after:absolute after:right[-2%]  after:h-12 after:z-[-1] after:w-[calc(100%_+_4%)]
        after:top-[-2%] after:shadow-[rgb(215_215_215)_0px_-12px] after:rounded-[0.8rem]
        "
    >
      <Container
        fixed
        sx={{
          display: "flex",
          gap: ".5rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center',
          margin:'auto',
          padding: 0,
          position:'relative',
        }}
      >
        <CssVarsProvider theme={thems} >{children}</CssVarsProvider>
      </Container>
    </div>
  );
}

export default memo(LayoutForm)
