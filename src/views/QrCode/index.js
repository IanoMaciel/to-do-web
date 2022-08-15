import React, { useState, useEffect } from 'react';
import * as S from './styles';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  return(
    <S.Container>
        <Header/>
        
        <S.Content>
            <h1>Capturar o código pelo APP</h1>
            <S.QrCodeArea></S.QrCodeArea>
            <p>Suas atividades serão sincronizadas com o seu celular</p>
        </S.Content>

        <Footer/>
    </S.Container>
  );
}

export default QrCode;
