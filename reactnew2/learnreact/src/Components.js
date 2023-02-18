import styled, {css} from "styled-components";

export const Title = styled.h1` 
    font-size:2rem;
    font-weight:600;
    text-decoration:none;
    color:black;
${
    props => props.theme === "dark" && css`
        background:red;
        color:#fff;
        cursor:pointer;
        transition:all 0.3s;
        &:hover{
            background:blue;
            transition: 0.4s all;
        }
    `
}
`




