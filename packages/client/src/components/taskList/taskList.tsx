import { type FC, memo, useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, taskSlices } from "@utils/constants";
import TaskItem from "components/taskItem";
import { useAppDispatch } from "../../reducers/hooks";
import { type Task, type TaskProps, type Tasks } from "../../types/types";
import { ListWrapper } from "./taskList.styled";

interface TaskListProps {
  name: string;
  tasks?: Task[];
}
const TaskList: FC<TaskListProps> = memo((props) => {
  const { name, tasks } = props;
  const dispatch = useAppDispatch();

  const onRemove = useCallback((event: React.MouseEvent) => {
    const target = event?.target as HTMLElement;
    if (target?.dataset?.action === "remove") {
      const { id } = target?.dataset;
      dispatch(taskSlices[name as Tasks].actions.remove(id!));
    }
  }, []);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      drop: (item: TaskProps) => {
        const { col } = item;

        if (col === name) {
          return false;
        }

        dispatch(taskSlices[name as Tasks].actions.add(item));
        dispatch(taskSlices[col as Tasks].actions.remove(item.id!));
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [name],
  );
  return (
    <ListWrapper data-type={name} ref={drop} onClick={onRemove}>
      {tasks && tasks.length > 0
        ? tasks.map((i) => (
            <TaskItem key={i.id} title={i.title} id={i.id} col={name} />
          ))
        : null}
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.2,
            backgroundColor: "green",
          }}
        />
      )}
    </ListWrapper>
  );
});

export { TaskList };
