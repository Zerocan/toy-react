import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {

    render() {
        return (
            <div>
                <div>my Component</div>
                {this.children}
            </div>
        )
    }

}

render(<MyComponent id="id" class="c">
        <div>a</div>
        <div>b</div>
    </MyComponent>, document.body);