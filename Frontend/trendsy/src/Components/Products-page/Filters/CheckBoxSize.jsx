import { Box, Stack, Text } from "@chakra-ui/react";
import filterStyles from "./filters.module.css";

export const CheckBoxSize = ({ options = [], size, setSize }) => {
  const handlefilter = (e) => {
    let newSize = [...size];
    if (newSize.includes(e.target.value)) {
      newSize.splice(newSize.indexOf(e.target.value), 1);
    } else {
      newSize.push(e.target.value);
    }
    setSize(newSize);
  };

  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        {options.map((item, i) => (
          <CheckBox
            key={i}
            item={item}
            handlefilter={handlefilter}
            size={size}
          />
        ))}
      </Box>
    </>
  );
};

const CheckBox = ({ item, handlefilter, size }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxTop}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
          onChange={(e) => handlefilter(e)}
          checked={size.includes(item)}
        />
        <Text
          ml={"5px"}
          mr={"15px"}
          fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          textAlign={"left"}
        >
          {item}
        </Text>
      </label>
    </>
  );
};
