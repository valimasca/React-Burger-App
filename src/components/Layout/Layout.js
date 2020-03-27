import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer 
                open={this.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                <main classes={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            )
    } 
}
    


export default Layout;