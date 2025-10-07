import React from 'react'
import { Box, Center, Grid, GridItem, Text, Link, Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { movePage } from '../modules/pageReducer';
import { motion } from 'framer-motion';
import JavaLogo from '../assets/Icons/java-4-logo-svgrepo-com.svg?react';
import JsLogo from '../assets/Icons/javascript-svgrepo-com.svg?react';
import ReactLogo from '../assets/Icons/react-svgrepo-com.svg?react';
import VueLogo from '../assets/Icons/vue-svgrepo-com.svg?react';
import TsLogo from '../assets/Icons/typescript-official-svgrepo-com.svg?react';

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
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Text fontSize={16}> 박병우 </Text>
                        <Text fontSize={16}> PACK BYEOUNGWOO </Text>
                        <Text fontSize={72}> Frontend Developer</Text>
                    </motion.div>
                </GridItem>

                <GridItem rowSpan={4} colSpan={4}
                    h={'100%'}
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
                        <Grid flex={1} templateRows="1fr 1fr 1fr">
                            <Text fontSize={"1.2rem"}>
                                <Heading marginTop={"1rem"}>이유</Heading>
                                많은 사람이 사용하는 서비스를 만들고 싶어서 개발자가 되기로 마음먹었습니다.<br />
                                그중에서도 사용자가 직접 다루며 직관적으로 결과물을 보여주는 것에 흥미를 느껴 Front-end 개발자가 되었습니다.<br />
                            </Text>
                            <Text fontSize={"1.2rem"}>
                                <Heading marginTop={"1rem"}>목표</Heading>
                                사람들이 쉽게 사용할 수 있는 UI와 성능 최적화를 거친 서비스를 만들고 싶습니다.<br />
                                협업 과정에서 디자이너나 다른 개발자와의 소통이 원활하도록 넓은 부분에서 실력을 향상시키고 싶습니다.<br />
                            </Text>
                            <Text fontSize={"1.2rem"}>
                                <Heading marginTop={"1rem"}>노력</Heading>
                                지속적인 개발역량 향상을 위해 스터디와 인터넷 강의를 활용하고,<br />
                                최신 트랜드와 기술에 뒤쳐지지 않도록 컨퍼런스와 공식 기술 블로그를 찾아보고 있습니다.<br />
                                제가 놓치는 부분을 찾기 위해 피드백을 적극적으로 받아들이고 있습니다.<br />
                            </Text>
                        </Grid>
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
                        transition={{ duration: 0.5, delay: 0.3 }}
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
                                <JsLogo width={'100%'} height={'100%'} />
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
                            Git <br />
                            <Link fontSize={16} as='a' href="https://github.com/bottler3123"> https://github.com/bottler3123 </Link>
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
                                whileTap={{ scale: 0.95 }}
                            >
                                <Center
                                    display={'flex'}
                                    justifyContent={'left'}
                                    margin={6}
                                    fontWeight={'Bold'}
                                >
                                    Portfolio
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