'use client'
import {Box, Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
// assets
import white_logo from "static/_logos/white.svg";
import info_small from "static/_icons/info_small.svg";
import settings_icon from "static/_icons/settings.svg";

function Title() {
    return (
        <HStack>
            {/* Logo */}
            <Box rounded={6} bg={"vyos.gradient"}>
                <Image src={white_logo} alt={"VyOS Logo"} padding={"5px"} width={7}/>
            </Box>
            {/* Title */}
            <VStack>
                <Text variant={"subheading"}>
                    router.example.com
                </Text>
                <HStack>
                    <Text variant={"subtitle"}>VyOS 1.4.0</Text>
                    <Image src={info_small} alt={"Info icon"}/>
                </HStack>
            </VStack>l
        </HStack>
    )
}

interface ItemProps {
    icon: string;
    name: string;
}

function Item({icon, name}: ItemProps) {
    return (
        <HStack>
            {/* Icon */}
            <Image src={icon} alt={`${name} Icon`} width={5} />
            {/* Name */}
            <Text variant={"subheading"}>{name}</Text>
        </HStack>
    )
}

export default function Sidebar() {

    return (
        <VStack>
            <Title/>

            {/* Sidebar items */}

            {/* Sidebar Divider + Settings */}
            <Divider/>
            
            <Item icon={settings_icon} name={"Settings"}/>
        </VStack>
    )
}