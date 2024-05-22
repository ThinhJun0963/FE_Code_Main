import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // For example
      },
    },
  },
})

export default theme