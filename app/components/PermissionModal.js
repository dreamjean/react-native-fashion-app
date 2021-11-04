import styled from "styled-components";

import { colors } from "../config";
import Button from "./Button";

function PermissionModal({
  visible,
  onCameraPermission,
  onCameraRollPermission,
  onCloseModal,
}) {
  return (
    <Modal {...{ visible }} animationType="slide" transparent>
      <Container>
        <Wrapper>
          <Button
            label="Camera"
            primary
            paddingHorizontal={20}
            onPress={onCameraPermission}
          />

          <Button
            label="Galler"
            primary
            paddingHorizontal={30}
            onPress={onCameraRollPermission}
          />
        </Wrapper>
        <CancelBox>
          <Button
            label="Cancel"
            primary
            bgColor={colors.secondary}
            borderColor={colors.white}
            onPress={onCloseModal}
          />
        </CancelBox>
      </Container>
    </Modal>
  );
}

const Modal = styled.Modal``;

const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.secondary,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    padding: space.l2,
  })}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;

  ${({ theme: { space } }) => ({
    paddingBottom: space.m2,
  })}
`;

const CancelBox = styled.View`
  width: 180px;
  align-self: center;
`;

export default PermissionModal;
