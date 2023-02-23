const tech = [
    {label: 'HTML'},
    {label: 'CSS'},
    {label: 'JavaScript'},
    {label: 'Node.js'},
    {label: 'React'},
    {label: 'Vue'},
    {label: 'Next.js'},
    {label: 'Mobx'},
    {label: 'Redux'},
    {label: 'React Router'},
    {label: 'GraphQL'},
    {label: 'PostgreSQL'},
    {label: 'MongoDB'}
];

const inputRef = document.querySelector('#filter');
const listRef = document.querySelector('.js-list');

const listMurkUp = createListMurkUp(tech);

insertMurkUp(listMurkUp);

inputRef.addEventListener('input', _.debounce(onFilterChange, 300));



//Функция заготовка для создания разметки
function createListMurkUp(items) {
    return items.map(techItem => `<li>${techItem.label}</li>`).join(" ");
}

//Создаем отфильтрованную копию массива объектов tech и рендер новой разметки
function onFilterChange(event) {
    const filter = event.target.value.toLowerCase();

    const filteredItems = tech.filter(technology => technology.label.toLowerCase().includes(filter));

    const listMurkUpFiltered = createListMurkUp(filteredItems);
    
    insertMurkUp(listMurkUpFiltered);
}

//Функция заготовка рендера разметки
function insertMurkUp(murkup) {
    listRef.innerHTML = murkup;
}

