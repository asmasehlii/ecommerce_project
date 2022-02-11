import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Customer Fourniture <br />
            Built Only For You
          </h3>
          <p>
        
            What is the importance of vision in life? Why it’s important to
            think and see the future clearly? Why we’ve to be so perfect in
            terms of deciding our dream of life. Knowledge gurus say great
            visionaries are highly successful people. Visions are life aims that
            we wish to accomplish at a certain point of time. But how many of us
            can actually define our visions precisely? Those who can, are the
            biggest winners.
          </p>
          </article>
          <div className="services-center"> 
         
            {services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <article key={id} className="service">
                  <span className="icon"> {icon}</span>
                  <h4> {title}</h4>
                  <p> {text}</p>
                </article>
              );
            })}
          </div>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
