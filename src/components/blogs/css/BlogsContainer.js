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
    transition: all .3s ease-in-out;
    font-weight: 500;
    &:hover{
      background-color: #00f;
      color: #fff;
    }
  }
  .ejs-image{
    width: 100%;
    max-height:500px;
    border-radius: 5px;
    
  }
  b{
    font-weight: 600 !important;
  
  }
  a{
    font-style: normal;
    color: #ff5c00;
    position: relative;
    transition: all .3s ease-in-out;

    &::after{
        content: 'Link';
    transition: all .2s ease-in-out;

        width: fit-content;
        height: fit-content;
        padding: 2px 5px;
        background-color: #00f;
        font-size: 10px;
        color: #000;
        position: absolute;
        left: -30px;
        font-weight: 600;
        border-radius: 5px;
        color: #fff;
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

const BlogHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => props.$bgColor ? props.$bgColor : "transperent "};
  margin: 10px 0;
  padding: 10px;
  
`;
export { BlogsContainer, BlogHeader };