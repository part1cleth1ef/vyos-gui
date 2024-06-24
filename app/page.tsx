'use client'

import {Stack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import {getDisplayType} from "@/lib/utils";

// assets
import {InfoBox, MobileInfoBox} from "@/components/login/InfoBox";
import {LoginBox, MobileLoginBox} from "@/components/login/LoginBox";
import background_shape from "../static/login/background_shape.svg";

export default function IndexPage() {
    const displayType = getDisplayType();
    
    return (
        <Stack
            // check if displayType is phone or tablet
            direction={ displayType != "desktop" ? "column" : "row"}
            justify={displayType === "phone" ? "space-between" : "space-around"}
            align="center"
            width="100%"
            height="100vh"
            bg="login_background"
        >
            <Image src={background_shape} alt={""} position={"absolute"} zIndex={1} minHeight="100%" minWidth="100%"/>
            {displayType === "phone" ? <MobileInfoBox/> : <InfoBox/>}
            {displayType === "phone" ? <MobileLoginBox/> : <LoginBox/>}
        </Stack>
    );
}