import React from 'react'
import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { movePage } from '../modules/pageReducer';
import { motion } from 'framer-motion';
import { ReactComponent as JavaLogo } from '../assets/java-4-logo-svgrepo-com.svg';
import { ReactComponent as JsLogo } from '../assets/javascript-svgrepo-com.svg';
import { ReactComponent as ReactLogo } from '../assets/react-svgrepo-com.svg';
import { ReactComponent as VueLogo } from '../assets/vue-svgrepo-com.svg';
import { ReactComponent as TsLogo } from '../assets/typescript-official-svgrepo-com.svg';

function MainPage() {
    const dispatch = useDispatch();
    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };

    return (
        <Center h="100vh">
            <Grid
                pos="fixed" zIndex={1}
                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                h='80vh'
                w='80vw'
            >

                <GridItem
                    rowSpan={2} colSpan={6}
                    bg='#ffffff'
                    boxShadow='md' p='6' rounded='md'
                    onClick={() => console.log("check")}
                >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Text fontSize={16}> PACK BYEOUNGWOO </Text>
                            <Text fontSize={72}> Can do it Start Now</Text>
                        </motion.div>
                </GridItem>

                <GridItem rowSpan={4} colSpan={4}
                    bg='#ffffff'
                    boxShadow='md' p='6' rounded='md'
                    fontSize='2em' fontWeight={64} 
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            <Text>
                                안녕하세요! Front-End 개발자 박병우입니다.<br/>
                                저는 지속적인 도전과 끊임없는 발전으로 저를 갈고 닦아 <br/>
                                미래에 세계를 대표하는 서비스를 만든 일원이 되겠습니다.
                            </Text>
                        </motion.div>
                </GridItem>

                <GridItem rowSpan={3} colSpan={2}
                    bg='#ffffff'
                    boxShadow='md' p='6' rounded='md'
                    fontSize='4em' fontWeight={64}
                    >
                        <motion.div
                            style={{ width: '100%', height: '100%' }}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Box fontSize={32} fontWeight={'bold'} marginBottom={'0.5em'}>
                                Skills
                            </Box>
                            <Grid
                                templateColumns='repeat(5, 1fr)'
                                gap={'5%'}
                                >
                                    <GridItem>
                                        <JavaLogo width={'100%'} height={'100%'} />
                                    </GridItem>
                                    <GridItem>
                                        <JsLogo width={'100%'} height={'100%'}/>
                                    </GridItem>
                                    <GridItem>
                                        <ReactLogo width={'100%'} height={'100%'} />
                                    </GridItem>
                                    <GridItem>
                                        <VueLogo width={'100%'} height={'100%'} />
                                    </GridItem>
                                    <GridItem>
                                        <TsLogo width={'100%'} height={'100%'} />
                                    </GridItem>
                            </Grid>
                            <Box fontSize={28} fontWeight={'bold'} marginTop={'5%'}>
                                Git <br/>
                                <Text fontSize={16} as='a' href="https://github.com/bottler3123"> https://github.com/bottler3123 </Text>
                            </Box>
                        </motion.div>
                </GridItem>

                <GridItem 
                    rowSpan={1} colSpan={2}
                    onClick={() => dispatch(movePage("portfolio"))}
                    >
                        <motion.div
                            style={{ width: '100%', height: '100%' }}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.5, delay: 0.0 }}
                            
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                bg='#ffffff'
                                boxShadow='md' rounded='md'
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <motion.button
                                    style={{ width: '100%', height: '100%', padding: 10 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Center
                                        w='50%'
                                        fontSize={32} fontWeight={'Bold'}
                                    >
                                        Go Portfolio
                                    </Center>
                                </motion.button>
                            </Box>
                        </motion.div>
                </GridItem>
            </Grid>
        </Center>
    )
}

export default MainPage