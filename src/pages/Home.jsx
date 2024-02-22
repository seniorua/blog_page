import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from '../store/slices/addDel'

export const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const addOne = () => {
    dispatch(increment());
  }
  const delOne = () => {
    dispatch(decrement());
  }
  const addAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  }
  const delAmount = (amount) => {
    dispatch(decrementByAmount(amount));
  }

  return (
    <div>
      <h1>Home page</h1>
      <div className='buttons-block'>
        <span className='button' onClick={() => delAmount(10)}>-10</span>
        <span className='button' onClick={delOne}>-</span>
        <span>{count}</span>
        <span className='button' onClick={addOne}>+</span>
        <span className='button' onClick={() => addAmount(10)}>+10</span>
      </div>
    </div>
  )
}