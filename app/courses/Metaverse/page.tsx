"use client";
import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib

import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar',
      text:
        "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users",
        
      
      image:
        'https://media.istockphoto.com/id/1413612678/vector/visualizing-and-experiencing-3d-model-of-a-jet-engine-in-virtual-reality-vector-illustration.jpg?s=612x612&w=0&k=20&c=G4hDDQGXZdHCQNtcbw323H__xTSjOFTU_EiFi4E1dcs=',
    },
    {
      title: 'Quarter 1',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.istockphoto.com/id/1339852964/photo/young-man-using-virtual-reality-headset-vr-gadgets.jpg?s=612x612&w=0&k=20&c=0S5Q42hWz8g41HBXN7wW7J1TQvIWmv1y2Z8Ltfx-Bn0=',
    },
    {
      title: 'Quarter 2',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.istockphoto.com/id/1358389574/photo/3d-hands-holding-a-smartphone-and-pointing-at-it.jpg?b=1&s=170667a&w=0&k=20&c=_fMJkzsGC7R8qvt-Epbkk7DgeCjLvUcYBqA5VSx3nZs=',
    },
    {
      title: 'Quarter 3',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.istockphoto.com/id/1358389574/photo/3d-hands-holding-a-smartphone-and-pointing-at-it.jpg?b=1&s=170667a&w=0&k=20&c=_fMJkzsGC7R8qvt-Epbkk7DgeCjLvUcYBqA5VSx3nZs=',
    },
    {
      title: 'Quarter 4',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.istockphoto.com/id/1358389574/photo/3d-hands-holding-a-smartphone-and-pointing-at-it.jpg?b=1&s=170667a&w=0&k=20&c=_fMJkzsGC7R8qvt-Epbkk7DgeCjLvUcYBqA5VSx3nZs=',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color="green.600" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.100">
                  {card.text}
                </Text>
                <Button display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.400'}
              
              _hover={{
                bg: 'green.300',
              }}
                >Apply</Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}