'use client'
import {Box, Flex, HStack, Stack, Text} from "@chakra-ui/react";
import Image from "next/image";
import logo from "static/_logos/default.svg";

export function InfoBox() {
    return (
        <Flex direction="row" align="center">
            <Stack width="64px" height="64px" marginRight="10px">
                <Image src={logo} alt="VyOS Logo" width={64}/>
            </Stack>
            <Box>
                <HStack>
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
                        fontFamily="Archivo Variable"
                        fontWeight="semibold"
                        fontSize="24px"
                        letterSpacing="-0.5px"
                        color="Grey Dark"
                    >
                        Local UI
                    </Text>
                </HStack>
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