import Pernt from "../components/index/pernt";

function Setting() {
    return (
        <div className="text-white">
            ... قيد العمل 
        </div>
    );
}


Setting.getLayout = function getLayout (page){
    return ( 
      <Pernt titel="الأعدادات">
      {page}
      </Pernt>
      )
  
  }
  
export default Setting;