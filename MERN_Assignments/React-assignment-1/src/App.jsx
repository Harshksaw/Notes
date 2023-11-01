import Person from './Person'
import Header from './Header'
import List from './List';
import Button from './Button'
function App() {
  return (
    <div>
      <Header title="React Assignment"/>
      <hr />
      <Person name="Harsh" age="21"/>
      <hr />
      <List items={['Home', 'About', 'Contact', 'Gallery']}/>
      <hr />
      <Button text="Click" onClick={() => console.log("Button clicked")} />
    </div>
  );
}

export default App;
