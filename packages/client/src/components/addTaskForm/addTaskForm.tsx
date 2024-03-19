import { type FC, type FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskSlices, types} from "@utils/constants";
import { type Tasks } from "types/types";
import { useAppDispatch } from "../../reducers/hooks";
import {
  Button,
  Form,
  FormSection,
  FormWrapper,
  Input,
  Select,
} from "./addTaskForm.styled";

interface AddTaskFormProp {
  callback: () => void;
}
const AddTaskForm: FC<AddTaskFormProp> = ({ callback = () => {} }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const onTitleChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event?.target as HTMLInputElement;
    setTitle(target.value);
  };

  const onTypeChange = (event: FormEvent<HTMLSelectElement>) => {
    const target = event?.target as HTMLSelectElement;
    setType(target.value);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  function onAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { title, type } = Object.fromEntries(formData);
    if (!title) {
      return false;
    }
    const id = uuidv4();
    const task = { id, title: title as string };
    dispatch(taskSlices[type as Tasks].actions.add(task));
    callback();
  }

  return (
    <FormWrapper>
      <Form action="#" onSubmit={onAddTask}>
        <FormSection>
          <Input
            name="title"
            value={title}
            placeholder="Название задачи"
            ref={inputRef}
            onChange={onTitleChange}
          />
        </FormSection>
        <FormSection>
          <Select name="type" value={type} onChange={onTypeChange}>


            { Object.entries(types).map(([key,value]) => <option value={key}>{value}</option>)}
          </Select>
        </FormSection>
        <FormSection>
          <Button type="submit" name="button" value="submit">
            Добавить задачу
          </Button>
        </FormSection>
      </Form>
    </FormWrapper>
  );
};

export { AddTaskForm };
