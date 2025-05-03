import React from 'react'
import { Box, Button, Center, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { movePage } from '../modules/pageReducer';
import { motion } from 'framer-motion';
import mangwol from '../assets/mangwol.png';
import bottle from '../assets/free-icon-milk-684631.png';
// import { ReactComponent as Etjude } from '../assets/Etjude.svg';
// import { ReactComponent as JavaLogo } from '../assets/java-icon.svg';
// import { ReactComponent as FlutterLogo } from '../assets/flutterio-icon.svg';
// import { ReactComponent as DartLogo } from '../assets/dartlang-icon.svg';
// import { ReactComponent as SpringLogo } from '../assets/springio-icon.svg';
// import { ReactComponent as FBLogo } from '../assets/firebase-icon.svg';
// import { ReactComponent as ReactLogo } from '../assets/reactjs-icon.svg';
// import { ReactComponent as TsLogo } from '../assets/typescriptlang-icon.svg';
import bottler from '../assets/bottle_portfolio.png';


function PortfolioPage() {
    const dispatch = useDispatch();
    const { isOpen: isHabitat, onOpen: openHabitat, onClose: closeHabitat } = useDisclosure();
    const { isOpen: isBottle, onOpen: openBottle, onClose: closeBottle } = useDisclosure();
    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };

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
            <GridItem rowSpan={2} colSpan={8} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.7}}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'white'}
                                color="white"
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Box
                                    m={'0.4em'}
                                    flexDirection={'column'}
                                    color={'black'}
                                >
                                    <Text fontSize={42} letterSpacing={'0.05em'} >Project</Text>
                                    <Text fontSize={16} fontWeight={'medium'}>제가 작업한 프로젝트입니다</Text>
                                </Box>
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
                        transition={{ duration: 0.5, delay: 0.6}}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#f5fcfc'}
                                overflow={'hidden'}
                            >
                                <motion.button
                                    style={{ width: '100%', height: '100%' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Center
                                        fontSize={32}
                                        fontWeight={'bold'}
                                    >
                                        Go Profile
                                    </Center>
                                </motion.button>
                            </Box>
                        </motion.div>  
            </GridItem>
            <GridItem rowSpan={4} colSpan={3} onClick={openHabitat}>
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.5}}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#3366FF'}
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Center>
                                    <Text letterSpacing={'0.5em'}> HabitAt </Text>
                                </Center>
                                <motion.div
                                    style={{ width: '100%', height: '80%' }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >   
                                    <Center>
                                        <Image src={mangwol} w={'80%'}/>
                                    </Center>
                                </motion.div>
                            </Box>
                        </motion.div> 
            </GridItem>
            <GridItem rowSpan={4} colSpan={2} onClick={openBottle} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.4}}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#fffefa'}
                                color="white"
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Text color={'gray'} marginLeft={4}>
                                    Bottle
                                </Text>
                                <motion.div
                                    style={{ width: '100%', height: '80%' }}
                                    whileHover={{ rotate: [0, 10, -10, 0] }}
                                    animate={{ rotate: 0 }}
                                >
                                    <Center>
                                        <Image src={bottle} w={'70%'}/>
                                    </Center>
                                </motion.div>
                            </Box>
                        </motion.div>  
            </GridItem>
            <GridItem rowSpan={4} colSpan={5}  >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#f6f5fc'}
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Center
                                    w='100%'
                                    padding={4}
                                    marginTop={'25%'}
                                    fontSize={32}
                                    color={'gray'}
                                    display={'flex'}
                                    justifyContent={'flex-end'}
                                >
                                    To be Continue...
                                </Center>
                            </Box>
                        </motion.div>  
            </GridItem>
            <GridItem rowSpan={4} colSpan={5} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#f5fcf5'}
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Center
                                    w='100%'
                                    padding={4}
                                    marginTop={'25%'}
                                    fontSize={32}
                                    color={'gray'}
                                    display={'flex'}
                                    justifyContent={'flex-end'}
                                >
                                    To be Continue...
                                </Center>
                            </Box>
                        </motion.div>  
            </GridItem>
            <GridItem rowSpan={4} colSpan={2} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#b6c7e3'}
                                color="white"
                                fontWeight="bold" fontSize='2em'
                                overflow={'hidden'}
                            >
                                <Center
                                    w='50%'
                                    fontSize={32}
                                >
                                </Center>
                            </Box>
                        </motion.div>  
            </GridItem>
            <GridItem rowSpan={4} colSpan={3} >
                    <motion.div layout
                        style={{ width: '100%', height: '100%' }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0 }}
                        >
                            <Box
                                w={'100%'} h={'100%'}
                                boxShadow='md' rounded='md'
                                bg={'#ffeff2'}
                                overflow={'hidden'}
                            >
                                <motion.div
                                    style={{ width: '100%', height: '100%' }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Center h={'100%'}>
                                        {/* <Etjude width={'50%'} /> */}
                                    </Center>
                                </motion.div>
                            </Box>
                        </motion.div>  
            </GridItem>
        </Grid>

        <Modal isOpen={isHabitat} onClose={closeHabitat} size={'full'}>
            <ModalOverlay />
            <ModalContent padding={'4%'}>
                <ModalHeader paddingStart={10}>
                    <Text fontSize={52} letterSpacing={'0.1em'}> HabitAt </Text>
                </ModalHeader>
                <ModalBody>
                <Center h={'60vh'}>
                    <Box w={'50%'} h={'100%'} boxShadow='md' rounded='md' margin={5}>
                        <Box margin={'2%'}>
                            <Image src={mangwol} />

                        </Box>
                    </Box>
                    <Box w={'50%'} h={'100%'} flexDirection={'column'} bg={'#fcfcfc'} rounded='md' p={'0.5%'}>
                        <Box h={'80%'} p={'2%'}>
                            <Text fontWeight={'bold'} fontSize={18}> 스마트 코스터를 활용하여 실시간 물 섭취량을 측정 및 기록하고 리마인더 & 리워드 기능을 제공하는 서비스</Text>
                            <Text>
                                App과 스마트 코스터를 연동하여 내가 마신 물의 양을 측정합니다. <br/>
                                Flutter를 이용해 App을 제작했습니다. <br/>
                                블루투스를 통해 연동되도록 하였고 그 외에 마신 물의 양을 식물의 성장으로 보여주는 시스템 <br/>
                                친구가 마신 물의 양을 확인하는 시스템, 코스터 말고도 수동으로 마신 물의 양을 보여주는 기능을 넣었습니다.
                            </Text>
                            <Box fontSize={28} fontWeight={'bold'} marginTop={'5%'}>
                                Git
                            </Box>
                            <Text as='a' href="https://github.com/bottler3123/HabitAt"> https://github.com/bottler3123/HabitAt </Text>
                            <Box fontSize={28} fontWeight={'bold'} marginBottom={'0.5em'}>
                                Skills
                            </Box>
                            <Grid
                                templateColumns='repeat(5, 1fr)'
                                gap={'5%'}
                                paddingRight={'50%'}
                                >
                                    {/* <GridItem>
                                        <DartLogo width={'100%'} />
                                    </GridItem>
                                    <GridItem >
                                        <FlutterLogo width={'100%'} />
                                    </GridItem>
                                    <GridItem >
                                        <JavaLogo width={'100%'} />
                                    </GridItem>
                                    <GridItem >
                                        <SpringLogo width={'100%'} />
                                    </GridItem>
                                    <GridItem >
                                        <FBLogo width={'100%'} />
                                    </GridItem> */}
                            </Grid>
                        </Box>
                        <Box h={'20%'} display={'flex'} justifyContent="flex-end" paddingRight={'2%'}>
                            <Button w={'20%'} h={'50%'} colorScheme='blue' onClick={closeHabitat} fontSize={22}>
                                목록
                            </Button>
                        </Box>
                    </Box>
                </Center>
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>

        <Modal isOpen={isBottle} onClose={closeBottle} size={'full'}>
            <ModalOverlay />
            <ModalContent padding={'4%'}>
                <ModalHeader paddingStart={10}>
                    <Text fontSize={52} letterSpacing={'0.1em'}> Bottler portfolio </Text>
                </ModalHeader>
                <ModalBody>
                <Center h={'60vh'}>
                    <Box w={'50%'} h={'100%'} boxShadow='md' rounded='md' margin={5}>
                        <Box margin={'2%'}>
                            <Image src={bottler} />

                        </Box>
                    </Box>
                    <Box w={'50%'} h={'100%'} flexDirection={'column'} bg={'#fcfcfc'} rounded='md' p={'0.5%'}>
                        <Box h={'80%'} p={'2%'}>
                            <Text fontWeight={'bold'} fontSize={18}> 나의 포트폴리오를 보여주는 블로그 형식 사이트</Text>
                            <Text>
                                Github.io를 사용해 만든 포트폴리오 사이트입니다. <br/>
                                React와 typescript를 사용했습니다. <br/>
                                디자인 요소로 Chakra UI를 사용했고 애니메이션을 flamer motion을 썻습니다. <br/>
                                앞으로 추가되는 프로젝트에 따라 다양한 기능을 넣을 예정입니다.
                            </Text>
                            <Box fontSize={28} fontWeight={'bold'} marginTop={'5%'}>
                                Git
                            </Box>
                            <Text as='a' href="https://github.com/bottler3123/bottler3123.github.io"> https://github.com/bottler3123/bottler3123.github.io </Text>
                            <Box fontSize={28} fontWeight={'bold'} marginBottom={'0.5em'}>
                                Skills
                            </Box>
                            <Grid
                                templateColumns='repeat(5, 1fr)'
                                gap={'5%'}
                                paddingRight={'50%'}
                                >
                                    <GridItem>
                                        {/* <ReactLogo width={'100%'} /> */}
                                    </GridItem>
                                    <GridItem >
                                        {/* <TsLogo width={'100%'} /> */}
                                    </GridItem>
                            </Grid>
                        </Box>
                        <Box h={'20%'} display={'flex'} justifyContent="flex-end" paddingRight={'2%'}>
                            <Button w={'20%'} h={'50%'} colorScheme='blue' onClick={closeBottle} fontSize={22}>
                                목록
                            </Button>
                        </Box>
                    </Box>
                </Center>
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Center>
  )
}

export default PortfolioPage