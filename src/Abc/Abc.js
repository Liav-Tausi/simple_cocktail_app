import { Button } from "@mui/material";

const Abc = (props) => {
  return (
    <Button onClick={() => props.onClick(props.letter)}>{props.letter}</Button>
  );
};

export default Abc;
