const listItems = document.querySelectorAll('li');

const setListItemsIds = () => {
  for (let listItem of listItems) {
    let id = Math.random();
    listItem.setAttribute('id', id);
  }
};
setListItemsIds();
