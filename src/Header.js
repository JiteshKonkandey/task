import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    // border: 1px solid #000000;
    background-color: #FFFFFF;
    border-bottom: 5px solid #d5d5d5
`;

const ImageContainer = styled.img`
    margin-left: 10px;
    width: 60px;
`;

const SearchContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 2%;
`;

const SearchBar = styled.input`
    position: relative;
    background-color: #d5d5d5;
    background-image: url('/icons/filter.svg');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 205px;
    border: none;
    width: 100%;
    height: 55px;
    border-radius: 10px;
`;

const MessageContainer = styled.div`
    margin-left: 5px;
`;
const MessageIcon = styled.img`
    width: 30px;
    height: 30px;
`;
const Message = styled.h1`
    font-size: 10px;
    margin: 0px;
    color: #d5d5d5;
`;
const NotificationContainer = styled.div`
    margin-left: 5px;
`;
const NotificationIcon = styled.img`
    width: 30px;
    height: 30px;
`;
const Notification = styled.h1`
    font-size: 10px;
    margin: 0px;
    color: #d5d5d5;
`;
const SettingsContainer = styled.div`
    margin-left: 5px;
`;
const SettingsIcon = styled.img`
    width: 30px;
    height: 30px;
`;
const Settings = styled.h1`
    font-size: 10px;
    margin: 0px;
    color: #d5d5d5;
`;
const Header = () => {
  return (
    <>
        <HeaderContainer>
            <ImageContainer src="./icons/HeaderUser.svg" alt="userImage"/>
            <SearchContainer>
                <SearchBar type="search" />
                {/* <FilterIcon src="./icons/filter.svg" alt="filter icon"/> */}
            </SearchContainer>
            <MessageContainer>
                <MessageIcon src="./icons/message.svg" alt="message icon" />
                <Message>Message</Message>
            </MessageContainer>
            <NotificationContainer>
                <NotificationIcon src="./icons/notification.svg" alt="" />
                <Notification>Notification</Notification>
            </NotificationContainer>
            <SettingsContainer>
                <SettingsIcon src="./icons/setting.svg" alt="settings icon" />
                <Settings>Settings</Settings>
            </SettingsContainer>
        </HeaderContainer>
    </>
  )
}

export default Header