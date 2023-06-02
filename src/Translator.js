import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async (language) => {
    try {
      const response = await axios.get(
        `https://api.funtranslations.com/translate/${language}.json?text=${inputText}`
      );
      setTranslatedText(response.data.contents.translated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
        <h1>Tradutor</h1>
        <textarea
        placeholder="Digite o texto a ser traduzido..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className='button-container'>
          <button onClick={() => translateText('yoda')}>Traduzir para Yoda</button>
          <button onClick={() => translateText('sith')}>Traduzir para Sith</button>
          <button onClick={() => translateText('gungan')}>Traduzir para Gungan</button>
          <button onClick={() => translateText('huttese')}>Traduzir para Huttese</button>
          <button onClick={() => translateText('mandalorian')}>Traduzir para Mandalorian</button>
          <button onClick={() => translateText('cheunh')}>Traduzir para Cheunh</button>
        </div>
        {translatedText && <p>Tradução: {translatedText}</p>}
    </div>
  );

};

export default Translator;
