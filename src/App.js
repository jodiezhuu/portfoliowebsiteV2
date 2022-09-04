import './App.css';
import NavProvider from './context/NavContext';
import { Main } from './pages';
import { Nav } from './nav';

function App() {
  return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
  );
}
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1
export default App;
