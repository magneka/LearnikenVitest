import React, { useState } from 'react';

const Buttonwfetch = () => {

  const [joke, setJoke] = useState<string>("nada");

  // Async await based fetch
  const fetchJoke1 = async () => {
    return fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((responseJson) => {
        setJoke(responseJson.value)
        return responseJson
      }
      );
  }

  // Promise based alternativ fetch
  const fetchJoke2 = async () => {
    setJoke("please wait")
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {}
      });
      if (!response.ok) {
        setJoke("joke received")
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setJoke(data.value);
    } catch (error) {
      setJoke("error" + error)
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div data-testid="joke">joke: {joke}</div>

      <button onClick={async () => await fetchJoke1()} >fetch data</button>
    </>
  );
};

export default Buttonwfetch;