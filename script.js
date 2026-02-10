// Array de URLs de imágenes para las letras
// Puedes reemplazar estas URLs con tus propias fotos
const photoUrls = [
    './F/1.jpeg',
    './F/2.jpeg',
    './F/3.jpeg',
    './F/4.jpeg',
    './F/5.jpeg',
    './F/6.jpeg',
    './F/7.jpeg',
    './F/8.jpeg',
    './F/9.jpeg',
    './F/10.jpeg',
    './F/11.jpeg',
    './F/12.jpeg',
    './F/13.jpeg',
    './F/14.jpeg',
    './F/15.jpeg',
    './F/16.jpeg',
    './F/17.jpeg',
    './F/18.jpeg',
    './F/19.jpeg',
    './F/20.jpeg',
    './F/21.jpeg',
    './F/22.jpeg',
    './F/23.jpeg',
    './F/24.jpeg',
    './F/25.jpeg',
    './F/26.jpeg',
    './F/27.jpeg',
    './F/28.jpeg',
    './F/29.jpeg',
    './F/30.jpeg',
    './F/31.jpeg',
    './F/32.jpeg',
    './F/33.jpeg',
    './F/34.jpeg',
    './F/35.jpeg',
    './F/36.jpeg',
    './F/37.jpeg',
    './F/38.jpeg',
    './F/39.jpeg',
    './F/40.jpeg',
    './F/41.jpeg',
    './F/42.jpeg',
    './F/43.jpeg',
    './F/44.jpeg',
    './F/45.jpeg',
    './F/46.jpeg',
    './F/47.jpeg',
    './F/48.jpeg',
    './F/49.jpeg',
    './F/50.jpeg',
    './F/51.jpeg',
    './F/52.jpeg',
    './F/53.jpeg',
    './F/54.jpeg',
    './F/55.jpeg',
    './F/56.jpeg',
    './F/57.jpeg',
    './F/58.jpeg',
    './F/59.jpeg',
    './F/60.jpeg',
    './F/61.jpeg',
    './F/62.jpeg',
    './F/63.jpeg',
    './F/64.jpeg',
    './F/65.jpeg',
    './F/66.jpeg',
    './F/67.jpeg',
    './F/68.jpeg',
    './F/69.jpeg',
    './F/70.jpeg',
    './F/71.jpeg',
    './F/72.jpeg',
    './F/73.jpeg',
    './F/74.jpeg',
    './F/75.jpeg',
    './F/76.jpeg',
    './F/77.jpeg',
    './F/78.jpeg',
    './F/79.jpeg',
    './F/80.jpeg',
    './F/81.jpeg',
    './F/82.jpeg',
    './F/83.jpeg',
    './F/84.jpeg',
    './F/85.jpeg',
    './F/86.jpeg'
];

// Patrones de letras en una cuadrícula 5x7 (1 = foto, 0 = vacío)
const letterPatterns = {
    '¿': [
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    'Q': [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1]
    ],
    'U': [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
    ],
    'I': [
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0]
    ],
    'E': [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ],
    'R': [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1]
    ],
    'S': [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0]
    ],
    'M': [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
    ],
    'V': [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0]
    ],
    'A': [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
    ],
    'L': [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ],
    'N': [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
    ],
    'T': [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    '?': [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ]
};

// Función para crear las letras con mosaico de fotos
function createPhotoText() {
    const text = '¿QUIERES SER MI VALENTINE?';
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    // Crear contenedor para el texto
    const textContainer = document.createElement('div');
    textContainer.className = 'photo-text';

    let photoIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();

        if (char === ' ') {
            const space = document.createElement('div');
            space.className = 'space-char';
            textContainer.appendChild(space);
        } else if (letterPatterns[char]) {
            const letterDiv = document.createElement('div');
            letterDiv.className = 'letter-mosaic';

            const pattern = letterPatterns[char];
            const rows = pattern.length;
            const cols = pattern[0].length;

            letterDiv.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
            letterDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

            // Crear las fotos para cada píxel de la letra
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (pattern[row][col] === 1) {
                        const photoTile = document.createElement('div');
                        photoTile.className = 'photo-tile';

                        const photoUrl = photoUrls[photoIndex % photoUrls.length];
                        photoTile.style.backgroundImage = `url('${photoUrl}')`;
                        photoTile.dataset.photo = photoUrl;

                        // Agregar evento de click para ampliar la imagen
                        photoTile.addEventListener('click', function (e) {
                            e.stopPropagation();
                            openModal(this.dataset.photo);
                        });

                        letterDiv.appendChild(photoTile);
                        photoIndex++;
                    } else {
                        // Espacio vacío para formar la letra
                        const emptyTile = document.createElement('div');
                        emptyTile.className = 'photo-tile';
                        emptyTile.style.opacity = '0';
                        emptyTile.style.cursor = 'default';
                        letterDiv.appendChild(emptyTile);
                    }
                }
            }

            textContainer.appendChild(letterDiv);
        }
    }

    container.appendChild(textContainer);
}

// Modal de imagen
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

function openModal(photoUrl) {
    modal.style.display = 'block';
    modalImg.src = photoUrl;
}

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Funcionalidad de los botones
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messageModal = document.querySelector('.message-modal');

let noClickCount = 0;
const shrinkPercentage = 0.6; // 40% de reducción = 60% del tamaño actual

yesBtn.addEventListener('click', function () {
    messageModal.style.display = 'block';

    // Agregar confetti o efectos adicionales si lo deseas
    setTimeout(() => {
        messageModal.style.display = 'none';
        // Opcional: resetear el botón NO
        noBtn.style.transform = 'scale(1)';
        noClickCount = 0;
    }, 5000);
});

noBtn.addEventListener('click', function (e) {
    e.preventDefault();
    noClickCount++;

    // Calcular el nuevo tamaño (reducir 40% cada vez)
    const currentScale = Math.pow(shrinkPercentage, noClickCount);

    // Aplicar la transformación
    noBtn.style.transform = `scale(${currentScale})`;

    // Si el botón es demasiado pequeño, hacer que sea imposible de clickear
    if (currentScale < 0.1) {
        noBtn.style.pointerEvents = 'none';
        noBtn.style.opacity = '0.3';

        // Hacer que el botón SÍ pulse para llamar la atención
        yesBtn.style.animation = 'pulse 1s infinite';
    }
});

// Animación de pulso para el botón SÍ
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
    }
`;
document.head.appendChild(style);

// Inicializar la página
createPhotoText();

// Prevenir zoom en dispositivos móviles al hacer doble tap
document.addEventListener('dblclick', function (e) {
    e.preventDefault();
}, { passive: false });

// Agregar efecto de partículas de corazones al mover el mouse (opcional)
document.addEventListener('mousemove', function (e) {
    if (Math.random() > 0.95) {
        createHeart(e.pageX, e.pageY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out forwards';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Agregar animación de flotar hacia arriba
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(floatStyle);
