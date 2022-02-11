import React from "react";
import {PageHero} from '../components';
import styled from 'styled-components'

const Checkout = () => {
  return (
    <main>
     <PageHero title="Checkout"></PageHero>
     <Wrapper className="page">
       <h1>
         Checkout Here
       </h1>

     </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``
export default Checkout;
