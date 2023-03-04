import { Button, HStack, Text } from "@chakra-ui/react";

export const Pagination = (props) => {
  const { current, onChange, total } = props;
  const prev = (
    <Button
      m={"5px"}
      _disabled={current === 0}
      onClick={() => onChange(current - 1)}
      disabled={current + 1 === 1}
    >
      Prev
    </Button>
  );

  const pages = new Array(total).fill(0).map((e, i) => (
    <Button
      key={i}
      m={"5px"}
      style={{
        backgroundColor: current === i + 1 ? "#ff3f6c" : "#edf2f7",
        color: current === i + 1 ? "white" : "black",
      }}
      className="pagesBtn"
      disabled={current === i + 1}
      onClick={() => onChange(i + 1)}
    >
      {i + 1}
    </Button>
  ));

  const next = (
    <Button
      m={"5px"}
      onClick={() => onChange(current + 1)}
      disabled={current === total}
    >
      Next
    </Button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {pages}
        {next}
      </div>
      <HStack mt={"10px"} justify={"center"} align={"center"}>
        <Text fontWeight={"500"}>Total Pages:</Text>{" "}
        <b data-testid="total-pages">{total}</b>
      </HStack>
    </div>
  );
};
