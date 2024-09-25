import { BrowserRouter as Router } from "react-router-dom";
//import React from "react";
import styled from 'styled-components'
import MainRoutes from './MainRoutes'
import MainMenu from './MainMenu'
import { layoutConfig } from "../config/LayoutConfig";

/*
    https://www.youtube.com/watch?v=68O6eOGAGqA&list=PLUb73tCE5NCGvE1nCLtTAz3smYYxp75Va&index=156&ab_channel=AngelaDesign
    https://codepen.io/angeladelise/pen/YzXLdyq?editors=1100
* */


interface IMasterprops {
    showContent123?: string
}

const _Masterpage = styled.div`
    display: grid;
    height: 99vh;
    grid-template-columns: 250px 1fr 1fr 1fr;
    grid-template-rows: 100px 2fr 1.5fr 80px;   
    grid-template-areas:
        "nav nav nav nav"
        "sidebar main main main"                
        "sidebar content1 content2 content3"
        "footer footer footer footer";
    grid-gap: 0.2rem;
    font-weight: 800;
    --text-transform: uppercase;
    --font-size: 12px;
    color: ${layoutConfig.mainColor};
    background-color: ${layoutConfig.mainBg};
    text-align: left;
        
    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
        grid-template-areas:
            "nav"
            "sidebar"
            "main"
            "content1"
            "content2"
            "content3"
            "footer";
  }
`

const Nav = styled.div`
    background: ${layoutConfig.headerBg};
    //background: #a7ffeb;
    grid-area: nav;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};
`

const _Main = styled.div`
    background: ${layoutConfig.mainBg};
    //background: #84ffff;
    grid-area: main;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};
    
    >div {
       font-size: 20px;
    }

    >input {
        color: black; 
        padding: 20;
        font-size: 20px !important; 
        border-radius: 2px;
        border: 1px solid black;  
        background-color: white;
        height: 34px;        
    }  
       
    >button {
        border-radius: 0.5em;
        border: 0px;
        background-color: navy;
        height: 36px;
        margin-top: 27px;
        font-size: 20px;
    }    
`
    

const Sidebar = styled.div`
    background: ${layoutConfig.mainBg};
    //background: #18ffff;
    grid-area: sidebar;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};
`
const Content1 = styled.div`
    background: ${layoutConfig.content1Bg};
    //background: #6fffd2;
    grid-area: content1;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};
`
const Content2 = styled.div`
    background: ${layoutConfig.content2Bg};
    //background: #64ffda;
    grid-area: content2;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};`

const Content3 = styled.div`
    background: ${layoutConfig.content3Bg};
    //background: #73ffba;
    grid-area: content3;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};`

const Footer = styled.div`
    background: ${layoutConfig.footerBg};
    color: ${layoutConfig.footerFg};
    //background: #1de9b6;
    grid-area: footer;
    border-radius: ${layoutConfig.mainRadius};
    padding: ${layoutConfig.mainPadding};
`

const MasterPage = () => {

    const showContent123 = false;

    return (
        <>
            <Router>
                <_Masterpage>
                    <Nav>Navbar</Nav>
                    <Sidebar id="sidebar">
                        <MainMenu />
                    </Sidebar>
                    <_Main>
                        <MainRoutes />
                    </_Main>
                    {showContent123 &&
                        <>
                            <Content1 id="content1">Content1</Content1>
                            <Content2 id="content2">Content2</Content2>
                            <Content3 id="content3">Content3</Content3>
                        </>}
                    <Footer>Footer</Footer>
                </_Masterpage>
            </Router>
        </>
    );
};

export default MasterPage;