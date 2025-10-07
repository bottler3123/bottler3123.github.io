import { createSystem, defaultConfig } from "@chakra-ui/react"
import '../index.css';


export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'NotoSans' },
        body: { value: 'NotoSans', },
      },
    },
  },
})

export default system