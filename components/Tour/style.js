import styled from "styled-components";

import map from "@/assets/icons/map.svg";

export const Container = styled.section`
  display: flex;
  overflow: hidden;
`;
export const ImgWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 65%;
`;
export const Section = styled.div`
  position: relative;
  width: 35%;
  background-color: red;
`;
export const InfoWrapper = styled.div`
  height: 100%;
  position: relative;
  /* left: -100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
`;

export const Icon = styled.div``;
Icon.MapSvg = styled(map)`
  position: absolute;
  right: 0;
  top: 0;
`;
