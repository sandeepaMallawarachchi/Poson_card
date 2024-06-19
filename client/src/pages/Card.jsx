import React, { useRef } from 'react';
import '../css/card.css';
import html2canvas from 'html2canvas';

function Card({ selectedTemplate, details }) {
  const contentRef = useRef(null);

  const downloadImage = () => {
    contentRef.current.classList.add('download-content');

    html2canvas(contentRef.current, {
      useCORS: true,
      scale: 2,
    }).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = `Poson Card from ${details.from} to ${details.to}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      contentRef.current.classList.remove('download-content');
    });
  };

  return (
    <div className='card1'>
      <div className='cmain'>
        <h2>
          Share Poson Cards with your loved ones
        </h2>
      </div>
      <div ref={contentRef} className='content'>
        <div className='template'>
          <img src={selectedTemplate} alt='Selected Template' />
        </div>
        <div className='detail'>
          <p><strong>From:</strong> {details.from}</p>
          <p><strong>To:</strong> {details.to}</p>
          <p><strong>Message:</strong> {details.message}</p>
        </div>
        <small className='link'>poson-card.vercel.app</small>
      </div>
      <div className='downloadImageBtn'>
        <button onClick={downloadImage}>Download</button>
      </div>
    </div>
  );
}

export default Card;