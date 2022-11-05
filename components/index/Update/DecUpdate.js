function DecUpdate({Versoin , DateEX , Description }) {
    return (
            <>
            <span>- رقم التحديث: {Versoin.slice(7) || ''}</span>
            <span>- تاريخ التحديث: {DateEX || ''}</span>
            <ul className="overflow-visible text-sm text-right list-disc list-inside ">مميزت الأصدار :
            {Description?.length !== 0 && Description.map(li=>{
                return <li key={li} className="">{li}</li>
            })}
            </ul>
            </>

    );
}

export default DecUpdate;