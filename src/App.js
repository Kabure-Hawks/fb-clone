import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();


  return (
    
    //BEM naming convention (Convenção de nomenclatura BEM)
    <div className="app">
    {!user ? (
    < Login />
    ) : (
      <>

       {/* Header (Cabeçalho) */}
      < Header />

      {/* App Body (Corpo da Aplicação) */}
      <div className="app--body">
        < Sidebar/> {/* SideBar (Barra Lateral) */}
        < Feed /> {/* Feed (Alimentar. Na internet siguinifica Acompanhar) */}
        < Widgets /> {/* Widgets (Ferramentas) */}
      </div>

      </>

    )}
     
        
    </div>
  );
}

export default App;
