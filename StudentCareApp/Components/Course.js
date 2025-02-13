import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { students } from '../assets/StudentsDb'; 
import { courses } from '../assets/StudentsDb'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import FooterMenu from '../common/FooterMenu'; 
import Footer from '../common/Footer';

export default function Course() {
    const navigation = useNavigation();
    const [studentData, setStudentData] = useState(null);
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const getStudentData = async () => {
            try {
                const username = await AsyncStorage.getItem('username');

                if (username) {
                    const student = students.find(student => student.username === username);
                    if (student) {
                        setStudentData(student);
                        const course = courses.find(course => course.id === student.course_id);
                        setCourseData(course);
                    }
                }
            } catch (error) {
                console.error('Error fetching username from AsyncStorage', error);
            }
        };

        getStudentData();
    }, []);

    if (!studentData || !courseData) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.courseName}>{courseData.name}</Text>
                <Text style={styles.courseCode}>Code: {courseData.course_code} | Dept: {courseData.department}</Text>

                <View style={styles.separator} />

                <Text style={[styles.sectionTitle, styles.leftAligned]}>Course Information</Text>
                <Text style={[styles.courseInfo, styles.leftAligned]}>Code: {courseData.course_code}</Text>
                <Text style={[styles.courseInfo, styles.leftAligned]}>Department: {courseData.department}</Text>
                <Text style={[styles.courseInfo, styles.leftAligned]}>Duration: {courseData.duration}</Text>
                <Text style={[styles.courseInfo, styles.leftAligned]}>Description: {courseData.description}</Text>
                
                <View style={styles.separator} />
            </View>

            <Footer />
            <FooterMenu />
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'White',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    courseName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    courseCode: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    separator: {
        width: '80%',
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    leftAligned: {
        textAlign: 'left',
        width: '100%',
        paddingLeft: 10,
    },
    courseInfo: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
});
