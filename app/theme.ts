// fonts
import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import '@fontsource-variable/archivo';
import '@fontsource-variable/work-sans';

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme(
    {
        colors: {
            vyos: {
                main: "#ff9101",
                gradient: "linear-gradient(135deg, #FFBF12 0%, #FF9000 100%)",
            },
        },
        semanticTokens: {
            colors: {
                login_background: {
                    _light: "#F6F8FA",
                    _dark: "#303237"
                },
                subtitle: {
                    _light: "#676D7C",
                    _dark: "#A3AEB3"
                },
                subheading: {
                    _light: "#3A3E47",
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
                        default: "vyos"
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
            },
            Text: {
                variants: {
                    subheading: {
                        color: "subheading",
                        fontFamily: "Work Sans Variable",
                        fontWeight: "semibold",
                        fontSize: "14px",
                        letterSpacing: "-0.04em",
                    },
                    subtitle: {
                        color: "subtitle",
                        fontFamily: "Work Sans Variable",
                        fontWeight: "medium",
                        fontSize: "14px",
                        letterSpacing: "-0.04em",
                    }
                }
            },
        },
        themeConfig,
    },
);


export default theme;