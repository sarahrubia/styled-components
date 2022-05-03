import { useState } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
// import menu from './menu.png';

const SmallImage = styled.img`
    width: 50px;
    height: 50px;
`

const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    ${props => props.backColor && css`
    background-color: ${props.backColor}`}
`

const Title = styled.span`
    width: 100%;
`

function Header(props){
    const [backColor, setBackColor] = useState(props.backColor ? props.backColor : '#fff')

    const changeColor = (colorCode) => {
        setBackColor('#'+ colorCode)
    }

    return <>
        <HeaderWrapper backColor={backColor}>
            <SmallImage src={logo}></SmallImage>
            <Title>Título da página</Title>
            <button onClick={() =>{changeColor('005f80')}}>Set blue</button>
            <button onClick={() =>{changeColor('00808094')}}>Set Green</button>
            {/* <div>
                <SmallImage src={menu}></SmallImage>
            </div> */}
        </HeaderWrapper>
    </>
}

export default Header