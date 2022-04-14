import { useEffect, useLayoutEffect } from 'react';

export function FirstGeneration() {
  console.log('I am the first!');
  // useEffect(() => console.log('I am the first!'));
  // useLayoutEffect(() => console.log('I am the first!'));
  return <SecondGeneration />;
}

function SecondGeneration() {
  console.log('I am the second!');
  // useEffect(() => console.log('I am the second!'));
  // useLayoutEffect(() => console.log('I am the second!'));
  return <ThirdGeneration />;
}

function ThirdGeneration() {
  console.log('I am the third!');
  // useEffect(() => console.log('I am the third!'));
  // useLayoutEffect(() => console.log('I am the third!'));
  return <FourthGeneration />;
}

function FourthGeneration() {
  console.log('I am the fourth!');
  // useEffect(() => console.log('I am the fourth!'));
  // useLayoutEffect(() => console.log('I am the fourth!'));
  return <FifthGeneration />;
}

function FifthGeneration() {
  console.log('I am the fifth!');
  // useEffect(() => console.log('I am the fifth!'));
  // useLayoutEffect(() => console.log('I am the fifth!'));
  return <div />;
}
