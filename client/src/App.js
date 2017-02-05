import React from 'react';
import Autosuggest from 'react-autosuggest';
import {GoogleMapsTest} from './googleMaps.js'
import axios from 'axios';

const getSuggestionValue = suggestion => suggestion.title;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.title}
    </div>
);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            selected_suggestions : []
        };
    }

    onChange = (event, {newValue}) => {
        this.setState({value: newValue});
    };

    onSuggestionsFetchRequested = ({value}) => {
        self = this;
        let output = function () {
            axios
                .get('http://0.0.0.0:8000/autocomplete/', {
                    params: {
                        q: value
                    }
                })
                .then(function (response) {
                    self.setState({
                        suggestions: response.data.results
                            ? response.data.results
                            : []
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        return output()
    };

    onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
    };

    onSuggestionSelected = (event, data) => {
        let selected_suggestions = [];
        for (let x of this.state.suggestions){
            if (x.title === data.suggestionValue){
                selected_suggestions.push(x)
            }
        }
        this.setState({selected_suggestions})
    };

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: 'Type a Title Here',
            value,
            onChange: this.onChange
        };

        return (
            <div id="wrapper">
                <div id="sidebar">
                    <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                                onSuggestionSelected={this.onSuggestionSelected}/>
                </div>
                <div id="content">
                    <GoogleMapsTest cities = {this.state.selected_suggestions}/>
                </div>
            </div>
        );
    }
}

export default App;