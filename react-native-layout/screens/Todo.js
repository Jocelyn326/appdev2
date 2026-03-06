import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Todo = ({ onNavigate }) => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [lastDeleted, setLastDeleted] = useState(null);

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now().toString(), text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        const deleted = todos.find(todo => todo.id === id);
        setLastDeleted(deleted);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const undoDelete = () => {
        if (lastDeleted) {
            setTodos([...todos, lastDeleted]);
            setLastDeleted(null);
        }
    };

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>My Todos</Text>
                <Text style={styles.subtitle}>Manage your tasks</Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="SEARCH TODOS"
                        placeholderTextColor="#999"
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="add-circle" size={24} color="#99d8f0" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="ADD NEW TODO"
                        placeholderTextColor="#999"
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={addTodo} style={styles.addButton}>
                        <Text style={styles.addButtonText}>ADD</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={filteredTodos}
                    keyExtractor={item => item.id}
                    style={styles.list}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={styles.todoItem}>
                            <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.todoContent}>
                                <Ionicons 
                                    name={item.completed ? "checkmark-circle" : "ellipse-outline"} 
                                    size={24} 
                                    color={item.completed ? "#079fdb" : "#99d8f0"} 
                                />
                                <Text style={[styles.todoText, item.completed && styles.completedText]}>
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                <Ionicons name="trash" size={24} color="#ff6b6b" />
                            </TouchableOpacity>
                        </View>
                    )}
                />

                {lastDeleted && (
                    <TouchableOpacity onPress={undoDelete} style={styles.undoButton}>
                        <Ionicons name="arrow-undo" size={20} color="#fff" />
                        <Text style={styles.undoText}>UNDO</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.footer}>
                    <TouchableOpacity onPress={onNavigate} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={20} color="#fff" />
                        <Text style={styles.backButtonText}>Back to Log In</Text>
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
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#038bc1',
        letterSpacing: 1,
        marginBottom: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
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
        width: 350,
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
    addButton: {
        backgroundColor: '#079fdb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightWidth: 2,
        borderColor: '#17a3db57',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14,
    },
    list: {
        width: 350,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f8ff',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#eaf0f2',
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    todoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    todoText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    undoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6b6b',
        paddingHorizontal: 25,
        paddingVertical: 14,
        borderRadius: 20,
        marginTop: 20,
        gap: 8,
        borderBottomWidth: 4,
        borderRightWidth: 2,
        borderColor: 'rgba(255, 107, 107, 0.4)',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    undoText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14,
    },
    footer: {
        marginTop: 25,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#079fdb',
        paddingHorizontal: 25,
        paddingVertical: 14,
        borderRadius: 20,
        gap: 8,
        borderBottomWidth: 4,
        borderRightWidth: 2,
        borderColor: '#17a3db57',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    backButtonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14,
    },
});

export default Todo;
