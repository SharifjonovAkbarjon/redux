import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Hero = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)
  return (
    <div>Hero
        <Button onClick={()=> dispatch({type:"INC", payload: 1})}>Increment</Button>
        <Button onClick={()=> dispatch({type:"INC", payload: 10})}>Increment</Button>
        <Button onClick={()=> dispatch({type:"INC", payload: 100})}>Increment</Button>
        <Button disabled={count <= 0} onClick={()=> dispatch({type:"DEC"})}>Decrement</Button>
        <Button onClick={()=> dispatch({type:"RESET"})}>RESET</Button>
    </div>
  )
}

export default Hero