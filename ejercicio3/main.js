//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsList);
console.log(pointsListCopy);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toy);
console.log(toyCopy);

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const secondpointsList = [32, 54, 21, 64, 75, 43];
const secondpointsLis2 = [54,87,99,65,32];
const combinedPointsList = [...secondpointsList,...secondpointsLis2];
console.log(combinedPointsList);

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const secondtoy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const combinedToys = {...secondtoy,...toyUpdate};
console.log(combinedToys);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const [firstColor,secondColor,,...restcolors] = colors;
const colorsCopy = [firstColor,secondColor,...restcolors];
console.log(colorsCopy)