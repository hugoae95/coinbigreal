import React, { Suspense } from 'react';
import Header from './components/Header';
import Routes from './routes/Web'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>loading</div>}>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Suspense>
    )
  }
}

export default App;