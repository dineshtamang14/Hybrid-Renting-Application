import { StyleSheet } from 'react-native';
import { colors } from '../../modal/color';

const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.primary,
        alignItems: 'center'
    },

    header_search: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderRadius: 5
    },

    header_search_input: {
        width: "100%",
        marginLeft: 5
    },

    header_settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10
    }
  });

export default styles;