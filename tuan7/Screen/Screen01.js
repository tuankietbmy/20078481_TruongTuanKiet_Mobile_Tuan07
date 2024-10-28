import {TouchableOpacity,Button, TextInput,Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Screen01({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageTop}
        resizeMode="cover"
        source={require('../assets/status.png')}
      />
      <Image
        style={styles.imageCenter}
        resizeMode="cover"
        source={require('../assets/notebook.png')}
      />
      <Text style={styles.text}>MANAGER YOUR</Text>
      <Text style={styles.text}>TASK</Text>
      <View style={styles.inputContainer}>
        <Image
        style={{width:'20px',height:'20px'}}
        resizeMode="cover"
        source={require('../assets/letter.png')}
        />
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <Button  title="Get Started ➝" onPress={() => navigation.navigate('Screen02')}/>
      </View>
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
     // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  imageTop: {
    marginBottom: 50,
    width: '100%',
    height: 30,
  },
  imageCenter: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 20,
    textAlign: 'center', // Căn giữa văn bản
  },
  inputContainer: {
    marginTop:30,
    marginBottom:30,
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    width: '80%%', // Hoặc chiều rộng bạn muốn
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color:'silver'
  },
});
