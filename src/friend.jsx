export default function Friend ({friend}){
    console.log(friend)
    
   const {id , title} = friend;
    return (
        <div>
            <h1>ID: {id}</h1>
            <p>TITLE: {title}</p>
        </div>
    )
}