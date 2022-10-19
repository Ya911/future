import PageTitel from "../PageTitel";
import dynamic from "next/dynamic";


const Iconl = dynamic(() => import('./iconl'), {
  ssr: false,
  loading : ()=>''
});
const Wlcome = dynamic(() => import('./wlcome'), {
  ssr: false,
  loading : ()=>''
});
const Tuche = dynamic(() => import('./tuche'), {
  ssr: false,
  loading : ()=>''
});






const LayoutAuth = ({titel,children }) => {

  return (
  <div className={`w-full flex flex-col items-center p-10 gap-7 `}>
    <PageTitel titel={titel} />
    <Iconl />
    <Wlcome/>
    {children}
    <Tuche/>
  </div>
)}




export default LayoutAuth
