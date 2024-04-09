import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --navTextHover : #027CAA;
    --Hover : #00597a;
    --background : #F7F7F7;
    --background1 : #EAEAEA;
    --text:#222222;
    --menuBack:#141414f9;
    --border: #0179A7;
    --lessText:#1212129f;
    --brown:#BA968A;
    --githover: #262626be;
    --footerbackground: #0075a0f5;
    --mobileLargeSize: 1.8rem;
    --mobileSmallTextSize: 1.6rem;
}

    html {
        font-size: 62.5%;
    }
    *,*:focus,*::before,*::after {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
        
    }
    body {
        font-family: sans-serif;
        line-height: 1.2;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #00597a;
        border-radius: 1rem;
    }        
    ::-webkit-scrollbar {
        background-color:transparent;
        width: 0.7vw;
    }
    @media (max-width:785px) {
        html {
            font-size: 58.5%;
        }
    }
    @media (max-width:375px) {
        html {
            font-size: 55%;
        }
    }
    .active {
        color: #0179A7;
    }
    .roll::before {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 0;
        background-color: #0179A7;
        height: 3px;
    }
    .visible {
        transform: translateX(0);
        @media (max-width:500px) {
            transform: translateY(0);
        }
    }
    .hide {
        transform: translateX(200%);
        @media (max-width:500px) {
            transform: translateY(-300%);
        }
    }
    .activeMenu {
        transform: translateX(0);
    }
    .inactiveMenu {
        transform: translateX(-100%);
    }
    .activeMenus {
        transform: translateX(0);
    }
    .inactiveMenus {
        transform: translateX(100%);
    }
`;
export default GlobalStyle;
