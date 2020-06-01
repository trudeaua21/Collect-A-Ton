import React from 'react';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data'
import { GameCollections } from '../api/collections/gameCollections';
import CollectionListItem from './CollectionListItem';


const PageContent = (props) => {

    const clickAddCollection = () => {
        Meteor.call('Insert_Collection', '');
    }

    const openCollection = () => {
        // shows the games in the collection
    }

    const renderCollectionsList = () => {
        if(props.currentUser){
            return props.collections.map((collection) => (
                <CollectionListItem key={collection._id} collection={collection} openClick={openCollection} />
            ));
        }
    }

    return(
        <div className="pageContent" >
            {/* Left side is intended to show the user's collections
            */}
            
            <div className="collectionSide">
                { props.currentUser ?
                    <>  
                        <div className="colListHeader">
                            <h2 className="sectionTitle">{props.currentUser.username}'s Collections</h2>
                            <button onClick={clickAddCollection}>
                                Add
                            </button>
                        </div>
                        <ul className="collectionList">
                            {renderCollectionsList()}
                        </ul>
                    </>
                    : <h2 className="sectionTitle">Sign in to continue</h2>
                }
            </div>
            {/* Right side is intended to show the games in a selected collection*/}
            <div className="gameSide">
                <h2 className="sectionTitle">Content Would Have Gone Here</h2>
            </div>
        </div>
    );
}


export default withTracker(() => {
    Meteor.subscribe("gameCollections");

    return {
        // required to track current user - component will not re-render due to user changes automatically
        currentUser: Meteor.user(),
        collections: GameCollections.find({}).fetch(),
    };
})(PageContent);