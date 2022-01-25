import styled, { createGlobalStyle } from "styled-components";

export const Styles = {
    Wrapper: styled.main`
      display: flex;
      
      
      
      
      // 40em == 640px
      @media only screen and (max-width: 40em) {
        margin-bottom:60px;
        float:none;
      }
  
    `,
  };
  
  export const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
      
  
      padding: 1rem 2rem;
  
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      justify-content:space-between;
    
  
      background-color: white;
  
      
  
      // 40em == 640px
      @media only screen and (max-width: 40em) {
        position: fixed;
        width: 100vw;
        height:auto;
        flex-direction:row;
        top: 0;
        opacity: 0.8;
      }
    `,
    Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
      @media only screen and (max-width: 40em) {
        padding: 0.5rem 1.5rem;
      }
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
      z-index: 9;
      align-item:center;
      flex-direction:row;
    
      @media only screen and (max-width: 40em) {
        position: fixed;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        display: flex;
        text-align: center;
        line-height: 0px;
        align-items: center;
        
  
        flex-direction: column;
  
        background-color: white;
        padding: 1rem 2rem;
  
        opacity: 1;
        transition: 0.5s ease-out;
  
        transform: ${({ openDrawer }) =>
          openDrawer ? `translateX(0)` : `translateX(100%)`};
      }
    `,
    Item: styled.li`
      padding: 1rem 1rem;
      cursor: pointer;
      margin-bottom:3em;
      display:block;
      
      :hover{
        border-radius:5px;
        font-weight:bold;
        background-color:#e9b61a;
      }
      @media only screen and (max-width: 40em) {
        padding: 1rem 0;
        margin-top: 5rem;
        opacity: 1;
        :hover{
         padding:1rem;
        }
      }
    `,
  };
  
export  const HamburgerButton = {
    Wrapper: styled.button`
      height: 3rem;
      width: 3rem;
      position: relative;
      font-size: 12px;
  
      display: none;
  
      @media only screen and (max-width: 40em) {
        display: block;
      }
  
      /* Remove default button styles */
      border: none;
      background: transparent;
      outline: none;
  
      cursor: pointer;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
      }
    `,
    Lines: styled.div`
      top: 50%;
      margin-top: -0.125em;
  
      &,
      &:after,
      &:before {
        /* Create lines */
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        width: 100%;
        background-color: black;
        position: absolute;
      }
  
      &:after {
        /* Move bottom line below center line */
        top: -0.8rem;
      }
  
      &:before {
        /* Move top line on top of center line */
        top: 0.8rem;
      }
    `,
  };
  
 export const CSSReset = createGlobalStyle`
    *,
    *::before, 
    *::after {
      margin: 0; 
      padding: 0;
      box-sizing: inherit;
    }
  
  
    html {
      font-size: 62.5%; /*1rem = 10px*/
      box-sizing: border-box;      
    }  
  
    body {
      font-size: 1.4rem;
      font-family: sans-serif;
    }
  `;
  