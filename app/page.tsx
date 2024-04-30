import Image from "next/image";

export const revalidate = 3
export default async function Home() {
  // throw new Error('This is an error!')
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const todo = await data.json()
  // console.log('11111', todo);
  console.log('ACTUALIZADO');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{Date.now()}</h1>
      <div>
      {todo.map((item:any) =>{
        return (
          <>
            <h1>{item.title}</h1> 
          </>
        )
        // console.log('aaaaaaaaaaaaap'');
       })}
      </div>
    </main>
  );
}
