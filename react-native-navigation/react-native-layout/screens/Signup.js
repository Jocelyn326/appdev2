import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ onNavigate }) => {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/login.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                </View>

                <Text style={styles.title}>Let's create your account</Text>
                <Text style={styles.subtitle}>Please enter your details</Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="USERNAME"
                        placeholderTextColor="#999"
                    />
                </View>

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
                        placeholder="ENTER PASSWORD"
                        placeholderTextColor="#999"
                        secureTextEntry={!isPasswordVisible}

/>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#99d8f0" 
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="shield-checkmark" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        
                        style={styles.input}
                        placeholder="CONFIRM PASSWORD"
                        placeholderTextColor="#999"
                        secureTextEntry={!isConfirmVisible}
                    />
                    <TouchableOpacity onPress={() => setIsConfirmVisible(!isConfirmVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons 
                            name={isConfirmVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#99d8f0" 
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account ? </Text>
                    <TouchableOpacity onPress={onNavigate}>
                        <Text style={styles.link}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
    },
    scrollContent: {
        paddingHorizontal: 50,
        paddingVertical: 100,
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
        width: 120,
        height: 120,
    },

    title: {
        fontSize: 25,
        fontWeight: '900',
        color: '#038bc1', 
        letterSpacing: 1,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#969899',
        marginBottom: 25,

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
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 1,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 30,
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

export default Signup;