import React from 'react';
import TopBar from './TopBar.jsx'
import PageContent from './PageContent.jsx';
import { Meteor } from 'meteor/meteor';


const App = (props) => {
    // only wrapped in a div because there needs to be at least one parent element
    return(
        <div>
            <TopBar />
            
            <PageContent />
        </div>
    );
}

export default App;