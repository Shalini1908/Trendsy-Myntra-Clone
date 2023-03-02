import { Circle, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [visible, setVisible] = useState();

  const goTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      paddingTop: "100px",
      snapType: " y mandatory",
      snapPointsY: "repeat(1px)",
      snapStop: "always",
      transitionDuration: "2s",
    });
  };

  const showHeight = () => {
    let hiddenHeight = 400;

    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    scroll > hiddenHeight ? setVisible(true) : setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", showHeight);
    return () => window.removeEventListener("scroll", showHeight);
  }, []);

  return (
    <Flex
      align="center"
      justify="center"
      w={6}
      h={6}
      borderRadius={"50%"}
      cursor="pointer"
      zIndex={10}
      position="fixed"
      right={10}
      bottom={10}
      fontSize={20}
    >
      {visible && (
        <Circle
          size="50px"
          bgColor={"#ff3f6c"}
          color="yellow.200"
          onClick={goTo}
        >
          <BsFillArrowUpSquareFill />{" "}
        </Circle>
      )}
    </Flex>
  );
};

export default ScrollToTop;
