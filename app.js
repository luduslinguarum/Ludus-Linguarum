const chapitres = [
    {
        titre: "Chapitre 1 : Salutations",
        description: "Apprenez à dire bonjour et à remercier en anglais.",
        questions: [
            {
                question: "Comment dit-on 'Bonjour' en anglais ?",
                options: ['Hello', 'Goodbye', 'Sorry'],
                answer: 'Hello'
            },
            {
                question: "Comment dit-on 'Merci' en anglais ?",
                options: ['Please', 'Thanks', 'Excuse me'],
                answer: 'Thanks'
            }
        ]
    },
    {
        titre: "Chapitre 2 : La famille",
        description: "Apprenez les mots pour décrire les membres de la famille.",
        questions: [
            {
                question: "Comment dit-on 'Mère' en anglais ?",
                options: ['Mother', 'Father', 'Brother'],
                answer: 'Mother'
            },
            {
                question: "Comment dit-on 'Frère' en anglais ?",
                options: ['Sister', 'Brother', 'Aunt'],
                answer: 'Brother'
            }
        ]
    }
];

let chapitreIndex = 0;

function afficherChapitre(chapitre) {
    const container = document.getElementById("chapitre-container");
    container.innerHTML = `
        <h2>${chapitre.titre}</h2>
        <p>${chapitre.description}</p>
        <button onclick="demarrerChapitre(${chapitreIndex})">Démarrer le chapitre</button>
    `;
}

function demarrerChapitre(index) {
    const chapitre = chapitres[index];
    let questionIndex = 0;
    
    function afficherQuestion() {
        const currentQuestion = chapitre.questions[questionIndex];
        const container = document.getElementById("chapitre-container");
        container.innerHTML = `
            <h3>${currentQuestion.question}</h3>
            ${currentQuestion.options.map((option, idx) => 
                `<button onclick="verifierReponse(${index}, ${questionIndex}, '${option}')">${option}</button>`
            ).join('')}
        `;
    }

    afficherQuestion();
}

function verifierReponse(chapitreIndex, questionIndex, selectedOption) {
    const chapitre = chapitres[chapitreIndex];
    const currentQuestion = chapitre.questions[questionIndex];

    if (selectedOption === currentQuestion.answer) {
        questionIndex++;
        if (questionIndex < chapitre.questions.length) {
            demarrerChapitre(chapitreIndex);
        } else {
            chapitreIndex++;
            if (chapitreIndex < chapitres.length) {
                afficherChapitre(chapitres[chapitreIndex]);
            } else {
                document.getElementById("chapitre-container").innerHTML = "<h2>Bravo ! Vous avez terminé tous les chapitres.</h2>";
            }
        }
    } else {
        alert("Réponse incorrecte, réessayez !");
    }
}

afficherChapitre(chapitreIndex);