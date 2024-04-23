let editorElement = document.querySelector("#editor");

let editor = ace.edit(editorElement, {
    theme: "ace/theme/monokai",
    mode:"ace/mode/python",
});
