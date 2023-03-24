import React from 'react';
import Heading from './Header';
import Wrapper from './Wrapper';
import Content from './Content1';
import Accessibility from './Accessability';

function Home() {
    return (   
        <>
          <Heading></Heading>
          <Wrapper>
            <Content></Content>
            <Accessibility></Accessibility>
          </Wrapper>
        </>);
        };

export default Home;