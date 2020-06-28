import styled from "styled-components";
import styleConfig from "../../style-configs";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const TakeNote = styled.div`
  border: 1px solid ${styleConfig.borderColor};
  border-radius: 5px;
  width: 60%;
  max-width: 540px;
  background: ${styleConfig.backgroundColor};
  height: 42px;
  display: flex;
  align-items: center;
  color: ${styleConfig.secondaryTextColor};
  padding: 0 15px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
`;
