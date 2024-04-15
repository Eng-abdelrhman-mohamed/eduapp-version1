// library
import React ,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Button} from 'react-native';
import Modal from 'react-native-modal';

const PopupExample = ({ toggle , onclose }) => {
  
  
  return (
<>
    <View>
        <Modal  animationIn="zoomInDown" isVisible={onclose} onBackdropPress={toggle}>
            <View style={styles.container}>
                <Text style={styles.title}>wrong information</Text>
                <Text style={styles.message}>المعلومات غلط يا بطيخة</Text>

                <TouchableOpacity onPress={toggle}>
                    <Text style={styles.button}>Close</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    </View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  message: {
    marginBottom: 20
  },
  button: {
    color: 'blue'
  }
});

export default PopupExample;
