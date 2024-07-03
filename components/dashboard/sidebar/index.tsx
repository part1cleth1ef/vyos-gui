'use client'
import {Box, Button, Divider, HStack, LightMode, Spacer, Text, VStack, useDisclosure} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
// assets
import white_logo from "static/_logos/white.svg";
import info_small from "static/_icons/info_small.svg";
import settings_icon from "static/_icons/settings.svg";
import notification from "static/_icons/notification.svg";
import down_arrow from "static/_icons/down_arrow.svg";

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
    notifications?: number;
    // children?: ReactNode;
    children?: ManyChildProps;
    isSubItem?: boolean
}

interface ChildProps {
    key: number;
    name: string;
}

type ManyChildProps = ChildProps[]

function Item({icon, name, selected, notifications, children, isSubItem = false}: ItemProps) {
    let theme_key = `sidebar_${(selected && !children) ? (isSubItem ? 'child_selected' : 'selected') : (isSubItem ? 'child_normal' : 'normal')}`;

    const {getDisclosureProps, getButtonProps} = useDisclosure()


    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()

    if (!!children) {
        for (let i = 0; i < children.length; i++) {
            console.log(children[i].name)
        }
    }

    return (
        <>
            <Button
                variant={theme_key}
                paddingY={"8px"}
                paddingX={isSubItem ? "32px" : "24px"}
                justifyContent={"flex-start"}
                // onClick={onOpen}
                {...buttonProps}
            >
                {/* Icon */}
                {icon &&
                    <Image src={icon} alt={`${name} Icon`} width={5} paddingRight={1.75}/>
                }
                {/* Name */}
                <Text variant={"sidebar_title"}
                      color={`buttons.sidebar.${selected ? 'selected' : 'normal'}.text`}>{name}</Text>
                {(!children && !!notifications) &&
                    <>
                        <Spacer/>
                        <Box bg={"red"} rounded={13}>
                            <Text variant={"sidebar_notification"} paddingX={"7px"}
                                  paddingY={"3px"}>{notifications}</Text>
                        </Box>
                    </>
                }
                {(children && !notifications) &&
                    <>
                        <Spacer/>
                        <Box>
                            <Image src={down_arrow} alt={"Down Arrow"} padding={"5px"} width={3}/>
                        </Box>
                    </>
                }
            </Button>
            {children &&
                <VStack bg={"sidebar_children_bg"}
                        paddingY={"8px"}
                        roundedBottom={6}
                        paddingX={"0px"}
                        {...disclosureProps}
                >
                    {children.map((child, index) => (
                        <Item icon={null} name={child.name} selected={index == 0} isSubItem={true}/>
                    ))}
                </VStack>
            }
        </>
    )
}

export default function Sidebar() {

    const children = [
        {name: "sub-item", key: 1},
        {name: "sub-item-2", key: 2},
    ] as ManyChildProps

    return (
        <VStack bg={"background"}>
            <Title/>

            {/* Sidebar items */}
            <Item icon={notification} name={"Alerts"} selected={false} notifications={3}/>

            {/* Sidebar Divider + Settings */}
            <Divider/>

            <Item icon={settings_icon} name={"Settings"} selected={true}/>

            <Divider/>

            <Item icon={info_small} name={"test_sd"} selected={false} children={children}>
                {/*<Item icon={settings_icon} name={"sub-item"} selected={true}>*/}
                {/*    /!*<Item icon={info_small} name={"sub-sub-item"} selected={false}/>*!/*/}
                {/*</Item>*/}
            </Item>
        </VStack>
    )
}