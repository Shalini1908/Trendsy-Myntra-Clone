import { HStack, Text } from "@chakra-ui/layout";
import { RxCross2 } from "react-icons/rx";

export const Filters = ({ name, option, setOption }) => {
  const handleDelete = (option, name) => {
    let newOption = [...option];
    if (newOption.includes(name)) {
      newOption.splice(newOption.indexOf(name), 1);
    }

    setOption(newOption);
  };
  return (
    <>
      <HStack
        m={"3px 10px 3px 0px"}
        position={"relative"}
        justify={"space-between"}
        align={"center"}
        border={"1px solid lightgray"}
        borderRadius={"25px"}
        fontSize={{
          base: "12px",
          sm: "13px",
          md: "13px",
          lg: "13px",
        }}
        p={"2px 10px"}
        color={"gray"}
      >
        <Text position={"relative"} bottom={"1px"} pl={"3px"}>
          {name}
        </Text>
        <Text cursor={"pointer"} onClick={() => handleDelete(option, name)}>
          <RxCross2 />
        </Text>
      </HStack>
    </>
  );
};
