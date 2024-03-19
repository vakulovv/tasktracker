import { doneSlice as done } from "../reducers/done/done";
import { inProgressSlice as inProgress } from "../reducers/inProgress/inProgress";
import { plannedSlice as planned } from "../reducers/planned/planned";

export const types = {
  'planned': 'Planned',
  'inProgress': 'In Progress',
  'done' : 'Done'
}

export const taskSlices = { done, inProgress, planned };
export const ItemTypes = {
  TASK: "taskItem",
};
