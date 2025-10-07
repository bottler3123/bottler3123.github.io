import { Box, Center, Text, Dialog, Portal, Link, Grid, GridItem, Button, Flex, Image, Heading, Float, Icon } from "@chakra-ui/react"
import { Carousel } from "@/components/ui/carousel"
import { motion } from 'framer-motion';
import { LuChevronLeft, LuChevronRight, LuDot } from "react-icons/lu";
import { RiCheckboxBlankCircleFill, RiCloseLargeFill } from "react-icons/ri";
import images from "@/assets/Enjoytrip/images.js";
import VueLogo from '@/assets/Icons/vue-svgrepo-com.svg?react';
import BootstrapLogo from '@/assets/Icons/Bootstrap.svg?react';
import EnjoytripTitle from "@/assets/Enjoytrip/enjoytrip.png";

const iconStacks = [VueLogo, BootstrapLogo];

function Enjoytrip() {
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
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box
            w={'100%'} h={'100%'}
            boxShadow='md' rounded='md'
            bg={'#fffefa'}
            color="white"
            fontWeight="bold" fontSize='2em'
            overflow={'hidden'}
            alignContent={"center"}
          >
            <motion.div
              style={{ width: '100%', height: '80%' }}
              whileHover={{ rotate: [0, 10, -10, 0] }}
              animate={{ rotate: 0 }}
            >
              <Center h={"100%"}>
                <Image src={"src/assets/Enjoytrip/enjoytrip.png"} w={'80%'} />
              </Center>
            </motion.div>
          </Box>
        </motion.div>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content padding={'4%'} w={'80%'} h={'90%'} >
            <Dialog.Body alignItems={"start"}>
              <Dialog.Title margin={'0.5vh'} position={"relative"}>
                <Float>
                  <Dialog.ActionTrigger asChild>
                    <Button backgroundColor={"transparent"}>
                      <Icon as={RiCloseLargeFill} boxSize={"3vh"} color={"black"} />
                    </Button>
                  </Dialog.ActionTrigger >
                </Float>
                <Box display={"Flex"} alignContent={"end"}>
                  <Image src={EnjoytripTitle} w={"15%"} />
                  <Text fontWeight={'bold'} fontSize={"1vw"} marginLeft={"0.5vw"} alignContent={"end"}>
                    쉽게 세우는 여행 계획
                    <Text fontSize={"1rem"} marginBottom={"0.5rem"} lineHeight={"1.2rem"}>
                      다양한 여행지를 지도에 등록해 쉽게 계획을 짭니다.<br />
                      핫플레이스 등 다양한 여행지 추천으로 고민을 덜어줍니다.
                    </Text>
                  </Text>
                </Box>
              </Dialog.Title>
              <Flex gap={'2%'}>
                <Carousel.Root loop={true} allowMouseDrag={true} defaultPage={0} slideCount={images.length} spacing={"10%"}>
                  <Carousel.ItemGroup>
                    {images.map((image: any, index: any) => (
                      <Carousel.Item key={index} index={index}>
                        <Box borderWidth={1}>
                          <Image src={image} />
                        </Box>
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
                    <Icon><LuDot /></Icon>이달의 추천 여행지, 테마별 인기 여행지, 핫플레이스 추천<br />
                    <Icon><LuDot /></Icon>챗 봇, 날씨 정보, 관광지 검색 기능<br />
                    <Icon><LuDot /></Icon>여행 계획 작성, 지도에 마커 & 경로 등록 기능, 여행정보 공유 게시판<br />
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    담당역할
                  </Heading>
                  <Text fontSize={"1rem"} marginBottom={"1rem"} >
                    <Icon><LuDot /></Icon>메인, 추천 여행지, 게시판 등의 인터페이스 디자인 설계<br />
                    <Icon><LuDot /></Icon>API 연동 및 데이터 가공 후 화면 반영 작업<br />
                    <Icon><LuDot /></Icon>라우터를 활용한 화면 전환과 SPA 구축
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    Git
                  </Heading>
                  <Link textDecoration={"none"} marginBottom={"1rem"} as='a' href="https://github.com/Suminig/ssafy_enjoytrip"> https://github.com/Suminig/ssafy_enjoytrip </Link>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'} >
                    Skills
                  </Heading>
                  <Grid
                    templateColumns='repeat(auto-fill, 5rem)'
                    gap={'1rem'}
                    objectFit={"contain"}
                  >
                    {iconStacks.map((IconStack) => (
                      <GridItem >
                        <IconStack width={"100%"} height={"100%"}/>
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

export default Enjoytrip;
