import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const colors = {
    blue: "#6a5acd",
    grey: "#a9a9a9"

};

const MyWeek = ({ data }) => {
    let navigate = useNavigate();
    const stars = Array(5).fill(0)

   
    return (
        <ListStyle>
            {data.map((list, index) => {
                let num = (Math.floor(Math.random() * stars.length+1));
                return (
                    <ItemStyle className="list_item" key={index} style={styles.stars}>
                        <div style={styles.day}>{list.title}</div>

                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={30}
                                    color={num < index+1 ? colors.grey : colors.blue} 
                                    style={{
                                        marginRight: "15px"
                                    }}
                                />     
                            )
                        })}

                        <div onClick={() => { navigate(`/myday/${list.title}`); }} style={styles.selectday}></div>
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
    },

    selectday: {
        float: "right",
        width: "0px",
        height: "0px",
        borderLeft: "30px solid #6a5acd",
        borderTop: "15px solid transparent",
        borderBottom: "15px solid transparent",
        marginLeft: "15px"
    },

    day: {
        marginRight: "30px"
    }

}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    `;

const ItemStyle = styled.div`
    padding: 10px;
    margin: 8px;
    background-color: aliceblue;
    line-height: 30px
    `;

export default MyWeek;