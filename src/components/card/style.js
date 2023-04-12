import styled from "styled-components";

export const Card = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    flex-wrap: wrap;
    
    background: rgba(0,174,255,0.7);
    
    
    a{
        gap: 1rem;
    }

    img{
        height: 6rem;
        transition: 100ms;
        &:hover{
            transform: scale(120%);
        }
    }

    span{
        color: white;
        text-align: center;
    }

`