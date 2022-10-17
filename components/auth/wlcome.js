import { memo } from "react";

function Wlcome() {
    return (
        <div className="flex flex-col items-center">
        <span className="text-lg font-light text-white font-fontar">
          مرحبا بك في
        </span>
        <span className="text-lg text-white font-fontar">
          تطبيق <span className="text-4xl font-bold">الموسيقى</span>
        </span>
      </div>
    );
}


export default memo(Wlcome);