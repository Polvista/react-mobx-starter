import './mainPage.scss';

import * as React from 'react';
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';

@observer
export class MainPage extends React.Component<Props, {}> {
    render() {
        return (
            <div>Page!</div>
        );
    }
}

interface Props {

}