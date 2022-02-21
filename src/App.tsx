import { MainRoutes } from "./routes/MainRoutes";
import * as C from "./AppStyles";

const App = () => {
  return (
    <div>
      <div>
        <C.h1>GALERIA DE FOTOS</C.h1>
      </div>
      <hr/>
      <C.div>        
         <MainRoutes />
      </C.div>
      <hr/>
      <C.Footer>
        Todos os direitos reservados.
      </C.Footer>
    </div>
  );
}

export default App;