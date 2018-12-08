import React, {Component} from "react";
import Header from "./Header";
import DogList from "./DogList";
import BreedList from "./BreedList";
import Footer from "./Footer";
import '../styles/App.css';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={BreedList} />
                    <Route path='/breeds/:breedActive' component={DogList} />
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;