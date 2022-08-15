import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';
// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  return(
    <S.Container>
        <Header/>
        
        <S.Content>
            <h2>Capturar o código pelo APP</h2>
            <p>Suas atividades serão sincronizadas com o seu celular</p>
            <S.QrCodeArea>
              <Qr value="getmacaddress" size={350}/>
            </S.QrCodeArea>

            <S.CodeValidation>
              <span> Informe o código que apareceu no seu celular </span>
              <input type="text"/>
              <button>Sincronizar</button>
            </S.CodeValidation>
        </S.Content>

        <Footer/>
    </S.Container>
  );
}

export default QrCode;
