import styled, { css } from 'styled-components';

import check from '../images/icon-check.svg';

const CircleBorder = styled.div`
  display: block;
  height: 30px;
  width: 30px;
  background-color: ${props => props.theme.colors.Components_Grayish_Blue};
  position: relative;
  border-radius: 30px;
  transform: rotate(-40deg);
  background-image: ${props => props.isDone ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'};
  
  ${({hoverUnavailable}) =>
          !hoverUnavailable &&
          css`
            &:hover{
              background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
            }
          `
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
        <CircleBorder isDone={props.isDone} onClick={props.onClick} hoverUnavailable={props.hoverUnavailable}>
            <CircleBackground isDone={props.isDone}/>
            <Checked isDone={props.isDone} />
        </CircleBorder>
    );
}


// SQUARE CHECK

const FixedCheckSvg = styled(Checked)`
  transform: rotate(0deg);
`

const FixedCheck = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
  border: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};
  border-image-slice: 1;
  background-image: ${props => props.isDone ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'};

  &:hover {
    border-image-source: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    border-radius: inherit;
`

export const Square = (props) => {
    return (
        <FixedCheck isDone={props.isDone} onClick={props.onClick}>
            <FixedCheckSvg isDone={props.isDone} />
        </FixedCheck>
    );
};

export const FooterButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.isActive ? '#4a69bd' : props.theme.colors.Background_Grayish_Blue};
  font-weight: 600;
  padding: 5px 8px;
  
  &:hover{
    color: ${props => !props.isActive && props.theme.colors.Dark_Grayish_Blue};
  }
`