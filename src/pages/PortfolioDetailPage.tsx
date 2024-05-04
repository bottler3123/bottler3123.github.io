import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { RootState } from '../index';

function PortfolioDetailPage() {
    const bgnum = useSelector((state : RootState) => state.background.number);
  return (
    <Center h="100vh">
        <Grid
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(10, 1fr)'
            gap={4}
            zIndex='1'
            h='80vh'
            w='80vw'
        >
            <GridItem rowSpan={3} colSpan={10} bg='gray'>
                제목
                {bgnum}
            </GridItem>
            <GridItem rowSpan={7} colSpan={6} bg='gray'>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={4} bg='gray' borderColor='cyan' border={20}>
                내용
            </GridItem>
            <GridItem rowSpan={3} colSpan={4} bg='gray'>
                내용
            </GridItem>
        </Grid>
    </Center>
  )
}

export default PortfolioDetailPage