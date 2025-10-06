

const Tuff = (object) => { // Renamed to Tuff
  console.log("Capital T is requiered")

  //Random code here

  var x = 5;
  var y = 10; 
  var z = x + y;


  return (
    <div>
      <p>param</p>
      <p>{x} + {y} = {z}</p>
      <p>{object.name}</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <Tuff name='baira' />
    </div>
  )
}


export default App
export { Tuff } // Updated export