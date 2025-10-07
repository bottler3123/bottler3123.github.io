import { Carousel as ArkCarousel } from "@ark-ui/react/carousel"
import { chakra } from "@chakra-ui/react"

const CarouselRoot = chakra(ArkCarousel.Root, {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    width: "50%",
    height: "100%",
  },

  variants: {},
})

const CarouselItemGroup = chakra(ArkCarousel.ItemGroup, {
  base: {
    display: "flex",
    width: "100%",
    margin: "1rem",
    gap: 2,
  },
})

const CarouselItem = chakra(ArkCarousel.Item, {
  base: {
    width: "100%",
    height: "100%",
  },
})

const CarouselIndicatorGroup = chakra(ArkCarousel.IndicatorGroup, {
  base: {
    display: "flex",
    height: "100%",
    gap: 2,
  },
})

const CarouselControl = chakra(ArkCarousel.Control, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
})

const CarouselIndicator = chakra(ArkCarousel.Indicator, {
  base: {
    borderRadius: "full",
    bg: "bg.subtle",
    _selected: {
      bg: "teal.solid",
    },
  },
  variants: {
    size: {
      sm: {
        width: 3,
        height: 3,
      },
      md: {
        width: 4,
        height: 4,
      },
    },
  },
})

const CarouselNextTrigger = chakra(ArkCarousel.NextTrigger, {
  base: {
    height: "3vh",
  },
})

const CarouselPrevTrigger = chakra(ArkCarousel.PrevTrigger, {
  base: {
    height: "3vh",
  },
})

export const Carousel = {
  Root: CarouselRoot,
  IndicatorGroup: CarouselIndicatorGroup,
  Indicator: CarouselIndicator,
  ItemGroup: CarouselItemGroup,
  Item: CarouselItem,
  Control: CarouselControl,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
}