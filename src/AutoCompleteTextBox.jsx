import React, { Component } from 'react';
import './AutoCompleteTextBox.css';

class AutoCompleteTextBox extends Component {
    constructor(props) {
        super(props);
        this.cities = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
            'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
            'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
            'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
            'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
            'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
            'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 
            'Andaman and Nicobar Islands', 'Chandigarh',
            'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi',
            'Lakshadweep', 'Puducherry',
        ];
        this.state = {
            textValue: '',
            suggestions: [],
        }

    }

    suggestionSelected(value) {
        this.setState(() => ({
            textValue: value,
            suggestions: [],
        }));
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            console.log(value);
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.cities.sort().filter(v => regex.test(v));
            console.log(suggestions);
        }

        this.setState(() => ({ suggestions, textValue: value }));
    };

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return  (
            <ul>
                {suggestions.map((city) => <li key={city} onClick={() => this.suggestionSelected(city)}>{city}</li>)}
            </ul>
        )
    }

    render() {
        const {textValue} = this.state;
        return (
            <div className="AutoCompleteTextBox">
                <input onChange={this.onTextChanged} type="text" value={textValue} />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutoCompleteTextBox;