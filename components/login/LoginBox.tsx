'use client'
import LoginForm from "@/components/login/form";
import {Stack, Text} from "@chakra-ui/react";

export function LoginBox() {
    return (
        <Stack
            borderRadius="4px"
            borderColor="Grey Light"
            borderStartWidth="1px"
            borderEndWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            width="449px"
            height="382px"
            maxWidth="100%"
            bg={"login_form_box"}
            boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.08)"
            
            zIndex={2}

            padding={8}
        >
            <Text
                fontFamily="Archivo Variable"
                fontWeight="semibold"
                fontSize="32px"
                letterSpacing="-0.5px"
                color="Grey Dark"
            >
                Log In
            </Text>

            <LoginForm/>
        </Stack>
    )
}

export function MobileLoginBox() {
    return (
        <Stack
            borderRadius="4px"
            borderColor="Grey Light"
            borderStartWidth="1px"
            borderEndWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            width="375px"
            height="498px"
            maxWidth="100%"
            boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.08)"
            
            padding={8}
        >
            <Text
                fontFamily="Archivo Variable"
                fontWeight="semibold"
                fontSize="24px"
                letterSpacing="-0.5px"
                color="Grey Dark"
                // paddingTop={5}
            >
                Login
            </Text>
            <LoginForm/>
        </Stack>
    )
}