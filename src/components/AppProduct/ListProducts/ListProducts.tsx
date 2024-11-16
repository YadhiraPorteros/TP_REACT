import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct{
    precio:number;
    imagen:string;
    nombre:string;

}

interface IPropsListProducts{
    arrayItems:ItemProduct[]
}

export const ListProducts: FC<IPropsListProducts> = ({arrayItems}) => {
  return (
    <div className="p-4 border rounded d-grid gap-2"
    style={{gridTemplateColumns: "repeat(2, 1fr)",
            justifyItems:"center",
            alignItems:"center"
    }}>
        {arrayItems.map((el, i) =>(
                <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.imagen} />
                <Card.Body>
                  <Card.Title>{el.nombre}</Card.Title>
                  <Card.Text>
                    ${el.precio}
                  </Card.Text>
                 
                </Card.Body>
              </Card>
        ))}
    </div>
  )
}
