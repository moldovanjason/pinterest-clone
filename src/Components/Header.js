import React from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper><PinterestIcon/></LogoWrapper>
      {/* <HomePageButton></HomePageButton>
      <FollowingButton></FollowingButton>
      <SeachWrapper>
        <SeachBarWrapper></SeachBarWrapper>
      </SeachWrapper>
      <IconsWrapper></IconsWrapper> */}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;`

\
