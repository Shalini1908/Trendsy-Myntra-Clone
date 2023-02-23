import { Stack, Text } from "@chakra-ui/react";
import filterStyles from "./filters.module.css";

export const CheckBoxCategory = ({
  options = [],
  name,
  category,
  setCategory,
}) => {
  const handlefilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
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
            category={category}
          />
        ))}
      </Stack>
    </>
  );
};

const CheckBox = ({ item, handlefilter, category }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxFilter}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
          onChange={(e) => handlefilter(e)}
          checked={category.includes(item)}
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
