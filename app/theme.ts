// fonts
import {extendTheme, ThemeConfig, withDefaultColorScheme} from '@chakra-ui/react';
import '@fontsource-variable/archivo';
import '@fontsource-variable/work-sans';

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
// set primary color
        colors: {
            vyos: {
                500: "#ff9101",
                main: "#ffffff",
            }
        },
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
                "login_form_input": {
                    _light: "#FFFFFF",
                    _dark: "rgba(103,109,124,0.5)"
                }
            }
        },
        themeConfig,
    },
    withDefaultColorScheme({
        colorScheme: 'vyos',
        components: ['Button']
    })
);


export default theme;