import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import styled from 'styled-components';
import { Button, Container, Stack } from '@mui/material';
import fb from '../../Firebase/FireConfig';
import { Download, Edit, Share } from '@mui/icons-material';
import ShareButton from './ShareComponent';

const PostImageGen = ({ data, title, discription, image }) => {

    const contentRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [blobUrl, setBlobUrl] = useState('');
    const [content, setContent] = useState(data);
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        setContent({
            ...content,
            title: title ? title : data?.title,
            dis: discription
        })
        setBlobUrl(image)

    }, [data, image, title, discription])


    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const downloadPNG = () => {
        if (!imageLoaded) {
            alert('Please wait for the image to load.');
            return;
        }

        html2canvas(contentRef.current).then(canvas => {
            canvas.toBlob(blob => {
                saveAs(blob, 'downloaded_page.png');
            });
        });
    };



    useEffect(() => {
        // Function to fetch the image and convert it to a blob URL
        const fetchImageAsBlobUrl = async (url) => {
            try {
                // Fetch the image data
                const response = await fetch(url);

                // Check if the response is OK (status 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Convert the response to a blob
                const blob = await response.blob();

                // Create a blob URL
                const blobUrl = URL.createObjectURL(blob);

                // Set the blob URL in the state
                setBlobUrl(blobUrl);
            } catch (error) {
                console.error('Error fetching the image:', error);
            }
        };

        // Call the function with the provided image URL
        fetchImageAsBlobUrl(imageUrl);

        // Cleanup function to revoke the object URL when the component unmounts
        return () => {
            if (blobUrl) {
                URL.revokeObjectURL(blobUrl);
            }
        };
    }, [imageUrl, data]);

    return (

        <Stack width={"100%"} alignItems={"center"}>
            <Wrapper ref={contentRef}>
                <Logo>
                    <img src="/images/pdfimages/logo.png" alt="" />
                </Logo>
                <img
                    src={blobUrl}
                    alt="Example"
                    style={{ display: imageLoaded ? 'inline' : 'none' }}
                    onLoad={handleImageLoad}
                />
                <Content>
                    <h1>{content?.title}</h1>
                    <p>{content?.dis}</p>
                </Content>
            </Wrapper>
            <Stack flexDirection={"row"} justifyContent={"flex-start"} gap={6}>
                <Button size='small' onClick={downloadPNG} startIcon={<Download />}>Download</Button>
                <ShareButton url={`https://enivesh.co.in/blogs/${data?.id}?${data?.title}`} title={"Enivesh Finance & Insurance Pvt. Ltd. "} />
            </Stack>
        </Stack>
    );
};

export default PostImageGen;

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  width: 300px;
  height: 350px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    z-index: -1;
   
  }
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(1, 10, 17, 0.346);
    z-index: 0;
  }

`;

const Content = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 150px;
border-radius: 20px 20px 0 0;
padding: 10px;
z-index: 2;
background-color: #ff843d9f;

    h1{
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-shadow: -2px 0px 0px #532204;
    
    /* position: absolute; */
    bottom: 10px;
    color: #fff;
    right: 0;

  }
  p{
    font-size: 12px;
    text-align: center;
    margin: 10px 0;
    color: #140101;
    font-weight: 500;
  }

`;

const Logo = styled.div`
position: absolute;
right: 10px;
top: 10px;
border-radius: 5px;
overflow: hidden;
width: 100px;
z-index: 2;

img{
    width: 100%;
}
  
`;
