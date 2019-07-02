/**
 * 
 */
// Funcions del Projecte Personal final del curs d'Introducció a la programació
// Mobile al CIFO La Violeta de Barcelona - juliol de 2019
// Autora: Maria Arquer

// 1 Aquesta funció detecta qui és l'autor o autora del vector entrant.

function testID(inputVector) {
	var llistaAlumnes = [ "Marc Formador", "Maria Arquer", "Ma Jose Balmana",
			"Gerard Barbero", "Lionel Cioffi", "Carlos Fabian",
			"Juan Gonzalez", "Jose A Juarez", "Montse Monclus",
			"Javier Narciandi", "Nuria Perez", "Guillermo Rincon",
			"Javi Sastre", "Roger Sobrino" ];

	for (i = 0; i < 10; i++) {
	}

	return "El vector proporcionat conté l'identificador '"
			+ inputVector[i - 1] + "'  que correspon a l'autor "
			+ llistaAlumnes[[ inputVector[i - 1] ]] + ".";
}


// 2 Aquesta funció transforma el vector proporcionat en una matriu de 3x3.

function vectorToMatrix(inputVector,inputN) {
	var vector = inputVector;
	var inputN = n;
	var matriu1 = new Array(n);
		
	for (j = 0; j < n; j++) {
		matriu1[j] = new Array();
		for (i = 0; i < n; i++) {
			matriu1[j][i] = inputVector[i + j*n];
		}
	}

	console.log(matriu1);
	return "<br>[[" + matriu1[0] + "],[" + matriu1[1] + "],[" + matriu1[2] + "]]";
}

// Aquesta funció multiplica la matriu proporcionada per la matriu de
// codificació.

function enCode(matriu1,matriu2,n) {
	var matriu3 = new Array(3);

	for (var j = 0; j < 3; j++) {
		matriu3[j] = [];
		for (var l = 0; l < 3; l++) {
			matriu3[j][l] = 0;
		}
	}

	for (rowMa1 = 0; rowMa1 < n; rowMa1++) {
		for (colMa2 = 0; colMa2 < n; colMa2++) {
			for (i = 0; i < n; i++) {

				matriu3[rowMa1][colMa2] += (matriu1[rowMa1][i] * matriu2[i][colMa2]);
				console.log(matriu3);
			}

		}

	}
	return matriu3[0] + "],[" + matriu3[1] + "],[" + matriu3[2] + "]]"
}

// Aquesta funció multiplica la matriu codificada (matriu3) per la matriu de
// descodificació (matriu 4).

function deCode(matriu3,matriu4,n) {
	var matriu5 = new Array(3);

	for (var j = 0; j < n; j++) {
		matriu5[j] = [];
		for (var l = 0; l < n; l++) {
			matriu5[j][l] = 0;
		}
	}

	for (rowMa1 = 0; rowMa1 < n; rowMa1++) {
		for (colMa2 = 0; colMa2 < n; colMa2++) {
			for (i = 0; i < n; i++) {

				matriu5[rowMa1][colMa2] += (matriu3[rowMa1][i] * matriu4[i][colMa2]);
				console.log(matriu5);
			}

		}

	}
	return "<br>[[" + matriu5[0] + "],[" + matriu5[1] + "],[" + matriu5[2] + "]]"
}

// Aquesta funció transforma la matriu descodificada en un vector.

function matrixToVector12(matriu5) {
	var vector = [];
	vector = [matriu5[0],matriu5[1],matriu5[2]]

	return "<br> [" + vector + "]";
}

// Aquesta funció arrodoneix els decimals i converteix els valors de la matriu en els caràcters ASCII corresponents.

function missatgeSecret(matriu5){
	for (i = 0; i < matriu5.length; i++) 
		for (j = 0; j < matriu5.length; j++)
			matriu5[i][j] = String.fromCharCode(Math.round(matriu5[i][j]));
		
return matriu5[i][j];
}
