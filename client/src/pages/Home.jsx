import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import img1 from '../images/img2.jpg';
import img2 from '../images/img4.jpg';
import img3 from '../images/img5.jpg';
import img4 from '../images/img6.png';
import '../css/home.css';

function Home({ setSelectedTemplate }) {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    navigate('/details');
  };

  return (
    <div className='home'>
      <div className='main'>
        <h2>
          Share Poson Cards with your loved ones
        </h2>
      </div>
      <div className="templates">
        <h1>Select Your Template</h1>
        <div className="images">
          <img src={img1} alt='Image 1' onClick={() => handleTemplateSelect(img1)} />
          <p>Resource: </p><a href='https://www.freepik.com/' target="_blank" rel="noopener noreferrer">freepik.com</a>
          <img src={img2} alt='Image 2' onClick={() => handleTemplateSelect(img2)} />
          <p>Resource: </p> <a href='https://www.freepik.com/' target="_blank" rel="noopener noreferrer">freepik.com</a>
          <img src={img3} alt='Image 3' onClick={() => handleTemplateSelect(img3)} />
          <p>Resource: </p> <a href='https://www.freepik.com/' target="_blank" rel="noopener noreferrer">freepik.com</a>
          <img src={img4} alt='Image 4' onClick={() => handleTemplateSelect(img4)} />
          <p>Resource: </p> <a href='https://www.google.com/imgres?q=poson%20poya%20gif&imgurl=http%3A%2F%2Fwww.defence.lk%2Fassets%2Fimg%2FPoson_tag_EN.gif&imgrefurl=https%3A%2F%2Fwww.defence.lk%2FArticle%2Fview_article%2F4641&docid=a2vUk5wQvq2cRM&tbnid=cJrNOPZ_8D264M&vet=12ahUKEwjOjOemheeGAxWW3TgGHT_-DVAQM3oECFQQAA..i&w=900&h=600&hcb=2&ved=2ahUKEwjOjOemheeGAxWW3TgGHT_-DVAQM3oECFQQAA' target="_blank" rel="noopener noreferrer">poson poya.gif</a>
        </div>
      </div>
    </div>
  );
}

export default Home;