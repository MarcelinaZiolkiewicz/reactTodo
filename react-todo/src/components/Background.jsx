import styled from 'styled-components';
import imgPath from '../images/bg-desktop-dark.jpg';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.Very_Dark_Blue};
  height: 70vh;
`
const ImageTop = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30vh;
`
const Background = ({children}) => {
    return(
        <>
            <ImageTop img={imgPath}/>
            <Wrapper/>
            {children}
        </>
    );
}

export default Background;