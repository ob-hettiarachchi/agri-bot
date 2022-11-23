import data from './data';

function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">AgriLK</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} width="679" height="829"/>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
