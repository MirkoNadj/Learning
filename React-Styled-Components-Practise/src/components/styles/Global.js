import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);

}
`
export default GlobalStyles;