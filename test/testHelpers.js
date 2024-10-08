// Creates the editor's holder
export function startDocument() {
  document.body.innerHTML = '';
  const editorRedactor = document.createElement('div');
  editorRedactor.classList.add('codex-editor__redactor');

  const codexEditor = document.createElement('div');
  codexEditor.classList.add('codex-editor');
  codexEditor.appendChild(editorRedactor);

  const editorJS = document.createElement('div');
  editorJS.setAttribute('id', 'editorjs');
  editorJS.appendChild(codexEditor);

  document.body.appendChild(editorJS);
}

// Creates a default block in the editor with the block data
export function createDefaultBlock(block) {
  const newBlock = document.createElement('div');
  newBlock.classList.add('ce-block');
  newBlock.setAttribute('data-id', block.id);

  const content = document.createElement('div');
  content.classList.add('ce-block__content');

  const paragraph = document.createElement('div');
  paragraph.classList.add('ce-paragraph', 'cdx-block');
  paragraph.contentEditable = true;
  paragraph.textContent = block.data.text;

  content.appendChild(paragraph);
  newBlock.appendChild(content);

  return newBlock;
}

// Sets focus to the target in the specified position
export function setFocus(target, pos) {
  const selection = window.getSelection();
  const range = document.createRange();

  const content = target.firstChild;
  let position = pos || content.length;
  position = position >= content.length ? content.length - 1 : position;

  range.setStart(content, position);
  range.collapse(true);

  selection.removeAllRanges();
  selection.addRange(range);

  target.focus();
}
