import { type FC, memo, type PropsWithChildren } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Board: FC<PropsWithChildren> = memo(({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
});

export { Board };
