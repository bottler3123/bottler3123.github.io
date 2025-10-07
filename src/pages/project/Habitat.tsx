import { Box, Center, Text, Dialog, Image, Portal, Link, Grid, GridItem, Button, Heading, Icon, Float, Flex } from "@chakra-ui/react"
import { Carousel } from "@/components/ui/carousel"
import { motion } from 'framer-motion';
import FlutterLogo from '@/assets/Icons/flutterio-icon.svg?react';
import DartLogo from '@/assets/Icons/dartlang-icon.svg?react';
import FBLogo from '@/assets/Icons/firebase-icon.svg?react';
import habitatbanner from '@/assets/HabitAt/habitat.png';
import habitatLogo from '@/assets/HabitAt/habitatLogo.png';
import { LuChevronLeft, LuChevronRight, LuDot } from "react-icons/lu";
import { RiCheckboxBlankCircleFill, RiCloseLargeFill } from "react-icons/ri";
import images from "@/assets/HabitAt/images.js";

const iconStacks = [FlutterLogo, DartLogo, FBLogo];

function Habitat() {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Dialog.Root size={'cover'}>
      <Dialog.Trigger asChild>
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
            bg={'#eefdd6'}
            fontWeight="bold" fontSize='2em'
            overflow={'hidden'}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <motion.div
              style={{ width: '100%', height: '50%' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Center>
                <Image src={habitatLogo} w={"80%"}/>
              </Center>
            </motion.div>
          </Box>
        </motion.div>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content padding={'4%'} w={'80%'} h={'80%'}>
            <Dialog.Body alignItems={"start"}>
              <Dialog.Title margin={'0.5vh'} position={"relative"}>
                <Float>
                  <Dialog.ActionTrigger asChild>
                    <Button backgroundColor={"transparent"}>
                      <Icon as={RiCloseLargeFill} boxSize={"3vh"} color={"black"} />
                    </Button>
                  </Dialog.ActionTrigger >
                </Float>
                <Text fontWeight={'bold'} fontSize={"3rem"} lineHeight={"3rem"} marginBottom={"1vh"}>물 섭취 습관 관리 App, Habit@</Text>
                <Text fontSize={"1rem"} marginBottom={"0.5rem"} lineHeight={"1rem"}>
                  스마트 컵받침으로 실시간 물 섭취량을 측정 및 기록하는 IoT 연동 App 서비스입니다. <br />
                  리마인더와 경험치 리워드를 제공하여 쉽게 물 섭취 습관을 도와줍니다.
                </Text>
              </Dialog.Title>
              <Flex gap={'2%'}>
                <Carousel.Root loop={true} allowMouseDrag={true} defaultPage={0} slideCount={images.length} spacing={"10%"}>
                  <Carousel.ItemGroup>
                    {images.map((image: any, index: any) => (
                      <Carousel.Item key={index} index={index}>
                        <Image src={image} />
                      </Carousel.Item>
                    ))}
                  </Carousel.ItemGroup>
                  <Carousel.Control >
                    <Carousel.PrevTrigger>
                      <LuChevronLeft size={"100%"} />
                    </Carousel.PrevTrigger>
                    <Carousel.IndicatorGroup>
                      {images.map((_: any, index: any) => (
                        <Carousel.Indicator key={index} index={index}>
                          <RiCheckboxBlankCircleFill color="#adb5bd" size={"2vh"} />
                        </Carousel.Indicator>
                      ))}
                    </Carousel.IndicatorGroup>
                    <Carousel.NextTrigger>
                      <LuChevronRight size={"100%"} />
                    </Carousel.NextTrigger>
                  </Carousel.Control>
                </Carousel.Root>
                <Box w={'50%'} height={'100%'} flexDirection={'column'} p={'1rem'}>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    주요기능
                  </Heading>
                  <Text fontSize={"1rem"} marginBottom={"1rem"}>
                    <Icon><LuDot /></Icon>스마트 컵받침으로 물 섭취량 측정, 수동 섭취량 기록<br />
                    <Icon><LuDot /></Icon>알림 기능, 일별 기록, 섭취량에 따른 캐릭터 키우기 기능<br />
                    <Icon><LuDot /></Icon>친구 목록, 친구에게 알림 보내기 기능<br />
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    담당역할
                  </Heading>
                  <Text fontSize={"1rem"} marginBottom={"1rem"} >
                    <Icon><LuDot /></Icon>컵받침 IoT와 BLE를 활용한 데이터 송수신 작업<br />
                    <Icon><LuDot /></Icon>내부저장소에 기록한 섭취량과 서버에 저장하는 데이터 연동 작업<br />
                    <Icon><LuDot /></Icon>메인화면 디자인, 마스코트, 컬러 선정
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    Git
                  </Heading>
                  <Link textDecoration={"none"} marginBottom={"1rem"} as='a' href="https://github.com/bottler3123/HabitAt"> https://github.com/bottler3123/HabitAt </Link>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'} >
                    Skills
                  </Heading>
                  <Grid
                    templateColumns='repeat(auto-fill, 5rem)'
                    gap={'1rem'}
                    objectFit={"contain"}
                  >
                    {iconStacks.map((IconStack, index) => (
                      <GridItem key={index}>
                        <IconStack width={"100%"} height={"100%"} />
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              </Flex>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default Habitat
