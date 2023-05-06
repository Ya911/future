function DecUpdate() {
  
    let BulidUpdate = process.env.NEXT_PUBLIC_BUILD_ID
    ? JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID)
    : null;

    return (

            <>
            <span className="text-[.5rem] font-bold" >-ّرقمّ التحديث : <span className='font-bold'>{BulidUpdate['Versoin'] && (BulidUpdate['Versoin'].slice(7) || '')}</span></span>
            <span className="text-[.5rem] font-bold" >-ّتاريخّ التحديث : <span className='font-bold'>{BulidUpdate['DateEX'] && (BulidUpdate['DateEX'] || '')}</span></span>
            <ul className="overflow-visible text-[.5rem] font-bold text-right list-decimal list-inside ">مميزاتّ الأصدارِ :
            {BulidUpdate["Description"] && ( BulidUpdate["Description"] || ''
        
            )}
            </ul>
            </>


    );
}

export default DecUpdate;