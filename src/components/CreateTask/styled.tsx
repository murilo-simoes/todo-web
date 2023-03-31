import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Wrapper = styled.div`
    width: 450px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        width: 350px;
    }
    @media screen and (max-width: 400px) {
        width: 300px;
    }
`

export const Botao = styled.button`
    width: 175px;
    color:#fff;
    background-color: #5a5a5a;
    border-radius: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    font-size: 1rem;
    border: none;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 200ms all ease-in;

    &:hover{
        background-color: #eee;
        color: #000;
    }
`

export const InputTitle = styled.input`
    width: 100%;
    border-radius: 8px;
    background-color: #5a5a5a;
    border: none;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #fff;
    transition: 300ms all ease-in;
    box-sizing: border-box;
    padding-left:10px;
    &::placeholder{
        color: #9b9a9a;
        transition: 200ms all ease-in;
    }

    &:hover{
        &::placeholder{
         
            color: #c4c4c4;
        }
    }
    
`

export const InputDesc = styled.textarea`
    padding-top: 5px;
    width: 100%;
    height:100px;
    border: none;
    border-radius: 8px;
    resize: none;
    background-color: #5a5a5a;
    color: #fff;
    padding-left:10px;
    box-sizing: border-box;
    &::placeholder{
        color: #9b9a9a;
        transition: 200ms all ease-in;
    }

    &:hover{
        &::placeholder{
         
            color: #c4c4c4;
        }
    }
`

export const LabelInputs = styled.label`
    color: #fff;
    font-size: 1.2rem;
    font-family: "Poppins";
    margin-bottom: 0.8rem;
    margin-top: 1rem;
`