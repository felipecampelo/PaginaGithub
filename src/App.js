import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/13797593?v=4'

const App = () => {
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
        <View style={style.content}> 
            <Image style={style.avatar} source={{uri: imageProfileGithub}}/>
            <Text style={[style.defaultText, style.name]}>Felipe Campelo</Text>
            <Text style={[style.defaultText, style.nickname]}>felipecampelo</Text>
            <Text style={[style.defaultText, style.description]}>Engenheiro de Dados | Cientista de Dados | Engenheiro de Machine Learning</Text>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { // Estilo para o View
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100, // Ficar redondo
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: 'white',
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

