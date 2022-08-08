import React from 'react'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

import * as S from './styles'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>

      <S.RigthSide>
        <a href='#'>HOME</a>
        <span className='divider'/>
        <a href='#'>NOVA TAREFA</a>
        <span className='divider'/>
        <a href='#'>SINCRONIZAR CELULAR</a>
        <span className='divider'/>
        <a href="#" id="notification">
          <img src={bell} alt="Notificação"/>
          <span>5</span>
        </a>
      </S.RigthSide>
    </S.Container>
  );
}

export default Header;
