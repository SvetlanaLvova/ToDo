import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useTodosContext } from './contexts/todosContext';
import { TodosContext } from './contexts/todosContext'

function App() {

  const {todos} = useTodosContext(TodosContext);

  return (
    <>
    <div className="container py-5">
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;




