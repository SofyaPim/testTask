const selectList = (block, title, labels) =>{
//   const selectBlock = document.querySelector('.__select');
// const selectTitle = selectBlock.querySelector('.__select-title');
// const selectLabels = selectBlock.querySelectorAll('.__select-label');

const selectBlock = document.querySelector(block);
const selectTitle = selectBlock.querySelector(title);
const selectLabels = selectBlock.querySelectorAll(labels);


selectTitle.addEventListener('click', () => {
  if ( selectBlock.getAttribute('data-state') === 'active') {
    selectBlock.setAttribute('data-state', '');
  } else {
    selectBlock.setAttribute('data-state', 'active');
  }
});

// Close when click to option
selectLabels.forEach( item => {
    item.addEventListener('click', (e) => {
        selectTitle.textContent = e.target.textContent;
        selectBlock.setAttribute('data-state', '');
        item.previousElementSibling.getAttribute('value', selectTitle.textContent);
        console.log(item.textContent);
    });
    
});
};
export default selectList;