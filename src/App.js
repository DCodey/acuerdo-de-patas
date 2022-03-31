import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Header />
      <Body/>
      <Footer />
    </DataProvider>
  );
}

export default App;
