import * as S from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  handleChange(value: string): void
  search: string | null
}

function InputSearch({ handleChange, search, ...rest }: Props) {
  return (
    <S.Container>
      <S.Input
        {...rest}
        value={search ? search : ''}
        placeholder="Search"
        onChange={(e) => handleChange(e.target.value)}
        type={'search'}
      ></S.Input>
    </S.Container>
  )
}

export default InputSearch
