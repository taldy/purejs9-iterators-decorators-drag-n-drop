let blockId = 0;

function onDragStart(event) {
  console.log('onDragStart', event.target.dataset.blockId);
  event.dataTransfer.setData("blockId", event.target.dataset.blockId);
}

function onDragOver(event) {
  console.log('onDragover');
  event.preventDefault()
}

function onDrop(event) {
  event.preventDefault()
  console.log('onDrop');
  const blockId = event.dataTransfer.getData("blockId");
  console.log('dropped blockId', blockId);


  const blockEl = document.querySelector(`[data-block-id="${blockId}"]`);
  blockEl.setAttribute('draggable', false);

  const insertAfter = getBlockToInsertAfter(event.clientY);

  if (insertAfter) {
    insertAfter.after(blockEl)
  } else {
    document.querySelector('.target').append(blockEl);
  }
}

function getBlockToInsertAfter(y) {
  return [...document.querySelectorAll('.target .block')]
    .filter((element) => element.getBoundingClientRect().top < y)
    .pop();
}

function createBlock(blockId) {
  const blockEl = document.createElement('div');
  blockEl.classList.add('block');
  blockEl.setAttribute('draggable', true);
  blockEl.setAttribute('data-block-id', blockId);
  blockEl.textContent = `Block ${blockId}`;

  return blockEl;
}

function addBlockToSource() {
  document.querySelector('.source').append(createBlock(blockId));
  blockId++;
}

addBlockToSource();
addBlockToSource();
addBlockToSource();

document.querySelector('.add-to-source').addEventListener('click', addBlockToSource);

const source = document.querySelector('.source');
source.addEventListener('dragstart', onDragStart);

const target = document.querySelector('.target');
target.addEventListener('dragover', onDragOver);
target.addEventListener('drop', onDrop);
