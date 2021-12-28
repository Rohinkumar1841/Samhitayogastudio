import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/house-1.jpg';
import { Parallax } from 'react-parallax';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
`;

const Container = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  paragraphFive,
  paragraphSix,
  paragraphSeven,
  paragraph8,
  paragraph9,
  buttonLabel,
  reverse,
  image,
  delay
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay={delay}
          data-aos-anchor-placement='center bottom'
        >
          
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <p>{paragraphFour}</p>
          <p>{paragraphFive}</p>
          <p>{paragraphSix}</p>
          <p>{paragraphSeven}</p>
          <Button to='/About' primary='true'>
            {buttonLabel}
          </Button>
          
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt='home'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-once='true'
            data-aos-delay={delay}
            data-aos-anchor-placement='center bottom'
          />
        </ColumnRight>
        
        
      </Container>
    </Section>
  );
};

export default InfoSection2;