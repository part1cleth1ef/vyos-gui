'use client'

import {Stack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import {getBackgroundShape, getDisplayType} from "@/lib/utils";

// assets
import {InfoBox, MobileInfoBox} from "@/components/login/InfoBox";
import {LoginBox, MobileLoginBox} from "@/components/login/LoginBox";

export default function IndexPage() {
    const displayType = getDisplayType();

    return (
        <Stack
            // check if displayType is phone or tablet
            direction={displayType != "desktop" ? "column" : "row"}
            justify={displayType === "phone" ? "space-between" : "space-around"}
            align="center"
            width="100%"
            height="100vh"
            bg="login_background"
        >
            <Image src={getBackgroundShape()} alt={""} position={"absolute"} zIndex={0} minHeight="100%"
                   minWidth="100%"/>
            {displayType === "phone" ? <MobileInfoBox/> : <InfoBox/>}
            {displayType === "phone" ? <MobileLoginBox/> : <LoginBox/>}
        </Stack>
    );
}