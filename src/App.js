import './App.css';
import Header from './components/Header';
import Headline from './components/Headline';
import './app.scss';
import SharedButton from './components/Button';
import { fetchPosts } from './actions'

const temp = [
  {
    firstName: 'Trung',
    lastName: 'Bloggs',
    email: 'example@gmail.com',
    age: 28,
    onlineStatus: true
  }
]


function App(props) {
  const fetchData = () => {
    props.fetchPosts()
  }

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: fetchData
  }

  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header="My header" desc="This is headline" tempArr={temp}/>
        <SharedButton {...configButton} />
      </section>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts }) (App);
