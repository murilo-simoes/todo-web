import CreateTask from "@/components/CreateTask";
import TaskList from "@/components/TaskList";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <TaskList />
      <CreateTask />
    </>
  );
}
