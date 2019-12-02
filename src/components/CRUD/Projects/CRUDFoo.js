import { id } from "postcss-selector-parser";

export function postRegister(name,desc,type,due_date,req_collab){
    fetch('http://35.223.215.2:5000/project/register',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: desc,
            type: type,
            due_date: due_date,
            num_req_collaborator: req_collab,
            user_id: localStorage.getItem('user_id')
        })
    }).then(res => res.json())
    .then(json => console.log(json));
    //setTimeout(() => window.location.reload(), 1000);
}

export function putEdit(name,desc,type,due_date,req_collab,project_id){
    fetch('http://35.223.215.2:5000/project/'+project_id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: desc,
            type: type,
            due_date: due_date,
            num_req_collaborator: req_collab
        })
    }).then(res => res.json())
    .then(json => console.log(json));
}

export function deleteRemove(project_id){
    fetch('http://35.223.215.2:5000/project/'+project_id,{
        method: 'DELETE',
        headers: {
            'COntent-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(json => console.log(json));
}