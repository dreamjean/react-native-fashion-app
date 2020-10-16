import React from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import Icon from './Icon';

const TextInput = ({ icon, error, touched, ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.violet : dangerPrimery;

  return (
    <Box style={{ borderColor: reColor }}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={reColor} />}
      <Input
        {...rest}
        placeholderTextColor={touched ? colors.violet : colors.grey2}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
      {touched && <Icon iconName={error ? 'close' : 'check'} size={22} backgroundColor={reColor} />}
    </Box>
  );
};

const Box = styled.View`
  flex-direction: row;
  /* height: 48px; */
  align-items: center;
  border-width: 1px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.violet2,
    borderRadius: radii.s,
    padding: space.s,
    marginVertical: space.s,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, size, space, getFont } }) => ({
    color: colors.text,
    fontSize: size.xl,
    fontFamily: getFont(2),
    marginHorizontal: space.s,
  })}
`;

export default TextInput;
