const refs = {
    pageTimer: document.querySelector('h3'),
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]')
}

class Timer {
    constructor({ onTick } = {}) {
        this.intervalId = null;
        this.isActive = false;
        this.updateTimerOnPage = onTick;
        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.updateTimerOnPage(time);
    }

    start() {
        if (this.isActive === true) {
            return;
        }

        const startTime = Date.now();// startTime инициализируется при вызове и будет одинаковым

        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            // const { hours, mins, seconds } = getTimeComponents(deltaTime);
            //console.log(`${hours}:${mins}:${seconds}`);
            const time = this.getTimeComponents(deltaTime);
            this.updateTimerOnPage(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        // const time = this.getTimeComponents(0);
        // this.updateTimerOnPage(time);
    }

    // Функция ниже для добавления 0 если число часов, минут, секунд меньше 10
    pad(value) {
        return String(value).padStart(2, "0"); // Возьми строку и добавь 0 впереди, но только до 2ух символов
    }

// Функция ниже для вытягивания из Юникс время количества часов, минут, секунд
    getTimeComponents(timeInMs) {
        const hours = this.pad(Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.pad(Math.floor((timeInMs % (1000 * 60)) / 1000));

        return { hours, mins, seconds };
    }

}

//Функция ниже обновление счетчика на странице
function updateClockFace({ hours, mins, seconds }) {
    refs.pageTimer.textContent = `${hours}:${mins}:${seconds}`;    
}


const timer = new Timer({ onTick: updateClockFace });

refs.startButton.addEventListener('click', timer.start.bind(timer));

refs.stopButton.addEventListener('click', timer.stop.bind(timer));
//{
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive === true) {
//             return;
//         }

//         const startTime = Date.now();// startTime инициализируется при вызове и будет одинаковым

//         this.isActive = true;
//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             // const { hours, mins, seconds } = getTimeComponents(deltaTime);
//             //console.log(`${hours}:${mins}:${seconds}`);
//             const time = getTimeComponents(deltaTime);
//             updateClockFace(time);
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// }


