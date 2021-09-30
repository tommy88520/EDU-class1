import { useState } from 'react'
const Home = () => {
  const [name, setName] = useState('mario')
  const  [age , setAge] = useState(20)
  const handClick = () => {
    setName('Tommy')
    setAge(30)
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handClick}>Click me</button>
    </div>
  )
}

export default Home
