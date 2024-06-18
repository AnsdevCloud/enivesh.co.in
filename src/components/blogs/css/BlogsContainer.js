import styled from "styled-components";

const BlogsContainer = styled.div`
width: 100%;
height: 100%;
.ejs-header {
    margin: 10px 5px;
    font-weight: 500;
}

.ejs-paragraph {
    margin: 10px 5px;
}
  ol{
    margin: 10px 30px;
    
    li{
        padding: 2px 10px;
        margin: 2px 0;
    }
  }
    ul{
    margin: 10px 30px;
    li{
        padding: 2px 10px;
        margin: 2px 0;
    }
  }
  mark{
    padding: 0 5px;
    background-color: orange;
    font-weight: 400;
  }
  .ejs-image{
    width: 100%;
    max-height:500px;
    border-radius: 5px;
    
  }
  b{
    font-weight: 600;
  }
  a{
    font-style: normal;
    color: #ff5c00;
    position: relative;
    &::after{
        content: 'Link';
        width: 10px;
        height: 10px;
        font-size: 10px;
        color: #000;
        position: absolute;
        left: -20px;
        top: 2px;
        opacity: 0;
    }
    &:hover{
        color: #00f;
    }
     &:hover::after{
        opacity: 1;
     }
  }
`;

export { BlogsContainer };