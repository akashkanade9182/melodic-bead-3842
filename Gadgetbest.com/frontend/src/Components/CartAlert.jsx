import { Alert,AlertIcon } from "@chakra-ui/react";
import React from "react";

const CartAlert = () => {
  return (
    <>
      <Alert >
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
    </>
  );
};

export default CartAlert;
