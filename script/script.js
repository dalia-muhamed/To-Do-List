const listItems = document.querySelectorAll('li');
const lists = document.querySelectorAll('ul');

const setListItemsIds = () => {
  for (let listItem of listItems) {
    listItem.setAttribute('id', Math.random());
  }
};
const connectDrag = () => {
  document.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', event.srcElement.id);
    event.dataTransfer.effectAllowed = 'move';
  });
};
setListItemsIds();
connectDrag();
