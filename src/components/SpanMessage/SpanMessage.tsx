import { IMessageResult } from 'types/IMessageResults';
import * as S from './styles';
import React, { useEffect, useState } from 'react';

const SpanMessage: React.FC<IMessageResult> = function ({
  isSucess,
  message,
  setVisible,
  visible,
}) {
  const clickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVisible({ message: '', visible: false });
  };

  return (
    <>
      (
      <S.Wrapper isvisible={visible}>
        <S.Span isSucess={isSucess}>{message}</S.Span>
        <S.Button type="button" onClick={clickHandle} visible={true}>
          Ok
        </S.Button>
      </S.Wrapper>
      )
    </>
  );
};

export default SpanMessage;
