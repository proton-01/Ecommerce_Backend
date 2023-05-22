const users = [
    {
        username:"rajesh",
        age:"22",
        stack:"MERN",
    },
    {
        username:"rajesh1",
        age:"22",
        stack:"MERN",
    },
    {
        username:"rajesh2",
        age:"22",
        stack:"MERN",
    }
];

users.map( (user ,index)=>{
     <div key ={index}>
        <p>{user.username}</p>
        <p>{user.age}</p>
        <p>{user.stack}</p>
     </div>

})