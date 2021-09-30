export const renderClockLetters = (letters) => {
    const clock = document.getElementById("clock");

    letters.forEach(letter => {
        const letterContainer = document.createElement('div');
        const letterBackground = document.createElement('span');
        const letterContent = document.createTextNode(letter.letter);

        // Adds the classes from the class array
        for(let i = 0; i < letter.class.length; i++) {
            letterContainer.classList.add(letter.class[i]);
        }

        letterBackground.appendChild(letterContent);
        letterContainer.appendChild(letterBackground);
        clock.appendChild(letterContainer);
    });
};