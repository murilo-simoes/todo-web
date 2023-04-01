import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  background-color: #3a3a3a;
  width: 450px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: 600px;
  overflow: auto;
  border: 1px solid #730404;
  border-radius: 5px;

  .divPai {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .divFilho {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .h1Neto {
    color: #fff;
    font-family: "Poppins";
    font-size: 1rem;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 350px;
  }
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

export const Task = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 100%;
  border-bottom: 5px solid #252323;
  background-color: #5a5a5a;
  transition: 300ms all easy-in;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .taskDivTitle {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .lixo {
      font-size: 1.4rem;
      color: #fff;
      transition: 0.2s all ease-in;
      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
  .taskDiv {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex;
  }
`;

export const TaskTitle = styled.h1`
  font-size: 1.4rem;
  color: #efefef;
  font-family: "Poppins";
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  width: 90%;
  overflow-wrap: break-word;
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const TaskDesc = styled.p`
  font-family: "Poppins";
  color: #b1b1b1;
  margin-bottom: 1rem;
  text-align: justify;
  line-height: 1.1rem;
  text-justify: inter-word;
  width: 90%;
  overflow-wrap: break-word;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
