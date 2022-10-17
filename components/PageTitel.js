import Head from "next/head";
import { memo } from "react";

function PageTitel({titel}) {
    return (
        <Head>
           <title>{titel}</title>
        </Head>
    );
}

export default memo(PageTitel)