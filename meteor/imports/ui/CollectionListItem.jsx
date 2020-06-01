import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const CollectionListItem = ({collection, openClick}) => {

    const [nameEntry, setNameEntry] = useState(collection.name);

    // enable text field by default if the name is blank
    const [textEnabled, setTextEnabled] = useState(collection.name ? false : true);
    

    const onEntryEdit = (event) => {
        setNameEntry(event.target.value);
    }

    const onChangeClick = (event) => {
        setTextEnabled(true);
    }

    // TODO: Ideally would call this on an enter keypress when the focus in on the text field
    const onSaveClick = (event) => {
        // update DB
        Meteor.call('Update_Name', collection._id, nameEntry);
        setTextEnabled(false);
    }

    const onDeleteClick = (event) => {
        Meteor.call('Delete_Collection', collection._id);
    }
    
    // intended to display a collection, along with buttons to delete and update the colleciton
    return(
        <li key={collection._id} className="colListItem" >
            <button className="delete" title={collection._id} onClick={onDeleteClick}>
                &times;
            </button>

            {textEnabled ?
                <>
                    <button className="save" onClick={onSaveClick}>
                        Save Changes
                    </button>
                    <input 
                        className="colName"
                        type="text"
                        value={nameEntry}
                        onChange={onEntryEdit}
                        placeholder="Enter Collection Name..."
                    />
                </>
                :
                <>
                    <button className="changeName" onClick={onChangeClick}>
                        Change Name
                    </button>
                    <input 
                        className="colName"
                        type="text"
                        value={nameEntry}
                        placeholder="Enter Collection Name..."
                        readOnly
                    />
                </>
            }
            
            
            <button className="openCollection" onClick={openClick}>
                Do Nothing
            </button>
        </li>
    );
}

export default CollectionListItem;