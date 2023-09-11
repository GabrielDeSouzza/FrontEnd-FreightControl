import * as S from './styles';

const SpanError = function ({ message = '' }) {
  return (
    <S.Wapper>
      <S.Span>
        <h1>{message}</h1>
      </S.Span>
    </S.Wapper>
  );
};

export { SpanError };
