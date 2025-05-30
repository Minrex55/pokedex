fetch(
    "https://pokeapi.co/api/v2/pokemon/1"
)
.then((res)=>res.json())
.then((res)=>{
    document.getElementById("sprite").setAttribute("src", res.sprites.front_default);
    document.getElementById("spriteb").setAttribute("src", res.sprites.back_default);
    document.getElementById("name").textContent = res.name;
    document.getElementById("ability1").textContent = res.abilities[0].ability.name
    document.getElementById("ability2").textContent = res.abilities[1].ability.name
})
.catch((e)=>{console.log(e)})