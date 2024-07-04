'use client'
import {
    Box,
    Divider,
    HStack,
    LightMode,
    Spacer,
    Text,
    VStack,
    useDisclosure,
    Accordion, AccordionButton, AccordionPanel, AccordionItem, Container
} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import React from "react";
// assets
import white_logo from "static/_logos/white.svg";
import info_small from "static/_icons/info_small.svg";
import settings_icon from "static/_icons/settings.svg";
import notification from "static/_icons/notification.svg";
import vpn_icon from "static/_icons/vpn.svg";
import interfaces_icon from "static/_icons/interfaces.svg";
import {useRouter} from "next/navigation";

function Title() {
    return (
        <HStack>
            {/* Logo */}
            <LightMode>
                <Box rounded={6} bg={"vyos.gradient"}>
                    <Image src={white_logo} alt={"VyOS Logo"} padding={"5px"} width={7}/>
                </Box>
            </LightMode>
            {/* Title */}
            <VStack>
                <Text variant={"subheading"}>
                    router.example.com
                </Text>
                <HStack>
                    <Text variant={"subtitle"}>VyOS 1.4.0</Text>
                    <Image src={info_small} alt={"Info icon"}/>
                </HStack>
            </VStack>
        </HStack>
    )
}

interface ItemProps {
    icon: string | null;
    name: string;
    selected: boolean;

    page_url?: string;

    notifications?: number;
    // instead of having children as a prop, we can use different components for sections then nesting the items inside.
    // This makes it easier to manage the state of the children + the code becomes far cleaner because there is no insane nesting of buttons.
    /// because this is a child item, we ensure that there is no icon
    isParentItem?: boolean;
    isChildItem?: boolean
}

// to simplify the code we can use a parent component that will essentially just be a accordion that looks slightly like a button.
type ParentProps = {
    icon: string | null;
    name: string;
    children: React.JSX.Element;
}

// TODO: think about default open state for the parent component (if it should be open or closed), this is possible using the index prop
// TODO: put the accordion in the actual sidebar component
// TODO: remove the top and bottom dividers which come from the accordion.
// TODO: fix styling for the accordion + items
// TODO: add a notification prop to the parent component

function ParentSection({name, icon, children}: ParentProps) {
    return (
        <Accordion allowMultiple={true}>
            <AccordionItem>
                <AccordionButton>
                    <Item icon={icon} name={name} selected={false} isChildItem={false} isParentItem={true}/>
                </AccordionButton>
                <AccordionPanel>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

function Item({icon, name, selected, notifications, page_url, isChildItem = false, isParentItem = false}: ItemProps) {
    let theme_key = `sidebar_${(selected) ? (isChildItem ? 'child_selected' : 'selected') : (isChildItem ? 'child_normal' : 'normal')}`;

    const {getDisclosureProps, getButtonProps} = useDisclosure()

    const router = useRouter();


    const
        buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()


    if (!!page_url && !disclosureProps.hidden) {
        // navigate to page_url
        router.push(page_url);
    }

    let InnerContents: React.JSX.Element = (
        <HStack>
            {/* Icon */}
            {icon &&
                <Image src={icon} alt={`${name} Icon`} width={5} paddingRight={1.75}/>
            }
            {/* Name */}
            <Text variant={"sidebar_title"}
                  color={`containers.sidebar.${selected ? 'selected' : 'normal'}.text`}>{name}</Text>
            {/* Notification bubble */}
            {!!notifications &&
                <>
                    <Spacer/>
                    <Box bg={"red"} rounded={13}>
                        <Text variant={"sidebar_notification"} paddingX={"7px"}
                              paddingY={"3px"}>{notifications}</Text>
                    </Box>
                </>
            }
        </HStack>
    )

    return (
        <>
            <Container
                variant={theme_key}
                paddingY={"8px"}
                paddingX={isChildItem ? "32px" : "24px"}
                justifyContent={"flex-start"}
                rounded={selected ? 6 : 0}
            >
                {!isParentItem &&
                    <Box
                        bg={"transparent"}
                        // onClick={onOpen}
                        {...buttonProps}
                    >
                        {InnerContents}
                    </Box>
                }
                {!!isParentItem &&
                    // <Box
                    // >
                    InnerContents
                    // </Box>
                }
            </Container>
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


            <Item icon={interfaces_icon} name={"Network Interfaces"} selected={false}/>

            <Divider/>

            <Item icon={settings_icon} name={"Settings"} selected={true}/>

            <Divider/>

            <ParentSection name={"VPN"} icon={vpn_icon}>
                <Item icon={null} name={"IPsec"} selected={false} isChildItem={true}/>
            </ParentSection>

            <Divider/>

            <Item icon={info_small} name={"Login Page"} selected={false} page_url={"/"}/>
        </VStack>
    )
}