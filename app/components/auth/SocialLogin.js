import React from 'react';
import styled from 'styled-components';

import Apple from '../../assets/logos/apple.svg';
import Facebook from '../../assets/logos/facebook-3.svg';
import Google from '../../assets/logos/google-icon.svg';
import SvgIcon from '../SvgIcon';

const SocialLogin = () => {
  return (
    <Icons>
      <SvgIcon IconName={Facebook} width={50} height={50} />
      <SvgIcon IconName={Google} width={26} height={26} />
      <SvgIcon IconName={Apple} width={28} height={28} />
    </Icons>
  );
};

const Icons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingVertical: space.m2,
  })}
`;

export default SocialLogin;
