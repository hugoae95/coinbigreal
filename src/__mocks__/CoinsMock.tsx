import React from 'react';
import { Container } from '@material-ui/core';
import { Route } from "react-router";

const CoinsMock = (props: { children: any; }) => {
    return(
    <Container>
        <Route path="/">
            {props.children}
        </Route>
    </Container>
  )};
  
export default CoinsMock;