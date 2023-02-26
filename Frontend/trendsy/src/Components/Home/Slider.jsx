import { Box, Circle, HStack, Image, SlideFade } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const posters = {
  workwear:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg',
  handbagRed:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg',
  handbagWhite:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg',
  tops: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg',
  indianWear:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg',
  justLaunch:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif',
  hrx: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg',
  polo: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg',
  wrstern:
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg',
};

const Slider = () => {
  const [active, setActive] = useState(0);

 

  // const handleImage = () => {
  //   const totalPoster = Object.keys(posters).length - 1;
  //   console.log(totalPoster);
  //   totalPoster  > active?   setActive(active => active + 1):  setActive((active)=>0);
  //   console.log(active);
   
  // };

  useEffect(() => {
    const totalPoster = Object.keys(posters).length - 1;
    console.log(totalPoster);
    const intervalId = setTimeout(async() => {
      
     
      totalPoster  > active?   setActive(active => active + 1):  setActive((active)=>0);
      console.log(active);
     
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [active]);

  return (
    <Box m="50px 0px">
      {/* <Button onClick={onToggle}>Click Me</Button> */}
      <SlideFade in={true} offsetX="400px" translate="yes">
        <HStack>
          {Object.keys(posters).map((poster, i) => (
            <Image
            key={i+1256}
              src={posters[poster]}
              alt={poster}
              display={i == active ? 'block' : 'none'}
              unmountOnExit={active}
            />
          ))}
        </HStack>
      </SlideFade>
      <HStack justify="center" m="10px" cursor="pointer">
        {Object.keys(posters).map((el, i) => (
          <Circle
          key={i+4561}
            size="10px"
            bg={i == active ? 'blackAlpha.600' : 'blackAlpha.300'}
            color="white"
            onClick={() => setActive(i)}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Slider;
