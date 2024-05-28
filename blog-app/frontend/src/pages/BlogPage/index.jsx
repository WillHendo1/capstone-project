import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPage() {
  //const { blogId } = useParams();

  //console.log(blogId);

  function printHi(){
    console.log("hi");
  }
  function printThere(){
    setTimeout(() => {
      console.log("there");
    }, 0);
  }

  function printIX(){
    console.log("IX");
  }

  printHi();
  printThere();
  printIX();
}
