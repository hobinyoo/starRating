import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const MyDay = ({ data }) => {

    const { title } = useParams()
    let navigate = useNavigate();

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


  

    return (
        <Box>
            <Text>
                {data
                    .filter((list) => list.title === title)
                    .map((list, index) => (
                        <div key={index} className="day">
                            {list.title}요일 평점 남기기
                        </div>
                    ))}
            </Text>
            <ItemStyle>         
                     <div style={styles.stars}>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={30}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        margin: "auto",
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        })}
                    </div>
            </ItemStyle>
            <Button onClick={() => {
                navigate("/");
            }}>평점 남기기</Button>
        </Box>
    );
};

const styles = {
    stars: {
    display: "flex",
    flexDirection: "row",
    }
}

const Button = styled.button`
    color: white;
    display:block;
    margin: auto;
    font-size: middle;
    border-radius: 5px;
    background: slateblue;
    padding: 10px
    `

const Text = styled.h3`
    text-align: center;
    `

const Box = styled.div`
    margin: auto; 
    width: 190px;
    height: 190px;
   
    `;


const ItemStyle = styled.div`
width: 100%;
margin-bottom:7vh;
`;

// const Circle = styled.div`
//     float: left;
//     margin: 7px; 
//     width: 30px;
//     height: 30px;
//     background: #666666;
//     border-radius: 250px;
//     `;


export default MyDay;