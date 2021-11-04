import dayjs from "dayjs";
import styled from "styled-components";

import { Text } from "../../../styles";
import Button from "../../Button";

const Transaction = ({ color, date, id, value }) => {
  return (
    <Wrapper>
      <Box>
        <NumBox>
          <Dot color={color} />
          <Text title1 style={{ fontSize: 18, opacity: 0.8 }}>
            #{id}
          </Text>
        </NumBox>
        <TextBox>
          <Text button opacity={0.35}>
            {`$${value} - ${dayjs(date).format("DD MMMM,YYYY")}`}
          </Text>
        </TextBox>
      </Box>
      <Button
        borderColor={color}
        label="See more"
        textStyle={{ textTransform: "none", color: color }}
        onPress={() => true}
        width={100}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.l1,
    paddingVertical: space.s2,
  })}
`;

const Box = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const NumBox = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginBottom: space.s2,
  })}
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  ${({ color, theme: { space } }) => ({
    backgroundColor: color,
    marginRight: space.m1,
  })}
`;

const TextBox = styled.View`
  flex-direction: row;
`;

export default Transaction;
