import styled from "styled-components";

export const SyledHeader = styled.header`

background-color: ${({ theme }) => theme.colors.header};
padding: 40px 0px; 
`

export const Image = styled.img`
        width: 375px;
        margin-left: 40px;

@media(max-width: 768px) {
    margin: 40px 0 30px;

}
`

export const Nav = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;

@media(max-width: 768px) {
        flex-direction: column;
        margin-left: -30px;
}

`

export const Logo = styled.img`

@media(max-width: 768px) {
    margin-bottom: 40px;
}

`