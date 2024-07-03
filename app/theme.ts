// fonts
import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import '@fontsource-variable/archivo';
import '@fontsource-variable/work-sans';

const themeConfig: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
};

const theme = extendTheme(
    {
        colors: {
            vyos: {
                main: "#ff9101",
                gradient: "linear-gradient(135deg, #FFBF12 0%, #FF9000 100%)",
            },
            _black: "#202027",
        },
        semanticTokens: {
            colors: {
                // multi-page colors
                background: {
                    _light: "#F6F8FA",
                    _dark: "#303237"
                },

                // login page colors

                login_form_box: {
                    _light: "#FFFFFF",
                    _dark: "_black"
                },
                login_form_input: {
                    _light: "#FFFFFF",
                    _dark: "rgba(103,109,124,0.5)"
                },

                // sidebar specific colors
                sidebar_children_bg: {
                    _light: "rgba(32, 32, 39, 0.05)",
                    _dark: "rgba(32, 32, 39, 0.35)",
                },
                // generics

                subtitle: {
                    _light: "#676D7C",
                    _dark: "#A3AEB3"
                },

                subheading: {
                    _light: "#3A3E47",
                    _dark: "white"
                },
                buttons: {
                    primary: {
                        bg: {
                            default: "vyos.main"
                        },
                        text: {
                            _light: "white",
                            _dark: "black"
                        },
                    },
                    sidebar: {
                        selected: {
                            bg: {
                                _light: "white",
                                _dark: "_black"
                            },
                            text: {
                                _light: "_black",
                                _dark: "white"
                            }
                        },
                        normal: {
                            bg: {
                                _light: "transparent",
                                _dark: "_black"
                            },
                            text: {
                                _light: "subheading",
                                _dark: "white"
                            }
                        }
                    },
                },
            }
        },
        components: {
            Button: {
                variants: {
                    primary: {
                        bg: "buttons.primary.bg",
                        color: "buttons.primary.text"
                    },

                    // sidebar related
                    sidebar_selected: {
                        bg: "buttons.sidebar.selected.bg",
                        color: "buttons.sidebar.selected.text",
                        width: 224,
                        height: 38,
                    },
                    sidebar_normal: {
                        bg: "buttons.sidebar.normal.bg",
                        color: "buttons.sidebar.normal.text",
                        width: 224,
                        height: 38,
                    },
                    sidebar_child_selected: {
                        bg: "buttons.sidebar.selected.bg",
                        color: "buttons.sidebar.selected.text",
                        width: 208,
                        height: 38,
                    },
                    sidebar_child_normal: {
                        bg: "buttons.sidebar.normal.bg",
                        color: "buttons.sidebar.normal.text",
                        width: 208,
                        height: 38,
                    },
                },
            },
            Text: {
                variants: {
                    sidebar_title: {
                        color: "subheading",
                        fontFamily: "Archivo Variable",
                        fontWeight: "semibold",
                        fontSize: "16px",
                        letterSpacing: "-0.04em",
                    },
                    sidebar_notification: {
                        color: "white",
                        fontFamily: "Archivo Variable",
                        fontWeight: "semibold",
                        fontSize: "12px",
                        letterSpacing: "-0.04em",
                    },

                    // generics

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
                    },
                }
            },
        },
        themeConfig,
    },
);


export default theme;