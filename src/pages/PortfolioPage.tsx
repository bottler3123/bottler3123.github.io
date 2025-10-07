import { Box, Button, Center, Grid, GridItem, Image, Text, useDisclosure, Link, Dialog, Portal } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { movePage } from '../modules/pageReducer';
import { motion } from 'framer-motion';
import Habitat from './project/Habitat';
import Etjude from './project/Etjude';
import Enjoytrip from './project/Enjoytrip';


function PortfolioPage() {
    const dispatch = useDispatch();
    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Center h="100vh">
            <Grid
                templateRows='repeat(10, 1fr)'
                templateColumns='repeat(9, 1fr)'
                gap={4}
                zIndex='1'
                h='80vh'
                w='80vw'
            >
                <GridItem rowSpan={2} colSpan={7} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Box
                            w={'100%'} h={'100%'}
                            boxShadow='md' rounded='md'
                            bg={'white'}
                            color="black"
                            fontFamily="GmarketSans" fontWeight="bold" fontSize='2em'
                            p={'1rem'}
                        >
                            <Text fontSize={'2vw'

                            } >Project</Text>
                            <Text fontSize={'1vw'} >지금까지 작업한 프로젝트를 정리했습니다.</Text>
                        </Box>
                    </motion.div>
                </GridItem>
                <GridItem
                    rowSpan={2} colSpan={2}
                    onClick={() => dispatch(movePage("main"))}>
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Box
                            w={'100%'} h={'100%'}
                            boxShadow='md' rounded='md'
                            p={'1rem'}
                            bg={'#f5fcfc'}
                        >
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                            >
                                <Text
                                    fontSize={'2vw'}
                                    fontWeight={'Bold'}
                                >
                                    Profile
                                </Text>
                            </motion.button>
                        </Box>
                    </motion.div>
                </GridItem>
                <GridItem rowSpan={8} colSpan={3} >
                    <Habitat />
                </GridItem>
                <GridItem rowSpan={8} colSpan={3}>
                    <Enjoytrip />
                </GridItem>
                <GridItem rowSpan={8} colSpan={3} >
                    <Etjude />
                </GridItem>
            </Grid>
        </Center>
    )
}

export default PortfolioPage