import { StyleSheet } from "react-native";
import { colors } from "../../modal/color";
const styles = StyleSheet.create({
    sub_header: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    sub_header_text: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      },

      sub_header_button: {
        height: 60,
        width: 200,
        justifyContent: "center",
        alignItems: "flex-start",
      },

      sub_header_input: {
        backgroundColor: colors.white,
        height: 40,
        width: 250,
        padding: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 2,
        borderColor: colors.secondary,
      },

      sub_header_search: {
        backgroundColor: colors.primary,
        height: 40,
        padding: 8.5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderWidth: 2,
        borderColor: colors.secondary,
        marginLeft: -1.8,
        fontWeight: "bold",
        color: colors.secondary,
      },

      sub_header_text1: {
        marginLeft: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
});

export default styles;
