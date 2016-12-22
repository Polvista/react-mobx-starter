import * as React from 'react';
import {observable, autorun} from 'mobx';
import {observer, Provider} from 'mobx-react';
import {AppState} from "./AppState";
import {MainPage} from "./components/mainPage/MainPage";

@observer
export class App extends React.Component<Props, {}> {

    render() {
        return (
            <Provider state={this.props.state}>
                <MainPage />
            </Provider>
        );
    }
}

interface Props {
    state: AppState;
}