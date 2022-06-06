import React from 'react';
import styled from 'styled-components';

const CardData = [
    {
        id: 1,
        name: "Divya Dholpariya",
        role: "Singer",
        expYears: "4 Years",
        pay: "70k/ Day",
        fromDetailIcon: "./icons/Briefcase.svg",
        companyname: "Connect@media",
        designation: "singer",
        fromDate: "Feb 2019 - Aug 2020",
        toDetailIcon: "./icons/Briefcase.svg",
        toDate: "Oct 2020 - May 2022",
        locationIcon: "./icons/location.svg",
        location: "Delhi, India",
        viewDetails: "View Details",
        userImage: "./icons/headerUser.svg",
        desc: "Divya Dholpariya is one of the aspiring singer looking fo...",
        saveIcon: "./icons/save.svg"
    },
    {
        id: 2,
        name: "Rishabh Shrivastava",
        role: "Photography",
        expYears: "10 Years",
        pay: "20k/ Day",
        fromDetailIcon: "./icons/Briefcase.svg",
        companyname: "Connect@media",
        designation: "Sr. Photographer",
        fromDate: "Feb 2019 - Aug 2020",
        toDetailIcon: "./icons/Briefcase.svg",
        toDate: "Oct 2020 - May 2022",
        locationIcon: "./icons/location.svg",
        location: "Delhi, India",
        viewDetails: "View Details",
        userImage: "./icons/headerUser.svg",
        desc: "Rishabh Shrivastava is one of the experienced photographer...",
        saveIcon: "./icons/save.svg"
    },
    {
        id: 3,
        name: "Karan Arora",
        role: "Journalism",
        expYears: "4 Years",
        pay: "70-80k/ Month",
        fromDetailIcon: "./icons/Briefcase.svg",
        companyname: "Connect@media",
        designation: "Journalist",
        fromDate: "Feb 2019 - Aug 2020",
        userImage: "./icons/headerUser.svg",
        locationIcon: "./icons/location.svg",
        location: "Delhi, India",
        desc: "Divya Dholpariya is one of the aspiring singer looking fo...",
        saveIcon: "./icons/save.svg",
        viewDetails: "View Details"
    }
]
const ContentCardContainer = styled.div``;

const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-bottom: 2px solid #d5d5d5;
    padding-bottom: 10px;
`;

const DivHead = styled.h1`
    font-size: 21px;
    color: #00adff;
    margin: 0px;
`;

const PostJobButton = styled.button`
    border-radius: 20px;
    width: 150px;
    height: 45px;
    border: none;
    font-size: 17px;
    color: #ffffff;
    background-image: url('/icons/Rectangle.svg');

`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 225px;
    border: 2px solid #d5d5d5;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-top: 10px;
`;
const LeftContainer = styled.div`
    padding-left: 20px;
    padding-top: 5px;
`;

const Name = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
`;

const DetailCont = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`;

const Role = styled.h3`
    font-size: 15px;
    font-weight: 400;
    margin-right: 10px
`;

const ExpYears = styled.h3`
    font-size: 15px;
    font-weight: 400;
    margin: 0px 10px;
`;

const Pay = styled.h3`
    font-size: 15px;
    font-weight: 400;
    margin-left: 10px;
`;

const FromContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const DetailSection = styled.div`
    margin-left: 10px;
 
`;
const Details = styled.h1`
    font-size: 15px;
    margin: 0px;
    font-weight: 200;
`;
const FromIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const FromDate = styled.h2`
    font-size: 12px;
    font-weight: 300;
    margin: 0px;
`;

const ToContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
const ToIcon = styled.img`
    width: 30px;
    height: 30px;
`;
const ToDate = styled.h2`
    font-size: 12px;
    font-weight: 300;
    margin: 0px;
`;
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserImage = styled.img`
    width: 100px;
    margin-bottom: 45px;
`;
const ViewDetailButton = styled.button`
    width: 150px;
    padding: 5px;
    font-size: 12px;
    background-color: #00adff;
    border: none;
    border-radius: 10px;
    color: #ffffff;
`;

const LocationContainer = styled.div`
    display: flex;
`;
const Location = styled.img`
    margin-right: 10px;
    width: 30px;
    height: 30px;
`;

const LocationWord = styled.h2`
    font-size: 15px;
    font-weight: 300;
`;

const DescCont = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: space-between;

`;
const Description = styled.p`
    font-size: 12px;
    margin: 0px;
`;

const More = styled.p`
    font-size: 12px;
    color: #00adff;
    margin: 0px;
`;

const DescDetails = styled.div`
    display: flex;
    
`;

const SaveIcon = styled.img`
    margin-right: 10px;
    margin-top: 0px
    width: 25px;
    height: 25px;
`;
const ContentCard = () => {
  return (
      <>
        <ContentCardContainer>
            <FirstDiv>
                <DivHead>Suggested Candidates</DivHead>
                <PostJobButton>Post a Job</PostJobButton>
            </FirstDiv>
            {CardData.map((singleItem) => {
                return (
                    <>
                        <CardContainer>
                            <Container>
                                <LeftContainer>
                                    <Name>{singleItem.name}</Name>
                                    <DetailCont>
                                        <Role>{singleItem.role}</Role> | <ExpYears>{singleItem.expYears}</ExpYears> | <Pay>{singleItem.pay}</Pay>
                                    </DetailCont>
                                    <FromContainer>
                                        <FromIcon src={singleItem.fromDetailIcon} alt="from icon"/>
                                        <DetailSection>
                                            <Details>{singleItem.companyname}-{singleItem.designation}</Details>
                                            <FromDate>{singleItem.fromDate}</FromDate>
                                        </DetailSection>
                                    </FromContainer>

                                    <ToContainer>
                                        <ToIcon src={singleItem.fromDetailIcon} alt="from icon"/>
                                        <DetailSection>
                                            <Details>{singleItem.companyname}-{singleItem.designation}</Details>
                                            <ToDate>{singleItem.toDate}</ToDate>
                                        </DetailSection>
                                    </ToContainer>

                                    <LocationContainer>
                                        <Location src={singleItem.locationIcon} alt="location"/>
                                        <LocationWord>{singleItem.location}</LocationWord>
                                    </LocationContainer>
                                </LeftContainer>
                                <RightContainer>
                                    <UserImage src={singleItem.userImage} alt="user image"/>
                                    <ViewDetailButton>{singleItem.viewDetails}</ViewDetailButton>
                                </RightContainer>
                            </Container>
                            <DescCont>
                                <DescDetails>
                                    <Description>{singleItem.desc}</Description>
                                    <More>more</More>
                                </DescDetails>
                                <SaveIcon src={singleItem.saveIcon} alt="saveicon"/>
                            </DescCont>
                        </CardContainer>
                    </>
                )
            })}
        </ContentCardContainer>
      </>
  )
}

export default ContentCard