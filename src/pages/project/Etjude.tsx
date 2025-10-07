import { Box, Center, Text, Dialog, Portal, Link, Grid, GridItem, Button, Flex, Image, Heading, Float, Icon } from "@chakra-ui/react"
import { Carousel } from "@/components/ui/carousel"
import { motion } from 'framer-motion';
import EtjudeLogo from '@/assets/Etjude/Etjude.svg?react';
import VueLogo from '@/assets/Icons/vue-svgrepo-com.svg?react';
import NodejsLogo from '@/assets/Icons/NodeJS-Light.svg?react';
import CssLogo from '@/assets/Icons/CSS.svg?react';
import { LuChevronLeft, LuChevronRight, LuDot } from "react-icons/lu";
import { RiCheckboxBlankCircleFill, RiCloseLargeFill } from "react-icons/ri";
import images from "@/assets/Etjude/images.js";
import EtjudeTitle from "@/assets/Etjude/logo_textrow_header.svg?react";

const iconStacks = [VueLogo, NodejsLogo, CssLogo];

function Etjude() {
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
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Box
            w={'100%'} h={'100%'}
            boxShadow='md' rounded='md'
            bg={'#ffeff2'}
            overflow={'hidden'}
            
            alignContent={"center"}
            justifyContent={"center"}
          >
            <motion.div
              style={{ width: '100%', height: '100%' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Center h={'100%'}>
                <EtjudeLogo width={'50%'}/>
              </Center>
            </motion.div>
          </Box>
        </motion.div>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner >
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

                <EtjudeTitle width={"20%"} />
                <Text fontWeight={'bold'} fontSize={"1vw"}>우리 모두의 연기 연습 커뮤니티</Text>
                <Text fontSize={"1rem"} marginBottom={"0.5rem"} lineHeight={"1.2rem"}>
                  드라마나 영화의 장면을 따라하며 녹화하고 연습합니다. <br />
                  내 연기를 커뮤니티에 공유하여 실력을 자랑하고 부족한 부분을 확인 할 수 있습니다.
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
                <Box display={'flex'} w={'50%'} height={'100%'} flexDirection={'column'} p={'1rem'}>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    주요기능
                  </Heading>
                  <Text fontSize={"1rem"} marginBottom={"1rem"}>
                    <Icon><LuDot/></Icon>대사연습, 장면연습, 연기녹화, 연습장면 다시보기<br />
                    <Icon><LuDot/></Icon>인기 및 최신 연습목록, 검색 기능<br />
                    <Icon><LuDot/></Icon>내 연습 관리, 게시글, 댓글 및 추천<br />
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    담당역할
                  </Heading>
                  <Text fontSize={"1rem"} marginBottom={"1rem"} >
                    <Icon><LuDot/></Icon>프로젝트 아이디어 및 기획 구성, 공동 컴포넌트 작업<br />
                    <Icon><LuDot/></Icon>메인 페이지 배너 UI, 목록 리스트 캐러셀, 게시글 모달 작업<br />
                    <Icon><LuDot/></Icon>컬러팔레트 및 로고 등 디자인 관련 작업 참여
                  </Text>
                  <Heading fontSize={"1.5rem"} fontWeight={'bold'}>
                    Git
                  </Heading>
                  <Link textDecoration={"none"} marginBottom={"1rem"} as='a' href="https://github.com/bottler3123/Etjude"> https://github.com/bottler3123/Etjude </Link>
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

export default Etjude
