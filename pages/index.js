import PerntSidbar from "../components/index/pernt";


function Index() {

  return (

  <div className="text-lg font-bold text-center text-white">
  مرحبا بك <br/>
   لاتترد في أختبار تجاربي
  </div>

  
  )



}

Index.getLayout = page=><PerntSidbar titel='الرئيسية'>{page}</PerntSidbar>




export default Index


