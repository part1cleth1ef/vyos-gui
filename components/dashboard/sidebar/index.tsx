'use client'
import {Box, Button, Divider, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
// assets
import white_logo from "static/_logos/white.svg";
import info_small from "static/_icons/info_small.svg";
import settings_icon from "static/_icons/settings.svg";
import notification from "static/_icons/notification.svg";
import {ReactNode} from "react";

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
    selected: boolean;
    notifications?: number;
    children?: ReactNode;
}

function Item({icon, name, selected, notifications, children}: ItemProps) {
    return (
        <>
            <Button
                variant={`sidebar_${selected ? 'selected' : 'normal'}`}
                paddingY={"8px"} paddingX={"24px"}
                justifyContent={"flex-start"}
            >
                {/* Icon */}
                <Image src={icon} alt={`${name} Icon`} width={5} paddingRight={1.75}/>
                {/* Name */}
                <Text variant={"sidebar_title"}
                      color={`button_sidebar_${selected ? 'selected' : 'normal'}.text`}>{name}</Text>
                {notifications &&
                    <>
                        <Spacer/>
                        <Box bg={"red"} rounded={13}>
                            <Text variant={"sidebar_notification"} paddingX={"7px"}
                                  paddingY={"3px"}>{notifications}</Text>
                        </Box>
                    </>
                }
            </Button>
            {children}
        </>
    )
}

export default function Sidebar() {

    return (
        <VStack bg={"background"}>
            <Title/>

            {/* Sidebar items */}
            <Item icon={notification} name={"Alerts"} selected={false} notifications={3}/>

            {/* Sidebar Divider + Settings */}
            <Divider/>

            <Item icon={settings_icon} name={"Settings"} selected={true}/>
        </VStack>
    )
}