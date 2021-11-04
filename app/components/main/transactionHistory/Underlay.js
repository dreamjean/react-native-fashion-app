import dayjs from "dayjs";
import styled from "styled-components";

import { constants } from "../../../config";
import { Text } from "../../../styles";

const Underlay = ({ dates, step }) => {
  return (
    <>
      {[500, 400, 300, 200, 100, 0].map((t) => (
        <RowBar height={t === 500 ? 0 : constants.GRAPH_HEIGHT / 5} key={t}>
          <Text
            caption
            style={{
              opacity: 0.6,
              position: "absolute",
              bottom: -14,
              left: 0,
              marginRight: 4,
            }}
          >
            {t}
          </Text>
          <Seperator />
        </RowBar>
      ))}

      <Xaxis>
        {dates.map((date, index) => (
          <Dates key={index} width={step}>
            <Text caption center opacity={0.6}>
              {dayjs(date).format("MMM")}
            </Text>
          </Dates>
        ))}
      </Xaxis>
    </>
  );
};

const RowBar = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  ${({ height, theme: { space } }) => ({
    marginLeft: space.m2,
    height,
  })};
`;

const Seperator = styled.View`
  height: 1px;
  width: 90%;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.text,
    marginLeft: space.l2,
    opacity: 0.1,
  })};
`;

const Xaxis = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Dates = styled.View`
  ${({ width }) => ({
    width,
  })}
`;

export default Underlay;
