import { Xmark } from "@gravity-ui/icons";
import { Close, ModalWrapper, Overlay } from "./modal.styled";
import type { FC, PropsWithChildren } from "react";

interface ModalProp extends PropsWithChildren {
  onClose: () => void;
}
const Modal: FC<ModalProp> = ({ onClose, children }) => (
  <>
    <Overlay />
    <Close onClick={onClose}>
      <Xmark />
    </Close>
    <ModalWrapper>{children}</ModalWrapper>
  </>
);

export { Modal };
