import React, {Component} from 'react';

class DogForm extends Component {
    render() {
        return (
            <div>
                <h1>Create Dog</h1>
                <form>
                    <input required type="text" placeholder="Enter Dog name" /><br /><br />
                    <input required type="number" placeholder="Enter Dog age" /><br /><br />
                    <input required type="number" placeholder="Enter Dog weight" /><br /><br />
                    <input required type="date" placeholder="Enter Dog date" /><br /><br />
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

export default DogForm;