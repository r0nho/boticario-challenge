import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import { Heading, WrapHeader, WrapContainer } from './styles/';
import Logo from 'assets/images/logo.png';

const Header = ({ name }: { name: string }) => {
  return (
    <>
      <WrapHeader>
        <WrapContainer>
          <img src={Logo} alt="O Boticario Logo" title="O Boticario" width="200" />
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
