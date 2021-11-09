import * as React from "react";
import { useInput } from "@mui/core";
import { styled } from "@mui/system";

const StyledInputElement = styled("input")`
  width: 250px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

function SubscribeInput() {
  return (
    <CustomInput
      aria-label="Enter your email to subscribe for our latest news about products and other"
      type="email"
      placeholder="Enter your email"
      sx={{ mr: 1 }}
    />
  );
}

export default SubscribeInput;
