import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import "./Website.css";
import image1 from "./shoes.jpg";
import image2 from "./skateboard.jpg";
import image3 from "./kinderwagen.jpg";
import sharelogo from "./logo.png";
import transparentlogo from "./logo_transparent.png";

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.section`
  text-align: left;
  top: 0;
  width: 100%;
  background-color: #e9eaec;
  height: 100px;
  color: #ccc4c1;
  font-size: calc(20px + 2vmin);
`;

const NavBar = styled.ul`
  position: fixed;
  text-align: right;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #e9eaec;
`;

const NavItem = styled.li`
  display: inline;
  margin: 10px;
  color: #3e3e3c;
  font-size: 10px;
  border: 1px solid #a2aaaf;
  padding: 1px;
`;

const SearchBar = styled.input`
  margin-right: 55px;
`;

const ShareLogo = styled.img`
  width: 100px;
  height: 100px;
  float: left;
`;

const ArtikelListe = styled.section`
  width: 70%;
  margin: 20px auto;
  text-align: left;
`;

const ListItem = styled.section`
  margin: 20px auto;
  height: 100px;
  width: 100%;
  display: flex;
  color: black;
  background-color: #f7dda4;
  font-size: em;
  border: 1px solid #f7dda4;
`;

const ArtikelBild = styled.img`
  width: 100px;
  height: 100px;
  display: inline-block;
  float: left;
`;

const ArtikelName = styled.p`
  color: #4d5870;
  width: 50%;
  margin-left: 20px;
  text-align: left;
`;

const ArtikelInfo = styled.ul`
  color: #4d5870;
  width: 50%;
  text-align: left;
`;

const Button = styled.button`
  background-color: #f7dda4;
  border: 3px groove #f7dda4;
  padding: 10px;
  width: 180px;
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <NavBar>
          <ShareLogo src={transparentlogo} alt="logo"></ShareLogo>
          <NavItem>Sign in</NavItem>
          <NavItem>Register</NavItem>
          <NavItem>Help</NavItem>
          <NavItem>Contact</NavItem>
          <SearchBar type="text" placeholder="I am looking for..."></SearchBar>
        </NavBar>
      </Header>

      <ArtikelListe>
        1-25 of my items to share:
        <ListItem>
          <ArtikelBild src={image1} alt="schuhe" />
          <ArtikelName>Schuhe</ArtikelName>
          <ArtikelInfo>
            <li>Adidas</li>
            <li>Farbe: Rot</li>
            <li>Größe: 40</li>
          </ArtikelInfo>
        </ListItem>
        <ListItem>
          <ArtikelBild src={image2} alt="skateboard" />
          <ArtikelName>Skateboard</ArtikelName>
          <ArtikelInfo>
            <li>blau</li>
            <li>gebraucht (1,5 Jahre alt)</li>
            <li>Muster</li>
          </ArtikelInfo>
        </ListItem>
        <ListItem>
          <ArtikelBild src={image3} alt="kinderwagen" />
          <ArtikelName>Kinderwagen</ArtikelName>
          <ArtikelInfo>
            <li>schwarz</li>
            <li>gebraucht (1,5 Jahre alt)</li>
            <li>Muster</li>
          </ArtikelInfo>
        </ListItem>
      </ArtikelListe>

      <Button>More to Share</Button>
    </Wrapper>
  );
}

export default App;
