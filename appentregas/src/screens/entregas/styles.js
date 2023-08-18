import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        width: 320,
    },
    idText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    dateTimeText: {
        fontSize: 14,
        color: '#666',
    },
    entregaText: {
        fontSize: 16,
        color: '#777',
    },
    button: {
        marginTop: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#1565C0',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default styles;
