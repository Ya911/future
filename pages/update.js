import Perntsidbar from "../components/index/pernt";
import dynamic from "next/dynamic";

const UpDectiles = dynamic(
  () => import("../components/index/Update/DecUpdate.js"),
  {
    ssr: false,
  }
);

const Alert = dynamic(() => import("@mui/joy/Alert"), {
  ssr: false,
});

export default function Update() {


  return (
    <div
      style={{ direction: "rtl" }}
      className="flex flex-row justify-between w-full p-1 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-2 shadow-2xl shadow-red p-2 w-[44%] bg-[#eab301] rounded-[0.3rem]">
        <Alert
          sx={{
            color: "#eab301",
            justifyContent: "center",
            borderColor: "#27272a",
            backgroundColor: "black",
            borderRadius: ".2rem",
            padding: ".4rem",
            width: "90%",
          }}
          size="sm"
          className="shadow-sm"
          variant="soft"
        >
          التحديثّ الحاليِ
        </Alert>

        <div className="flex flex-col gap-1 text-xs w-[100%] text-zinc-800">
          <UpDectiles />
        </div>
      </div>
    </div>
  );
}

Update.getLayout = function getLayout(page) {
  return <Perntsidbar titel="التحديثات">{page}</Perntsidbar>;
};
