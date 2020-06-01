import React from 'react';
import Meteor from 'react-native-meteor';

import {ListItem} from 'react-native-elements';

const CollectionListItem = props => {
  const deleteThisCollection = () => {
    Meteor.call('Delete_Collection', props.collection._id);
  };

  return (
    <>
      <ListItem
        key={props.collection._id}
        title={props.collection.name}
        subtitle={'Owner: ' + props.collection.ownerName}
        onPress={deleteThisCollection}
        bottomDivider
      />
    </>
  );
};

export default CollectionListItem;
