import { Stack, Text } from "@chakra-ui/react";
import filterStyles from "./filters.module.css";

export const CommonFilter = ({ options = [] }) => {
  return (
    <>
      <Stack direction="row">
        {options.map((item, i) => (
          <CheckBox key={i} item={item} />
        ))}
      </Stack>
    </>
  );
};

const CheckBox = ({ item }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxTop}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
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
