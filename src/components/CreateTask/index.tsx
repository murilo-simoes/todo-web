import * as React from "react";
import {
  Botao,
  Container,
  InputDesc,
  InputTitle,
  LabelInputs,
  Wrapper,
} from "./styled";
import { ToastContainer, toast } from "react-toastify";
import { api } from "@/api/axios";
import "react-toastify/dist/ReactToastify.css";

const CreateTask = () => {
  const [tab, setTab] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const notifyEmpty = () =>
    toast.warning("Por favor, preencha todos os campos!");
  const notifyAlredyExist = () => toast.warning("Essa tarefa ja existe!");
  const notify = () => toast.success("Tarefa criada com sucesso!");

  async function createNewTask() {
    if (title === "" || desc === "") {
      return notifyEmpty();
    }

    try {
      await api
        .post("/newTask", {
          title: title,
          desc: desc,
        })
        .then((response) => {
          if (response.data === "Essa tarefa ja existe!") {
            return notifyAlredyExist();
          } else {
            notify();
            setTitle("");
            setDesc("");
            setTab(0);
            window.location.reload();
            return response;
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {tab === 0 ? (
        <Container>
          <Botao onClick={() => setTab(1)}>+ Nova Tarefa</Botao>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            <LabelInputs>Título</LabelInputs>
            <InputTitle
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Insira um título para sua tarefa"
            />
            <LabelInputs>Descrição</LabelInputs>
            <InputDesc
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="Insira uma descrição para sua tarefa"
            />
          </Wrapper>
          <div style={{ display: "flex" }}>
            <Botao
              onClick={() => setTab(0)}
              style={{
                width: "25%",
                borderRadius: "2rem",
                marginRight: "0.5rem",
                backgroundColor: "red",
              }}
            >
              X
            </Botao>
            <Botao onClick={createNewTask}>Criar Tarefa</Botao>
          </div>
        </Container>
      )}
    </>
  );
};

export default CreateTask;
