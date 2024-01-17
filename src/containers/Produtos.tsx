import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import {useGetProdutoQuery } from '../services/api'

import * as S from './styles'

type Props = {
  produto: ProdutoType
}

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutoQuery()

  if (isLoading) return <h2>carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

