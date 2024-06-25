// fonts
import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import '@fontsource-variable/archivo';
import '@fontsource-variable/work-sans';

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
        semanticTokens: {
            colors: {
                login_background: {
                    _light: "#F6F8FA",
                    _dark: "#303237"
                },
                login_subtitle: {
                    _light: "#676D7C",
                    _dark: "#A3AEB3"
                },
                login_form_box: {
                    _light: "#FFFFFF",
                    _dark: "#202027"
                },
                login_form_input: {
                    _light: "#FFFFFF",
                    _dark: "rgba(103,109,124,0.5)"
                },
                primary_button: {
                    bg: {
                        default: "#ff9101"
                    },
                    text: {
                        _light: "white",
                        _dark: "black"
                    },
                }
            }
        },
        components: {
            Button: {
                variants: {
                    primary: {
                        bg: "primary_button.bg",
                        color: "primary_button.text"
                    }
                }
            }
        },
        themeConfig,
    },
);


export default theme;