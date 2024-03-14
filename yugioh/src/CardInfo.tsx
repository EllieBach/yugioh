import {useState, useEffect} from 'react'
type YugiohInfo = { 
    id: number;
    name: string;
    atk: number; 
    def: number;
    desc: string;



}
const Card = ()=> {
    [card, setCard] = useState ({} as YugiohInfo)
}
const CardInfo = () => {
  return (
    <div>CardInfo</div>
  )
}

export default Card