const listItems = document.querySelectorAll('li');
const lists = document.querySelectorAll('ul');
const addBtn = document.querySelectorAll('.add-btn');

document.addEventListener('click', () => {
  if (event.target.className == 'add-btn') {
    let newLi = document.createElement('li');
    newLi.className = 'to-do-list-item';
    newLi.draggable = 'true';
    newLi.innerHTML =
      '<span class="icons-container"><ion-icon name="create" class="edit-icon"></ion-icon><ion-icon name="trash" class="delete-icon"></ion-icon></span>';
    let ul = event.target.parentElement.previousElementSibling.children[0];
    ul.append(newLi);
  }
});
const setListItemsIds = () => {
  for (let listItem of listItems) {
    listItem.setAttribute('id', Math.random());
    // listItem.addEventListener('click',()=>{
    //   if(event.target.className==){}
    // })
  }
};
const connectDrag = () => {
  document.addEventListener('dragstart', event => {
    let id = event.srcElement.id;
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'move';
  });
};
setListItemsIds();
connectDrag();
