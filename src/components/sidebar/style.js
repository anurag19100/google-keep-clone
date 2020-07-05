import styled from "styled-components";
import { Menu } from "@styled-icons/feather/Menu";

export const Container = styled.div`
  position: relative;
  width: ${(props) => (props.isActive ? "250px" : "80px")};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: fixed;
  top: 0;
  width: 80px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  border-radius: 50%;
  cursor: pointer;
`;

export const MenuIconWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

export const MenuIcon = styled(Menu)`
  width: 28px;
  height: 28px;
  opacity: 0.7;
  cursor: pointer;
`;
