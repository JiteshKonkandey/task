import React from 'react';
import styled from 'styled-components';

const footerData = [
    {
        id: 1,
        icon: "./icons/Home.svg",
        name: "Home"
    },
    {
        id: 2,
        icon: "./icons/candidates.svg",
        name: "candidates"
    },
    {
        id: 3,
        icon: "./icons/explore.svg",
        name: "Explore"
    },
    {
        id: 4,
        icon: "./icons/marketplace.svg",
        name: "Marketplace"
    },
    {
        id: 5,
        icon: "./icons/User.svg",
        name: "Profile"
    }
]

const FooterBarContainer = styled.div`
   display: flex;
   justify-content: space-around;
`;
const ItemDiv = styled.div`
    font-size: 10px;
`;

const Image = styled.img`
    font-size: 10px;
    width: 30px;
    height: 30px;
`;

const Name = styled.h1`
    font-size: 10px;
`;


const FooterBar = () => {
  return (
    <>
        <FooterBarContainer>
            {footerData.map((item) => {
                return (
                    <>
                        
                            <ItemDiv>
                                <Image src={item.icon} alt="image"/>
                                <Name>{item.name}</Name>
                            </ItemDiv>
                    </>
                )
            })}
        </FooterBarContainer>
    </>
  )
}

export default FooterBar