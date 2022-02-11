import React from "react";
import styled from "styled-components";
import {PageHero} from '../components';
import abouImg from '../assets/hero-bcg.jpeg'

const About = () => {
  return (
    <main>
     <PageHero title="about" />
     <Wrapper className="page section section-center">
       <img src={abouImg} alt="nice desk" />
       <article>
         <div className="title">
           <h2>
             Our story
           </h2>
           <div className="underline">

           </div>
           <p>
           There is no other better place in the world, than being in the comfort of our homes. Home is where we learn the first lessons in life.

The unity, love, togetherness all comes from a home. Home is the base for every individual and we should thank God for being blessed with a lovable home.
           </p>

         </div>
       </article>

     </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default About;
