import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [images, setImages] = useState([])
  console.log(1)
  console.log(2)

  useEffect(() => {
    // getting images from picsum and setting
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then(res => res.json())
      .then(json => { setImages(images) })
    console.log("Images state variable assigned")
    return () => {
      console.log("No cleanup needed")
    }
  })
  return (
    <h1>Hello World!</h1>
  )
}

