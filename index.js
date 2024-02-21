let nome = "Dalila";
let nivel = ""
let xp = "9000"

if (xp < "1000"){
    nivel = "Ferro"
    console.log("Se Xp for menor do que 1000 =", nivel)
} else if (xp >= "1000" && xp < "2000") {
    nivel = "Bronze"
    console.log("Se Xp for entre 1000 e 2000 =", nivel)
} else if (xp >= "2000" && xp < "4000") {
    nivel = "Prata"
    console.log("Se Xp for entre 2000 e 4000 =", nivel)
} else if (xp >= "4000" && xp < "6000"){
    nivel = "Ouro"
    console.log("Se Xp for entre 4000 e 6000 =", nivel)
} else if (xp >= "6000" && xp < "8000"){
    nivel = "Platina"
    console.log("Se Xp for entre 6000 e 8000 =", nivel)
} else{
    nivel = "Diamante"
    console.log("Se Xp for mais de 8000 =", nivel)
}

console.log("A heróina",nome,  "está no nível", nivel)

