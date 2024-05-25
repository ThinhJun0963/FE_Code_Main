import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", 
      },
    },
  },
})

export default theme