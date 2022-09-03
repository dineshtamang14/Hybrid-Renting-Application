import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from "aws-amplify";
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../modal/color';

const Listing = () => {
    Auth.currentAuthenticatedUser()
        .then((user) => {
            console.log("email id: ", user.attributes.email);
            console.log("userid: ", user.attributes.sub);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
  return (
        <View style={{ margin: 10 }}>
            <View>
                <Text style={{ marginTop: 10 }}>Upload images [Max 5 photos]</Text>
                <Pressable style={styles.listing_imgupload}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.listing_cat}>
                <Text style={{ fontSize: 16, color: colors.secondary}}>Category</Text>
                <AntDesign name="caretright" size={24} color={colors.secondary} />
            </View>
            <View>
                <TextInput placeholder="write location" style={styles.listing_cat} />
            </View>
            <Text>Title</Text>
            <Text>Description</Text>
            <Text>Value</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    listing_imgupload: {
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 20,
        height: 150,
        width: 150,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 30,
    },

    listing_cat: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 5
    }
  });

export default withAuthenticator(Listing);