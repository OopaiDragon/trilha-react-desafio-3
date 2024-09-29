import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 30px auto 0px;
    display: flex; 
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: "Open Sans", sans-serif;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ isWhiteBackground }) => (isWhiteBackground ? '48%' : '48%')};  
    padding: 2rem;
    align-items: flex-start;
    box-shadow: ${({ isWhiteBackground }) => (isWhiteBackground ? 'none' : 'none')}; 
    margin-left: ${({ isWhiteBackground }) => (isWhiteBackground ? '150px' : '0')};  
    margin-top: ${({ isWhiteBackground }) => (isWhiteBackground ? '20px' : '0')}; 
`;

export const Title = styled.h2`
    font-size: 32px;
    color: white;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const TitleLogin = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left;
`;

export const Subtitle = styled.p`
    font-size: 16px;
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const Row = styled.div`
    display: column;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const TypeText  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
`;

export const SignText =  styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    span {
        color: #23DD7A;  
        cursor: pointer;
    }
`;
