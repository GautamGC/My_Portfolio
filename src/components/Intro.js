import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 60vh; /* Increased height */
  display: flex;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
    bottom,
    linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
    top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .pic {
    position: absolute;
    bottom: 0;
    left: 20%; /* Slightly shifted left */
    transform: translate(-50%, 0%);
    width: auto;
    height: 100vh;
    max-width: 380px; /* Increased size */
    max-height: 430px; /* Increased size */
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '60vh' }} 
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Gautam Chauhan.</h3>
          <h6>A Full Stack Developer And A CS Engineering Student.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.img
          className="pic"
          src={Me}
          alt="Profile Pic"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </SubBox>
    </Box>
  );
};

export default Intro;
