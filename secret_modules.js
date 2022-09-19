function onCopyFunc(){try{if(getSelection()!==""){navigator.clipboard.writeText(getSelection()+"\n\nИсточник: "+document.URL);}}catch(e){}}
document.oncopy=onCopyFunc;
