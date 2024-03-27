import Main from "./layout/Main";
import ItemContextProvider from "./store/itemContext";

function App() {
  return (
    <ItemContextProvider>
      <Main/>
    </ItemContextProvider>
  );
}
// 35 mins
export default App;
