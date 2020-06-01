// Author: Aaron Trudeau
// A collection of games
// PROPERTIES AS OF 5/29: _id (unique collection ID), owner (owner's userID), name
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
export const GameCollections = new Mongo.Collection('gameCollections');

// //TODO: MAKE A SCHEMA - might not get to it :(
if(Meteor.isServer){
    Meteor.publish('gameCollections', function colPublication() {
        return GameCollections.find({ ownerID: Meteor.userId()});
    });

    // doing this for demonstration purposes only - definitely terrible security
    Meteor.publish('everything', function everything() {
        return GameCollections.find({});
    });
}
      

Meteor.methods({

    'Insert_Collection' (name){
        // ensure that this can only be called with a user signed in
        if(!Meteor.user()){
            throw new Meteor.Error('not-authorized');
        }

        GameCollections.insert({
            ownerID: Meteor.userId(),
            ownerName: Meteor.user().username,
            name,
        });

    },

    'Update_Name' (_id, name){
        // ensure that this can only be called with a user signed in
        if(!Meteor.user()){
            throw new Meteor.Error('not-authorized');
        }

        GameCollections.update(_id, {
            $set: { name },
        });
    },

    'Delete_Collection' (col_id) {
        // removed for demonstration purposes
        // ensure that this can only be called with a user signed in
        // if(!Meteor.user()){
        //     throw new Meteor.Error('not-authorized');
        // }

        GameCollections.remove(col_id);
    }    
});

