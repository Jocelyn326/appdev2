import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ onNavigate }) => {
 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                

                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/login.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>Log In</Text>
                <Text style={styles.subtitle}>Please enter your credentials</Text>


                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="EMAIL"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="PASSWORD"
                        placeholderTextColor="#999"
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity 
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#99d8f0" 
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={onNavigate}>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
    },
    content: {
        flex: 1,
        paddingHorizontal: 100, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        backgroundColor: '#fff',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#99d8f0', 
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#079fdb', 
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        marginBottom: 5,
    },
    subtitle: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#969899',
        marginBottom: 30,
        textTransform: 'uppercase', 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#eaf0f2', 
        paddingHorizontal: 15,
        marginBottom: 30,
        width: '350',
        height: 55,
    },

    icon: {
        marginRight: 10,
    },

    input: {
        flex: 1,
        height: '100%',
        fontWeight: 'bold',
        color: '#333',

    },
    eyeIcon: {
        padding: 5,
    },
    button: {
        backgroundColor: '#079fdb', 
        width: '350',
        height: 55,
        borderRadius: 20,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderColor: '#17a3db57', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    footerText: {
        fontWeight: 'bold',
        color: '#333',
    },
    link: {
        color: '#08adee',
        fontWeight: '900',
        textDecorationLine: 'underline',
    },
});

export default Login;