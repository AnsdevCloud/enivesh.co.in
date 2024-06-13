import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const PngGenerator = () => {
    const elementRef = useRef(null);

    const handleDownload = () => {
        html2canvas(elementRef.current).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'image.png';
            link.click();
        });
    };

    return (
        <div>
            <div
                ref={elementRef}
                style={{
                    position: 'relative',
                    padding: '20px',
                    backgroundColor: '#000000',
                    color: 'white',
                    zIndex: 0


                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/images/healthins/claimseteld.jpg)', // Replace with your image URL
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(30%)',
                        zIndex: -1,
                    }}
                >

                </div>
                <ImageBox>
                    <div className="logo"><img src="/images/healthins/claimseteld.jpg" alt="" /></div>
                    <h1 className='title'>Hello, World!</h1>
                    <p>This is an example of a PNG generator with a custom background image and darkness filter.</p>
                </ImageBox>
            </div>
            <button onClick={handleDownload}>Download as PNG</button>
        </div>
    );
};

export default PngGenerator;
const ImageBox = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  .logo{
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
  }
.title{
    color: #ff5c00;
}
  img{
    width: 100%;
    height: 100%;
  }
  z-index: 2;
`;
