import {
  EmptyKampListText,
  EmptyKampListWrapper,
} from './EpmtyKampList.styles';

export default function EmptyKampList() {
  return (
    <EmptyKampListWrapper>
      <EmptyKampListText>
        No camps. Please, try to choose another filters.{' '}
      </EmptyKampListText>
    </EmptyKampListWrapper>
  );
}
