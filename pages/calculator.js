import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Perntsidbar from "../components/index/pernt";

const Calculator1 = dynamic(() => import("../components/index/Calculator/calculator1"), {
  ssr: false,
  loading : ()=>''
});
// import {} from 're'
function Calculator() {



  const {value1 , value2, hovecaluc,obr}=useSelector(status=>status.Index.Calec)


  const allvalue = [
        {id:0,1:'AC',2:"?",3:"%",4:'/'},
        {id:1,1:"7",2:"8",3:"9",4:'X'},
        {id:2,1:"4",2:"5",3:"6",4:'-'},
        {id:3,1:"1",2:"2",3:"3",4:'+'},
        {id:4,1:"0",2:".",3:"",4:'='},
    ]



  return (
<div className="flex items-center justify-center">
    <div className="flex flex-col h-full gap-2 p-3 font-fonten ">


    <span  className="max-w-[18rem] overflow-hidden scroll-my-36 pb-2 pr-2 text-white text-4xl text-right text-clip">{hovecaluc || !obr ? value1 : value2}</span>
      {/* ALL Col  */}
{allvalue && allvalue.map(col=>{
      // Calculator1.displayName = `${i}`
      // Calculator1.name = `${i}`
    return (

    <Calculator1  
    key={col.id} 
    id={col.id}
    frist={col['1']}
    scend={col['2']} 
    thre={col['3']}  
    fored={col['4'] || ''}
     />
      )
      
})}
    </div>
    </div>
  );
}

Calculator.getLayout = function getLayout(page) {
  return <Perntsidbar titel="الحاسبة">{page}</Perntsidbar>;
  

};

export default Calculator;
