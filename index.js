todos = []


const to_do_list = document.getElementById("to_do_list");

function render(){
    to_do_list.innerHTML = "";
    todos.forEach(item =>{
        to_do_list.appendChild(getTodo(item))
    });

}

function objectCreator(){
    var value=document.querySelector(".inputbox #value").value;
    todos[todos.length]={
        name:value,
        id:todos.length,
        done:false
    }
    render();
    document.querySelector(".inputbox #value").value=" ";
}

function getTodo(item){
    const container = document.createElement("div");
    container.classList.add("todo");
    const input = document.createElement("input");
    input.id=item.id;
    input.checked = item.done;
    input.type = "checkbox";
    input.addEventListener("click", (e) => {
        item.done=!item.done;
        render();
    })
    container.appendChild(input);
    const label = document.createElement("label");
    label.htmlFor = item.id;
    label.innerText = item.name;
    if(item.done){
        label.classList.add("cut");
    }
    container.appendChild(label);
    return container;
}
render();
