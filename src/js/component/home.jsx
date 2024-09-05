import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Pokemons, { Personajes } from "./Personajes";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Personajes/>
		</div>
	);
};

export default Home;
