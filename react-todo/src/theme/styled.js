import styled from 'styled-components';

export const Circle = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};
`

//Trzeba zmienić na takie, żeby był miało linear gradient na obwódce jak się najedzie i żeby całe było w takim gradiencie
// jak się odznaczy zadanie