import {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";
import * as console from "node:console";

export default function Document() {
    console.log("_Document")

    return (
        <Html lang="en">
            <Head/>
            <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}