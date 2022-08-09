import React from "react";
import * as S from './styles'

import filter from '../../assets/filter.png'

function FilterCard({ title, activated }) {
    return(
        <S.Container activated={activated}>
            <img src={filter} alt="Filtro"/>
            <span>{title}</span>
        </S.Container>
    );
}

export default FilterCard;