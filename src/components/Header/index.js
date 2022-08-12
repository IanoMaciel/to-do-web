import React from 'react'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

import * as S from './styles'

function Header({ lateCount, clickNotification }) {
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
        <button type="button" onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação"/>
          <span>{ lateCount }</span>
        </button>
      </S.RigthSide>
    </S.Container>
  );
}

export default Header;
