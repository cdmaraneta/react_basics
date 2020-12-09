import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 50%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px {
    width:450px;
    })
    `;

const person = (props) => {
  return (
    // <div className='Person' style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        Welcome, {props.name}! You have visited {props.visit}
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

export default person;
