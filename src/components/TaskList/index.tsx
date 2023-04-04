import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container, Task, TaskDesc, TaskTitle, Wrapper } from "./styled";
import { api } from "@/api/axios";
import { formatDate } from "@/types/utils";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const notify = () => toast.success("Tarefa excluída com sucesso!");
  const notifyReady = () => toast.success("Tarefa concluída!! Uhuuuuu!");
  const notifyNotReady = () =>
    toast.info("Melhor tentar de novo, não desista!");

  //deletar as tasks
  async function deleteTasks(title: any) {
    const deleteTask = await api.post("/delTask", {
      title: title,
    });

    return notify();
  }

  //colocar a task como pronta
  async function readyTasks(title: any) {
    try {
      const readyTask = await api.post("/upTask", {
        title: title,
      });
      if (readyTask.data.isDone === false) {
        return notifyNotReady();
      } else {
        return notifyReady();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function selectAllTasks() {
    const allTasks = await api.get("/tasks");
    const sortedAvictivities = allTasks.data.sort(
      (a: any, b: any) => b.id - a.id
    );
    setTasks(sortedAvictivities);
  }

  //fazer o select de todas as tasks
  useEffect(() => {
    selectAllTasks();
  });

  return (
    <>
      <Container>
        <Wrapper>
          {tasks.length === 0 ? (
            <div className="divPai">
              <div className="divFilho">
                <h1 className="h1Neto">
                  Adicione novas tarefas para elas aparecerem aqui!
                </h1>
              </div>
            </div>
          ) : (
            tasks?.map((item: any, i) => {
              return (
                <Task key={item.id}>
                  <div className="taskDivTitle">
                    {item.isDone === false ? (
                      <TaskTitle
                        style={{ cursor: "pointer" }}
                        onClick={() => readyTasks(item.title)}
                      >
                        {item.title}
                      </TaskTitle>
                    ) : (
                      <TaskTitle
                        style={{
                          color: "#929292",
                          textDecoration: "line-through",
                          cursor: "pointer",
                        }}
                        onClick={() => readyTasks(item.title)}
                      >
                        {item.title}
                      </TaskTitle>
                    )}

                    <FontAwesomeIcon
                      onClick={() => deleteTasks(item.title)}
                      icon={faTrash}
                      className="lixo"
                    />
                  </div>
                  <div className="taskDiv">
                    {item.isDone === false ? (
                      <TaskDesc
                        style={{ cursor: "pointer" }}
                        onClick={() => readyTasks(item.title)}
                      >
                        {item.desc}
                      </TaskDesc>
                    ) : (
                      <TaskDesc
                        style={{
                          color: "#727272",
                          textDecoration: "line-through",
                          cursor: "pointer",
                        }}
                        onClick={() => readyTasks(item.title)}
                      >
                        {item.desc}
                      </TaskDesc>
                    )}
                    {item.isDone === false ? (
                      <TaskDesc
                        onClick={() => readyTasks(item.title)}
                        style={{
                          fontSize: "0.9rem",
                          color: "#2a2929",
                          cursor: "pointer",
                        }}
                      >
                        {formatDate(item.createdAt)}
                      </TaskDesc>
                    ) : (
                      <TaskDesc
                        onClick={() => readyTasks(item.title)}
                        style={{
                          fontSize: "0.9rem",
                          color: "#4a4a4a",
                          textDecoration: "line-through",
                          cursor: "pointer",
                        }}
                      >
                        {formatDate(item.createdAt)}
                      </TaskDesc>
                    )}
                  </div>
                </Task>
              );
            })
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default TaskList;
