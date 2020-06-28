import styled from "styled-components";
import styleConfig from "../../style-configs";

import { ArchiveIn as Archive } from "@styled-icons/boxicons-regular/ArchiveIn";
import { ArchiveIn as ActiveArchive } from "@styled-icons/boxicons-solid/ArchiveIn";
import { Pin } from "@styled-icons/boxicons-regular/Pin";
import { Pin as ActivePin } from "@styled-icons/boxicons-solid/Pin";
import { Delete } from "@styled-icons/material/Delete";

export const Wrapper = styled.div`
  min-height: 220px;
  width: 240px;
  color: ${styleConfig.textColor};
  white-space: pre-wrap;
  border-radius: 8px;
  border: 1px solid ${styleConfig.borderColor};
  background-color: ${styleConfig.backgroundColor};
  overflow: hidden;
  position: relative;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  box-shadow: ${(props) =>
    !props.isHovered
      ? "1px 2px 1px 0px rgba(0,0,0,0.034), -1px 2px 1.3px 0px rgba(0,0,0,0.048)"
      : "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06)"};
  cursor: default;
`;

export const Container = styled.div`
  min-height: 30px;
  margin-bottom: 45px;
  white-space: pre-wrap;
`;

export const Header = styled.div`
  min-height: 38px;
`;

export const Footer = styled.div`
  height: 32px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ActionPanel = styled.div`
  position: relative;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.isHovered ? 0.8 : 0)};
`;

export const ArchiveIcon = styled(Archive)`
  width: 24px;
  height: 24px;
  opacity: 0.8;
`;

export const ActiveArchiveIcon = styled(ActiveArchive)`
  width: 24px;
  height: 24px;
`;

export const DeleteIcon = styled(Delete)`
  width: 24px;
  height: 24px;
  opacity: 0.8;
`;

export const PinIcon = styled(Pin)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const ActivePinIcon = styled(ActivePin)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Text = styled.div`
  letter-spacing: 0.00625em;
  font-size: 1.2rem;
  line-height: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  font-variant-ligatures: none;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 10px 16px;
`;

export const IconContainer = styled.div`
  width: 42px;
  height: 36px;
  float: right;
  opacity: ${(props) => (props.isHovered ? 0.8 : 0)};
`;

export const ContentText = styled(Text)`
  padding: 2px 16px;
`;