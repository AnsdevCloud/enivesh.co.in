import styled from "styled-components";

const SuaireCard = ({ title, number, disc, iconsrc }) => {
    return (
        <Container>

            {/* <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: '#f1e5e53e', width: '389%', height: 500, transform: 'rotate(180deg)' }}
            >
                <path d="M1200 120L0 16.48V0h1200v120z" />
            </svg> */}
            <div className="image">
                <img src={iconsrc} alt="icon" />
            </div>
            <div className="text">
                <h4 className="label">{title}</h4>
                <h1 className="count">{number}</h1>
                <div className="discription">{disc}</div>

            </div>

        </Container>
    )
}

export default SuaireCard
const Container = styled.div`
     
            cursor: pointer;
            position: relative;
            width: 200px;
            height: 100px;
            padding: 5px;
            display: flex;
            justify-content: flex-start;
            border-radius: 10px;
            background-color: #452c24ae;
            overflow: hidden;
            gap: 10px;
            border: 1px solid transparent;
transition: all .4s ease-in-out;
            &:hover{
                border: 1px solid #ff5c00;
            }
            svg{
                position: absolute;
                top: 0;
                left: 0;
            }
            .image{
                
                width: 80px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                .label{
                    color: #f0f0f0;
                    margin: 5px 0;
                    text-align: center;
                    font-size: .8rem;

                }
                .count{
                    color: #ff5c00;
                    font-weight: 600;
                    text-align: center;
                }
                .discription{
                    font-size: 12px;
                    color: #eea060;
                    text-align: center;
                }
            }
        
`;