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
    Accordion, AccordionButton, AccordionPanel, AccordionItem, Container, AccordionIcon
} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import React from "react";
import {useRouter} from "next/navigation";
import {IconProps} from "@chakra-ui/icons";
// assets
import white_logo from "static/_logos/white.svg";
import {
    DashboardIcon,
    InfoSmallIcon,
    InterfacesIcon,
    NotificationIcon,
    SettingsIcon,
    VPNIcon
} from "@/components/icons";

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
            <VStack justify={"left"}>
                <Text variant={"subheading"}>
                    router.example.com
                </Text>
                <HStack>
                    <Text variant={"subtitle"}>VyOS 1.4.0</Text>
                    <InfoSmallIcon/>
                </HStack>
            </VStack>
        </HStack>
    )
}

interface ItemProps {
    Icon: React.FC<IconProps> | null;
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
    Icon: React.FC<IconProps> | null;
    name: string;
    children: React.JSX.Element;
}

// TODO: think about default open state for the parent component (if it should be open or closed), this is possible using the index prop
// TODO: remove the top and bottom dividers which come from the accordion.
// TODO: fix styling for the accordion + items
// -> Fix Styling for Accordion Arrow ✅
// TODO: add a notification prop to the parent component

function ParentSection({name, Icon, children}: ParentProps) {
    return (

        <AccordionItem border={"none"} role={"group"}>
            <AccordionButton>
                <HStack>
                    <Item Icon={Icon} name={name} selected={false} isChildItem={false}
                          isParentItem={true}/>
                    <Spacer/>
                </HStack>
                <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>
                {children}
            </AccordionPanel>
        </AccordionItem>
    )
}

function Item({
                  Icon,
                  name,
                  selected,
                  notifications,
                  page_url,
                  isChildItem = false,
                  isParentItem = false
              }: ItemProps) {
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
            {Icon &&
                // <Image src={icon} alt={`${name} Icon`} width={5} paddingRight={1.75}
                //        _groupHover={{bg: "orange"}}/>
                <Icon color={"sidebar_item_icon_normal"} _groupHover={{color: "sidebar_item_icon_hovered"}}
                      paddingRight={1.75} width={5}/>
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
                role={"group"}
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

            <Item Icon={DashboardIcon} name={"Dashboard"} selected={false}/>

            <Divider variant={"sidebar"}/>

            {/* Sidebar items */}
            <Item Icon={NotificationIcon} name={"Alerts"} selected={false} notifications={3}/>

            {/* Sidebar Divider + Settings */}

            <Accordion allowMultiple={true}>

                <Item Icon={InterfacesIcon} name={"Network Interfaces"} selected={false}/>

                <Divider variant={"sidebar"}/>

                <Item Icon={SettingsIcon} name={"Settings"} selected={true}/>

                <Divider variant={"sidebar"}/>

                <ParentSection name={"VPN"} Icon={VPNIcon}>
                    <Item Icon={null} name={"IPsec"} selected={false} isChildItem={true}/>
                </ParentSection>

                <Divider variant={"sidebar"}/>

                <Item Icon={InfoSmallIcon} name={"Login Page"} selected={false} page_url={"/"}/>
            </Accordion>
        </VStack>
    )
}