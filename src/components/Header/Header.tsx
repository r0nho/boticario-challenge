import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import { Heading, WrapHeader, WrapContainer } from './styles/';
import Logo from 'assets/images/logo.svg';

const Header = ({ name, }: { name: string }) => {
  return (
    <>
      <WrapHeader>
        <WrapContainer>
          <img src={Logo} alt="FreightHub Logo" title="FreightHub" width="200" />
          <Heading>
            <PersonIcon className="blue" />
            {name}
          </Heading>
        </WrapContainer>
      </WrapHeader>
    </>
  );
};

export default Header;
