import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom"
function Vaggie() {
    const [vaggie, setVaggie] = useState([]);
    useEffect(() => {
        getRecipes();

    }, [])

    const getRecipes = async () => {
        const check=localStorage.getItem('vaggie');

        if(check){
            setVaggie(JSON.parse(check));
        }
        else{
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
        
        
        const data = await response.json();
        setVaggie(data.recipes);
        localStorage.setItem('vaggie',JSON.stringify(data.recipes));
        }
        
    }


    return (
        <div>


            <Wrapper>
                <h3>Our Vegetarian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        gap: 10
                    }}>
                    {
                        vaggie.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipe/'+recipe.id}>
                                        <p>{recipe.title}</p>

                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                        </Link>

                                    </Card>
                                </SplideSlide>
                            );
                        })
                    }
                </Splide>
            </Wrapper>

        </div>
    );
}
const Wrapper = styled.div`
margin:4rem 0rem;
`;

const Card = styled.div`
min-height:2rem;
border-radius:2rem;
overflow:hidden;
positon:relative;

img{
    border-radius:2rem; 
    postion:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    z-index:-1;

}
p{
    position:absolute;
    z-index:10;
    left:0%;
    bottom:0%;
    tranform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-item:center;
}
`;
const Gradient = styled.div`
z-index:99;
postion:absolute;
width:100%;
height:100%;
background:rgba(0,0,0,1);
`;
export default Vaggie;