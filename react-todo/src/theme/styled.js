import styled from 'styled-components';

import check from '../images/icon-check.svg';

const CircleBorder = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: ${props => props.theme.colors.Components_Grayish_Blue};
  position: relative;
  border-radius: 30px;
  transform: rotate(-40deg);
  background-image: ${props => props.isDone ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'};
  
  &:hover {
    background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`

const CircleBackground = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
    height: 24px;
    width: 24px;
    border-radius: 30px;
    display: ${props => props.isDone ? 'none' : 'block'};
`

const Checked = styled.svg`
    display: ${props => props.isDone ? 'block' : 'none'};
    background-position: center;
    transform: rotate(40deg);   
    background-image: url(${check});
    background-size: 20px;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
`

export const Circle = (props) => {
    return (
        <CircleBorder isDone={props.isDone} onClick={props.onClick}>
            <CircleBackground isDone={props.isDone}/>
            <Checked isDone={props.isDone} />
        </CircleBorder>
    );
}


const FixedCircle = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
  border: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};
  border-image-slice: 1;
  border-radius: 30px;
  transform: rotate(-40deg);
  background-image: ${props => props.isDone ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'};

  &:hover {
    border-image-source: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    border-radius: inherit;
`

export const CircleFixed = (props) => {
    return (
        <FixedCircle isDone={props.isDone} onClick={props.onClick}>
            <Checked isDone={props.isDone} />
        </FixedCircle>
    );
}

//Trzeba zmienić na takie, żeby był miało linear gradient na obwódce jak się najedzie i żeby całe było w takim gradiencie
// jak się odznaczy zadanie