import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alacarts</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EntregasScreen')}>
                <Text style={styles.buttonText}>Entregas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
