import { Plus } from "@gravity-ui/icons";
import { type FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import AddTaskForm from "@components/addTaskForm";
import Board from "@components/board";
import Modal from "@components/modal";
import TaskList from "@components/taskList";
import { type RootStateType } from "../../store";
import {
  Section,
  Button,
  TasksCol,
  TasksRow,
  TrackerWrapper,
} from "./tracker.styled";

export const Tracker: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { done, planned, inProgress } = useSelector(
    (state: RootStateType) => state,
  );

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <TrackerWrapper>
      <h1>Task Tracker</h1>
      <Section>
        <Button onClick={onOpenModal} name="openForm">
          <Plus width={22} height={22} />
          Создать
        </Button>
      </Section>
      <Section>
        <Board>
          <TasksRow>
            <TasksCol>
              <h2>Planned</h2>
              <TaskList name="planned" tasks={planned.data} />
            </TasksCol>
            <TasksCol>
              <h2>In Progress</h2>
              <TaskList name="inProgress" tasks={inProgress.data} />
            </TasksCol>
            <TasksCol>
              <h2>Done</h2>
              <TaskList name="done" tasks={done.data} />
            </TasksCol>
          </TasksRow>
        </Board>
      </Section>
      {isOpen && (
        <Modal onClose={onCloseModal}>
          <AddTaskForm callback={onCloseModal} />
        </Modal>
      )}
    </TrackerWrapper>
  );
};
