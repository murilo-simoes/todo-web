import CreateTask from "@/components/CreateTask";
import TaskList from "@/components/TaskList";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
            color: "#eee",
            fontFamily: "Poppins",
          }}
        >
          <h1>
            No momento, o servidor gratuito que utilizo para o banco de dados
            funcionar atingiu o limite de requisições gratuitas, então
            infelizmente a lista não está funcionando.
          </h1>
        </div>
      </div>
      <TaskList />
      <CreateTask />
    </>
  );
}
