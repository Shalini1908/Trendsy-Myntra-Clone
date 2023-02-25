import { RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import filterStyles from "./filters.module.css";

export const CheckBoxPerson = ({
  Q,
  setCategory,
  setBrands,
  setColors,
  setPrice,
  setSize,
  initialCategory,
  initialBrands,
  initialColors,
  initialPrice,
  initialSize,
}) => {
  const [person, setPerson] = useState(Q);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPerson(e.target.value);
  };

  useEffect(() => {
    setCategory(initialCategory);
    setBrands(initialBrands);
    setColors(initialColors);
    setPrice(initialPrice);
    setSize(initialSize);
    return navigate(`/products/${person}`);
  }, [person]);

  return (
    <>
      <RadioGroup
        borderBottom={"1px solid #f2f2f2"}
        borderTop={"1px solid #f2f2f2"}
        p={"12px 0px"}
        fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
        fontWeight={"500"}
      >
        <Stack direction="column" justify={"space-between"}>
          <label className={filterStyles.filterPeople}>
            <input
              className={filterStyles.filterPeopleInput}
              type="radio"
              name={"men"}
              value={"men"}
              onChange={handleChange}
              checked={person === "men"}
            />
            <Text w={"70px"} textAlign={"left"}>
              Men
            </Text>
          </label>
          <label className={filterStyles.filterPeople}>
            <input
              className={filterStyles.filterPeopleInput}
              type="radio"
              name={"women"}
              value={"women"}
              onChange={handleChange}
              checked={person === "women"}
            />
            <Text w={"70px"} textAlign={"left"}>
              Women
            </Text>
          </label>
          <label className={filterStyles.filterPeople}>
            <input
              className={filterStyles.filterPeopleInput}
              type="radio"
              name={"boys"}
              value={"boys"}
              onChange={handleChange}
              checked={person === "boys"}
            />
            <Text w={"70px"} textAlign={"left"}>
              Boys
            </Text>
          </label>
          <label className={filterStyles.filterPeople}>
            <input
              className={filterStyles.filterPeopleInput}
              type="radio"
              name={"girls"}
              value={"girls"}
              onChange={handleChange}
              checked={person === "girls"}
            />
            <Text w={"70px"} textAlign={"left"}>
              Girls
            </Text>
          </label>
        </Stack>
      </RadioGroup>
    </>
  );
};
