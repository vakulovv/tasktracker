import { TrashBin } from "@gravity-ui/icons";
import { type FC, memo } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "@utils/constants";
import { type TaskProps } from "../../types/types";
import { TaskWrapper } from "./taskItem.styled";

const TaskItem: FC<TaskProps> = memo(({ id, title, col }) => {
  const [item, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: { title, id, col },
      collect: (monitor) => ({
        isDragging: true,
      }),
    }),
    [id],
  );

  return (
    <TaskWrapper ref={drag}>
      {title ?? "My taskItem"}{" "}
      <TrashBin width={22} height={22} data-id={id} data-action="remove" />
    </TaskWrapper>
  );
});

export { TaskItem };
