import { clockLetters } from './letters.js';
import { getTime } from './time.js';
import { renderClockLetters } from './dom-manipulations.js'

const init = () => {
    const letters = clockLetters();
    const { hours, minutes } = getTime();

    letters.forEach(letter => {
        // Show obligatory letters
        if (letter.type === 'obligatory') {
            letter.class.push('active');
            
            return;
        }

        // For hours
        if (letter.type === 'hour') {
            if (minutes > 34) {
                // Check if it's past half an hour, 34 because 30 would for example
                // show Half past seven when it's halv past six
                if (letter.rel.includes(hours + 1)) {
                    letter.class.push('active');
                }
            } else {
                if (letter.rel.includes(hours)) {
                    letter.class.push('active');
                }
            }

            return;
        }

        // For minutes
        if (letter.type === 'minute') {
            if (letter.rel.includes(minutes)) {
                letter.class.push('active');
            }
        }
    });

    renderClockLetters(letters);
};

init();