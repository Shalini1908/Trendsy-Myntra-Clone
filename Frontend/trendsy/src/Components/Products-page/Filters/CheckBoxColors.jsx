import { Stack, Text } from "@chakra-ui/react";
import filterStyles from "./filters.module.css";

export const CheckBoxColors = ({ options = [], name, colors, setColors }) => {
  const handlefilter = (e) => {
    let newColors = [...colors];
    if (newColors.includes(e.target.value)) {
      newColors.splice(newColors.indexOf(e.target.value), 1);
    } else {
      newColors.push(e.target.value);
    }
    setColors(newColors);
  };

  return (
    <>
      <Stack
        pb={"15px"}
        pt={"5px"}
        borderBottom={"1px solid #f2f2f2"}
        direction="column"
        justify={"space-between"}
      >
        <Text mb={"3px"} w={"100%"} textAlign={"left"} fontWeight={"500"}>
          {name}
        </Text>
        {options.map((item, i) => (
          <CheckBox
            key={i}
            item={item}
            handlefilter={handlefilter}
            colors={colors}
          />
        ))}
      </Stack>
    </>
  );
};

const CheckBox = ({ item, handlefilter, colors }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxFilter}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
          onChange={(e) => handlefilter(e)}
          checked={colors.includes(item)}
        />
        <Text
          fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          w={"150px"}
          textAlign={"left"}
        >
          {item}
        </Text>
      </label>
    </>
  );
};
