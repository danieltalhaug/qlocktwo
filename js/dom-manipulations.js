export const renderClockLetters = (letters) => {
    const clock = document.getElementById("clock");

    letters.forEach(letter => {
        const letterElement = document.createElement('div');
        const letterContent = document.createTextNode(letter.letter);

        // Adds the classes from the class array
        for(let i = 0; i < letter.class.length; i++) {
            letterElement.classList.add(letter.class[i]);
        }

        letterElement.appendChild(letterContent);
        clock.appendChild(letterElement);
    });
};