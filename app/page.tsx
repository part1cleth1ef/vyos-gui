'use client'

import {Stack, useMediaQuery} from "@chakra-ui/react";
// assets
import {InfoBox, MobileInfoBox} from "@/components/login/InfoBox";
import {LoginBox, MobileLoginBox} from "@/components/login/LoginBox";
import {getDisplayType} from "@/lib/utils";

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
            bg="#F6F8FA">
            {displayType === "phone" ? <MobileInfoBox/> : <InfoBox/>}
            {displayType === "phone" ? <MobileLoginBox/> : <LoginBox/>}
        </Stack>
    );
}