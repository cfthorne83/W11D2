import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

const App = () => (
        <Route path="/" component={PokemonIndexContainer} />
)

export default App;