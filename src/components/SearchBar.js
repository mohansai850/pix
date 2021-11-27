import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={e => this.setState({searchTerm: e.target.value})} value={this.state.searchTerm}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;