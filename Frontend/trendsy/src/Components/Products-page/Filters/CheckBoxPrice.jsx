import { Stack, Text } from "@chakra-ui/react";
import filterStyles from "./filters.module.css";

export const CheckBoxPrice = ({ options = [], price, setPrice }) => {
  const handlefilter = (e) => {
    let newPrice = [...price];
    if (newPrice.includes(e.target.value)) {
      newPrice.splice(newPrice.indexOf(e.target.value), 1);
    } else {
      newPrice.push(e.target.value);
    }
    setPrice(newPrice);
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
          Price
        </Text>
        {options.map((item, i) => (
          <CheckBox
            key={i}
            item={item}
            handlefilter={handlefilter}
            price={price}
          />
        ))}
      </Stack>
    </>
  );
};

const CheckBox = ({ item, handlefilter, price }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxFilter}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
          onChange={(e) => handlefilter(e)}
          checked={price.includes(item)}
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
