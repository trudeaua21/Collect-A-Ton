import React from 'react';
import Meteor, {withTracker} from 'react-native-meteor';
import CollectionListItem from './components/CollectionListItem';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Header} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//please work
Meteor.connect('ws://localhost:3000/websocket');

const App = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header
            style={styles.header}
            centerComponent={{
              text: 'Press to Delete!',
              style: {color: '#fff', fontSize: 20},
            }}
          />
          <View>
            {props.collections.map(collection => (
              <CollectionListItem collection={collection} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default withTracker(() => {
  const handle = Meteor.subscribe('everything');
  const collections = Meteor.collection('gameCollections').find();

  return {
    collections,
    loading: !handle.ready(),
  };
})(App);
