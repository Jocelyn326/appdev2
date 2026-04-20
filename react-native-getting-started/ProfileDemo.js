import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileDemo = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>My Profile</Text>
      </View>

      {/* Profile Information */}
      <View style={styles.contentSection}>
        <Text style={styles.label}>Course & Section:</Text>
        <Text style={styles.info}>Bachelor of Science in Information Systems 3 - B</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Jocelyn Bendoy</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>26 years old</Text>

        <Text style={styles.label}>Favorite Hobby:</Text>
        <Text style={styles.info}>Playing Badminton and Reading</Text>

        {/* Pet Peeves Section */}
        <Text style={styles.label}>Three Pet Peeves in Class:</Text>
        <View style={styles.petPeevesContainer}>
          <Text style={styles.petPeeve}>1. Classmates who talk over or speak simultaneously with the teacher</Text>
          <Text style={styles.petPeeve}>2. Those who love to find fault in others but can't recognize their own flaws</Text>
          <Text style={styles.petPeeve}>3. Those who talk behind your back instead of addressing issues directly</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4f0',
    padding: 20,
  },
  headerSection: {
    backgroundColor: '#fff7fa',
    padding: 15,
    borderWidth: 1,
    borderWidth: 1,
    borderColor: '#ffb3d9',
    borderRadius: 15,
    marginTop: 35,
    marginBottom: 20,
    shadowColor: '#ffb3d9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#8b4566',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  contentSection: {
    backgroundColor: '#fff5f9',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffb3d9',
    shadowColor: '#ffb3d9',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#461027',
    marginTop: 15,
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#7a5566',
    lineHeight: 20,
  },
  petPeevesContainer: {
    marginTop: 10,
    paddingLeft: 5,
  },
  petPeeve: {
    fontSize: 14,
    color: '#7a5566',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default ProfileDemo;