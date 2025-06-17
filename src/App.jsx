import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [images, setImages] = useState([0,1,2,3])

  useEffect(() => {
    // getting images from picsum and setting
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then(res => res.json())
      .then(json => { setImages(json) })
    console.log("Images state variable assigned")
    console.log("After assignment")
    return () => {
      console.log("No cleanup needed")
    }
  }, [])
  return (
    <h1>{JSON.stringify(images, null, "  ")} Hello World!</h1>
  )
}

