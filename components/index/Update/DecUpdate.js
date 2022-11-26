function DecUpdate({Versoin , DateEX , Description }) {
  
    return (

            <>
            <span className="text-[.5rem] font-bold" >-ّرقمّ التحديث : <span className='font-bold'>{Versoin && (Versoin.slice(7) || '')}</span></span>
            <span className="text-[.5rem] font-bold" >-ّتاريخّ التحديث : <span className='font-bold'>{DateEX && (DateEX || '')}</span></span>
            <ul className="overflow-visible text-[.5rem] font-bold text-right list-decimal list-inside ">مميزاتّ الأصدارِ :
            {Description && (Description?.length !== 0 && Description.map(li=>{
                return <li  key={li} className="mt-1 text-[.5rem] font-bold">{li + ' .'}</li>
            }))}
            </ul>
            </>


    );
}

export default DecUpdate;