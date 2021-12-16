
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({bg}) => bg};
    color: ${({ theme }) => theme.colors.header};

    p {
        color: yellow;
    };

    &:hover {
        background-color: blue;
    };
`