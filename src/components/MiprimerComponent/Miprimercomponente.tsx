import { FC } from "react";

interface IPropsMiprimerComponent {
    text:string;
    color: string;
    fontSize?: number;
}

export const Miprimercomponente : FC<IPropsMiprimerComponent> = ({
    text,
    color,
    fontSize 
}) => {
  return (
    <div style={{color: `${color}`, 
        fontSize: `${fontSize || 1}rem`}}>
        <p>{text}</p>       
    </div>
  )
}
