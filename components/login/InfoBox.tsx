'use client'
import {Box, Flex, Stack, Text} from "@chakra-ui/react";
import Image from "next/image";
import logo from "static/Logo.svg";

export function InfoBox() {
    return (
        <Flex direction="row" align="center">
            <Stack width="64px" height="64px" marginRight="10px">
                <Image src={logo} alt="VyOS Logo" width={64}/>
            </Stack>
            <Box>
                <Text
                    fontFamily="Archivo Variable"
                    fontWeight="semibold"
                    fontSize="32px"
                    letterSpacing="-0.5px"
                    color="Grey Dark"
                >
                    VyOS
                </Text>
                <Text
                    fontFamily="Work Sans Variable"
                    fontWeight="medium"
                    fontSize="14px"
                    letterSpacing="-0.04em"
                    color="login_subtitle"
                >
                    1.4.0 (router.example.com)
                </Text>
            </Box>
        </Flex>
    )
}

export function MobileInfoBox() {
    return (
        <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
        >
            <InfoBox/>
        </Box>
    )
}