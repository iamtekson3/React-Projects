const posts = [
    {title: 'Post One', body: "this is post 1"},
    {title:'post two', body: 'this is body two'}
]

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if(!error) {
                resolve();
            }else{
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}

// async await function 
async function init(){
    await createPost({title:'this is good', body:'sdjfk'})
    getPosts()
};
init()





// createPost({title:"post three", body: 'body three'})
// .then(getPosts)
// .catch(err => console.log(err))

// const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
// const promise2 = 10;
// const promise3= new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000,"goodby");
// });
// const promise4 = Promise.resolve("hello world");

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => 
//     console.log(values)
// );