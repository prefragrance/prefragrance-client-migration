import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { calculateSize } from "@src/common/utils/calculateSize";

export interface IModal extends IModalContent {
  children?: React.ReactNode;
  open?: boolean;
}

export interface IModalContent {
  width?: number;
  height?: number;
  onInteractOutside?: (event: unknown) => void;
}

const Modal = ({
  children,
  open,
  width = 600,
  height = 600,
  onInteractOutside,
}: IModal) => {
  return (
    <DialogPrimitive.Root open={open}>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent
          width={width}
          height={height}
          onInteractOutside={onInteractOutside}
        >
          {children}
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay)({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  zIndex: 10,
});

const StyledContent = styled(DialogPrimitive.Content)<IModalContent>`
  background-color: ${palette.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => calculateSize(width)};
  height: ${({ height }) => calculateSize(height)};
  overflow-y: auto;
  z-index: 100;
  max-height: 10vh;
  border-radius: 16px;

  &:focus {
    outline: none;
  }
`;

export default Modal;
