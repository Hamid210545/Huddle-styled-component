import styled from "styled-components";


export const Button = styled.button`
    
    font-size: 1.4rem;
    font-weight: 500;
    border: none;
    border-radius: 30px;
    padding: 15px 60px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};

&:hover {
    opacity: 0.9;
    transform: scale(0.98);
}

@media(max-width: 768px) {
        margin-left: 20px;
}

@media(max-width: 400px) {
    padding: 12px 35px;
}

`