// pages/index.js
import Head from 'next/head';
import Map from './components/Map';
import ClientOnlyMap from './components/ClientOnlyMap';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ClientOnlyMap />
    </div>
  );
};

export default HomePage;