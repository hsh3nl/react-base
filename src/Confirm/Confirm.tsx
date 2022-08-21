import { Component } from 'react';
import { ConfirmProps } from './interfaces/ConfirmProps.interface';
import { ConfirmState } from './interfaces/ConfirmState.interface';

export class Confirm extends Component<ConfirmProps, ConfirmState> {
    static defaultProps = {
        cancelBtnText: 'Cancel',
        confirmBtnText: 'Confirm',
    };

    constructor(props: ConfirmProps) {
        super(props);

        this.state = {
            interacted: false,
            loggedIn: false,
            list: [1, 2, 3, 4, 5],
        };
        console.log('constrcut');
    }

    render(): React.ReactNode {
        if (this.state.loggedIn) {
            return <p>Logged In</p>;
        }

        const listItems = this.state.list.map((item) => {
            return <li key={item}>Item {item}</li>;
        });

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <div className='actions'>
                    <button onClick={this.cancel}>{this.props.cancelBtnText}</button>
                    <button onClick={this.confirm}>{this.props.confirmBtnText}</button>
                </div>
                {this.state.interacted ? <p>Interacted</p> : null}
                <ul>{listItems}</ul>
            </div>
        );
    }

    componentDidMount() {
        console.log('component mounted');
    }

    componentWillUnmount() {
        console.log('component destroyed');
    }

    // use anonymous functions when defining event handlers
    private cancel = () => {
        this.setState({ interacted: true });
        if (typeof this.props.onCancel === 'function') {
            this.props.onCancel();
        }
    };

    private confirm = () => {
        this.setState({ interacted: true });
        if (typeof this.props.onConfirm === 'function') {
            this.props.onConfirm();
        }
    };
}
