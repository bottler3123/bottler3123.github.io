import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <Center h="100vh">
        <Grid
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(10, 1fr)'
            gap={4}
            h='80vh'
            w='80vw'
        >
            <GridItem rowSpan={2} colSpan={8} bg='gray'>
                제목
            </GridItem>
            <GridItem 
                rowSpan={2} colSpan={2} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={3} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={2} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={5} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={5} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={2} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
            <GridItem rowSpan={4} colSpan={3} bg='gray' onClick={() => navigate('/portfoliodetail')}>
                내용
            </GridItem>
        </Grid>
    </Center>
  )
}

export default PortfolioPage