var rootNode = document.getElementById("root");

function Tree(tree){
    var ol = document.createElement('ol');
    for(var i = 0; i < tree.length; i++){
        var li = document.createElement('li');
        if(tree[i].folder){
            li.innerHTML = `<div><i class="material-icons orange">folder</i><span> ${tree[i].title}</span></div>`;    
            li.firstChild.classList.add('folder');
            li.addEventListener('click', chMod, true);
            if(tree[i].children){
                var child = Tree(tree[i].children);  
                li.appendChild(child);
                li.addEventListener('click', chMod, true);	
            } else{
                li.innerHTML += "<ol><i>Folder is empty</i></ol>";
            }
        } else {
            li.innerHTML = `<div><i class="material-icons grey">insert_drive_file</i><span> ${tree[i].title}</span></div>`;  
        }
        ol.appendChild(li);
    }
    return ol;

}

function chMod(event){
	var element = event.target;
	if((element.tagName === 'DIV') && element.classList.contains('folder')){
            if(element.firstChild.innerHTML==='folder'){  
                element.firstChild.innerHTML='folder_open';
            } else{
                element.firstChild.innerHTML='folder';
            }
            element.parentNode.classList.toggle('folderOpened');
            return;
        }
        element = element.parentNode;
}

rootNode.appendChild(Tree(structure));