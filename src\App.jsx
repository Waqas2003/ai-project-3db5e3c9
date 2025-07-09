import React from 'react';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';

const App = () => {
  const destinations = [
    {
      title: 'Paris, France',
            image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Tokyo, Japan',
            image: 'https://picsum.photos/200/301',
    },
    {
      title: 'New York City, USA',
            image: 'https://picsum.photos/200/302',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Hero />
      <section className="section">
        <h2 className="title is-2">Destinations</h2>
        <div className="columns is-multiline">
          {destinations.map((destination, index) => (
            <div key={index} className="column is-one-third">
              <Card {...destination} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;