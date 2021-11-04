import styled from "styled-components";

import Outfit from "./Outfit";

const Outfits = ({ data }) => {
  return (
    <Box>
      {data.map((item) => (
        <Outfit key={item.id} item={item} />
      ))}
    </Box>
  );
};

const Box = styled.View`
  width: 50%;

  ${({ theme: { space } }) => ({
    paddingBottom: space.l1,
  })}
`;

export default Outfits;
