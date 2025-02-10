let answers = [];

function answer(questionNumber, choice) {
    answers[questionNumber - 1] = choice;
    
    // Hide current question
    document.querySelector(`#q${questionNumber}`).classList.remove('active');
    
    if (questionNumber < 5) {
        // Show next question
        document.querySelector(`#q${questionNumber + 1}`).classList.add('active');
    } else {
        // Show result
        showResult();
    }
}

function showResult() {
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');
    const princessName = document.getElementById('princess-name');
    const princessDescription = document.getElementById('princess-description');

    quiz.style.display = 'none';
    result.style.display = 'block';

    // Calculate result based on answers
    const princess = calculatePrincess();
    princessName.textContent = princess.name;
    princessDescription.textContent = princess.description;
}

function calculatePrincess() {
    // Count frequency of each answer type
    const counts = {
        A: answers.filter(x => x === 'A').length,
        B: answers.filter(x => x === 'B').length,
        C: answers.filter(x => x === 'C').length,
        D: answers.filter(x => x === 'D').length
    };

    // Define princess personalities and their descriptions
    const princesses = {
        belle: {
            name: "Belle",
            description: "You're intelligent, independent, and see the beauty in everyone. Like Belle, you love books and learning new things!"
        },
        ariel: {
            name: "Ariel",
            description: "Curious and adventurous, you're always ready to explore new worlds and try new things!"
        },
        snowWhite: {
            name: "Snow White",
            description: "Kind-hearted and optimistic, you have a special connection with nature and animals."
        },
        aurora: {
            name: "Aurora",
            description: "Graceful and romantic, you have a dreamy personality and believe in true love."
        },
        elsa: {
            name: "Elsa",
            description: "Powerful and responsible, you're learning to embrace your true self and your unique abilities."
        },
        anna: {
            name: "Anna",
            description: "Energetic and optimistic, you're always ready to help others and fight for what you believe in."
        },
        vanellope: {
            name: "Vanellope",
            description: "Spunky and determined, you're not afraid to be different and follow your dreams."
        },
        rapunzel: {
            name: "Rapunzel",
            description: "Creative and spirited, you find joy in the little things and aren't afraid to try something new."
        },
        raya: {
            name: "Raya",
            description: "Strong and determined, you're a natural leader who fights for what's right."
        },
        pocahontas: {
            name: "Pocahontas",
            description: "Wise and brave, you follow your heart and stand up for what you believe in."
        }
    };

    // Determine princess based on answer pattern
    if (counts.A > counts.B && counts.A > counts.C && counts.A > counts.D) {
        return princesses.belle;
    } else if (counts.B > counts.A && counts.B > counts.C && counts.B > counts.D) {
        return princesses.ariel;
    } else if (counts.C > counts.A && counts.C > counts.B && counts.C > counts.D) {
        return princesses.rapunzel;
    } else if (counts.D > counts.A && counts.D > counts.B && counts.D > counts.C) {
        return princesses.snowWhite;
    } else if (counts.A === counts.B && counts.A > counts.C) {
        return princesses.raya;
    } else if (counts.B === counts.C && counts.B > counts.A) {
        return princesses.vanellope;
    } else if (counts.C === counts.D && counts.C > counts.A) {
        return princesses.anna;
    } else if (counts.A === counts.D && counts.A > counts.B) {
        return princesses.elsa;
    } else if (counts.B === counts.D && counts.B > counts.C) {
        return princesses.pocahontas;
    } else {
        return princesses.aurora;
    }
}