import React from 'react'
import { Button, Center, Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function MainPage() {
    const navigate = useNavigate();

    return (
        <Center h="100vh">
            <Grid
                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                h='80vh'
                w='80vw'
            >
                <GridItem rowSpan={2} colSpan={6} bg='gray'>
                    제목
                </GridItem>
                <GridItem rowSpan={4} colSpan={4} bg='gray'>
                    내용
                </GridItem>
                <GridItem rowSpan={3} colSpan={2} bg='gray'>
                    <Button  
                    >
                        hihi
                    </Button>
                </GridItem>
                <GridItem 
                    rowSpan={1} colSpan={2} bg='gray'
                    onClick={() => navigate('/portfolio')}
                >
                    이동
                </GridItem>
            </Grid>
        </Center>
    )
}

export default MainPage