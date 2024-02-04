import React, {SyntheticEvent} from 'react'

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} />
    <button className='border rounded-lg bg-slate-400 border-black p-4 hover:-translate-y-5 hover:rounded-none duration-300'>Add Stock</button>
    </form>
  )
}

export default AddPortfolio