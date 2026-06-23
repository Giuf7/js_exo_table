const plateauDame = document.getElementById('plateau_dame');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
    }

    plateauDame.appendChild(row);
}

let pion_x_cell = 0;
let pion_y_cell = 0;

const startCase = plateauDame.rows[pion_x_cell].cells[pion_y_cell];

const pion = document.createElement('div');
pion.classList.add('pion');

startCase.appendChild(pion);


function deplacer(direction) {
    switch (direction) {
        case 'ArrowUp':
            if (pion_x_cell > 0) pion_x_cell--;
            break;
        case 'ArrowDown':
            if (pion_x_cell < 9) pion_x_cell++;
            break;
        case 'ArrowLeft':
            if (pion_y_cell > 0) pion_y_cell--;
            break;
        case 'ArrowRight':
            if (pion_y_cell < 9) pion_y_cell++;
            break;
        default:
            return;
    }

    const nouvelleCase = plateauDame.rows[pion_x_cell].cells[pion_y_cell];
    nouvelleCase.appendChild(pion);
}


document.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
        deplacer(event.key);
    }
});


const boutons = document.querySelectorAll('#commandes button');

boutons.forEach((bouton) => {
    bouton.addEventListener('click', () => {
        deplacer(bouton.dataset.direction);
    });
});