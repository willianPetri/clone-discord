import React from 'react';
import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton mentions={12} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={5} />
      <ServerButton hasNotifications mentions={9} />
      <ServerButton />

    </Container>
  )
};

export default ServerList;