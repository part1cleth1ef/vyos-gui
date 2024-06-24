'use client'
import {theme as baseTheme, ChakraProvider, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';

// fonts
import '@fontsource-variable/archivo';
import '@fontsource-variable/work-sans';

const theme = extendTheme({
// set primary color
    colors: {
        vyos: {
            500: '#ff9101',
            main: 'white',
        }
    },
    
}, withDefaultColorScheme({
    colorScheme: 'vyos',
    components: ['Button']
}));


export function Providers({children}: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}