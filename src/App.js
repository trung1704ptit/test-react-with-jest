import './App.css';
import Header from './components/Header';
import Headline from './components/Headline';
import './app.scss';
const temp = [
  {
    firstName: 'Trung',
    lastName: 'Bloggs',
    email: 'example@gmail.com',
    age: 28,
    onlineStatus: true
  }
]


function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header="My header" desc="This is headline" tempArr={temp}/></section>
    </div>
  );
}

export default App;
