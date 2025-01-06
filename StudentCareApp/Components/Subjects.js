import { PaperProvider } from "react-native-paper";

export default function Subject(){

    return(
        <PaperProvider>

        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    courseTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#444',
        marginBottom: 10,
        textAlign: 'center',
    },
    totalSubjects: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
        textAlign: 'center',
    },
    averageMarks: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    dataContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    tableContainer: {
        marginTop: 20,
        alignSelf: 'center', 
        width: '90%', 
        borderWidth: 1, 
        borderColor: '#ddd', 
        borderRadius: 8, 
    },
    tableHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd', 
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        width: '45%',
        textAlign: 'left',
        padding: 10, 
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1, 
        borderBottomColor: '#ddd', 
    },
    tableCell: {
        fontSize: 16,
        color: '#555',
        width: '45%',
        padding: 10, 
    },
});
