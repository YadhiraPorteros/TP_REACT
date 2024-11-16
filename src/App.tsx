import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {
 
  return (
    <div style={{display: "flex", flexDirection: "column", gap:"2vh"}}>
    {/* <Miprimercomponente 
    text={"Texto desde propiedades"}
    color="red"
    fontSize={5}
    />
    <ComponentCounter/>
    <ComponentUseEffect/> */}
    {/* <FormComponent/> */}
    
    <AppProduct/>
    
    </div>
  );
};
