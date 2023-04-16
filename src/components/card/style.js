import styled from "styled-components";

export const Card = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 2.2rem ;
    flex-wrap: wrap;
    background: rgba(0,174,255,0.7);
    margin: 1rem;
    border-radius: 4rem 1rem;
    
    
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