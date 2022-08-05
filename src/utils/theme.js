// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
        darkGray: '#83869A', //dark grey (paragraph)
        lightGray: '#EEEEEE', //light grey (background)
        darkBlue: '#13183F', //dark blue (button, footer background)
        lightBlue: '#666CA3', //light blue (navbar button - hover)
        white: '#FFFFFF', //white (Text in Courses and Footer)
        blue: '#4851FF',
        pink: '#F02AA6',
        red: '#F02AA6',
        orange: '#FF6F48'
    },
  },
})

export default theme
