
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemInput');
const listItems = document.getElementsByTagName('li');
const listUl = listDiv.querySelector('ul');
const firstLi = listUl.firstElementChild;
const lastLi = listUl.lastElementChild;


firstLi.style.background = 'coral';
lastLi.style.background = 'steelblue';

var setButtons = function(){
    if(listUl.children.length > 0){
      for(let i = 0 ; i < listUl.children.length; i++ ){
         attachListItemButtons(listUl.children[i]);
      }
    }
} ();


function attachListItemButtons(li){
  const up = document.createElement('button');
  up.className= 'upButton';
  up.textContent = 'Up';
  li.appendChild(up);
  const down = document.createElement('button');
  down.className= 'downButton';
  down.textContent = 'Down';
  li.appendChild(down);
  const remove = document.createElement('button');
  remove.className= 'removeButton';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

  listUl.addEventListener('click', (event) => {

    if(event.target.tagName == 'BUTTON' ){
      if(event.target.className == 'removeButton'){
        const li = event.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
      }
      if(event.target.className == 'upButton'){
        const li = event.target.parentNode;
        const prevLi= li.previousElementSibling;
        const ul = li.parentNode;
        if(prevLi){
            ul.insertBefore(li,prevLi);
        }
      }
      if(event.target.className == 'downButton'){
        const li = event.target.parentNode;
        const nextLi= li.nextElementSibling;
        const ul = li.parentNode;
        if(nextLi){
            ul.insertBefore(nextLi,li);
        }
      }

    }

  });
  /*listDiv.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI'){
      event.target.textContent = event.target.textContent.toLowerCase();
    }
  });*/

  /*document.addEventListener('click', (event) => {
    console.log(event.target);
  });*/


toggleList.addEventListener('click', () => {
  if(listDiv.style.display == 'none'){
    //console.log('Yes')
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide List';
  } else {
    //console.log('No');
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});


descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + ':';
  descriptionInput.value= '';
});


addItemButton.addEventListener('click', () =>{
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value= '';
  attachListItemButtons(li);
});

/*removeItemButton.addEventListener('click', () =>{
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.querySelector('li:last-child');
  ul.removeChild(li);

});*/


//const list = document.querySelector('ul');
//list.innerHTML = '<li>Element One</li> <li>Element Two</li> <li>Element Three</li>';
//console.log(list.innerHTML);
//console.log(input.type);
//input.className= 'description';
