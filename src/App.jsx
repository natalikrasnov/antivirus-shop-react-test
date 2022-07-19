import './App.css'
import Header from './commponets/shared/header/Header.commponent'
import Store from './commponets/storeMain/Store.componnent'
import ProductsContextProvider from './context/Products.context'

function App() {

  return (
    <div >
      <ProductsContextProvider>
        <Header />
        <Store />
      </ProductsContextProvider>
    </div>
  )
}

export default App
