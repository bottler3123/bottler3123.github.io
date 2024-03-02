import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'

function MainPage() {
  return (
    <Center h="100vh">
        <Grid
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            w='100vh'
        >
            <GridItem rowSpan={1} colSpan={6} bg='gray'>
                제목
            </GridItem>
            <GridItem rowSpan={4} colSpan={4} bg='gray'>
                내용
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='gray'>
                스택
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='gray'>
                이동
            </GridItem>
        </Grid>
    </Center>
  )
}

export default MainPage