import { View, Text, Pressable, TextInput } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from "aws-amplify";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../modal/color';
import styles from "./styles";
import {  useNavigation } from "@react-navigation/native"

const Listing = () => {
    const navigation = useNavigation();
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
                <Pressable style={styles.listing_imgupload} onPress={() => {
                    navigation.navigate("SelectPhotos");
                }}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                </Pressable>
            </View>

            <View>
                
            </View>

            <View style={styles.listing_cat}>
            <View style={{ flexDirection: 'row', alignItems: "center"}}>
            <MaterialIcons name="settings-input-composite" size={20} color={colors.secondary} />
                <Text style={{ fontSize: 16, color: colors.secondary, marginLeft: 5}}>Category</Text>
            </View>
                <AntDesign name="right" size={24} color={colors.secondary} />
            </View>
            <View style={styles.listing_cat}>
            <View style={{ flexDirection: 'row', alignItems: "center"}}>
            <MaterialCommunityIcons name="map-marker" size={24} color={colors.secondary} />
                <Text style={{ fontSize: 16, color: colors.secondary, marginLeft: 5}}>Location</Text>
            </View>
                <AntDesign name="right" size={24} color={colors.secondary} />
            </View>
            <View style={styles.inputText}>
                <MaterialIcons name="title" size={24} color={colors.secondary} />
                <TextInput placeholder="Adv Title" />
            </View>
            <View style={styles.inputText}>
                <MaterialIcons name="description" size={24} color={colors.secondary} />
                <TextInput placeholder="write a description" style={{ marginLeft: 5 }} />
            </View>
            <View style={[styles.inputText, { width: "50%" }]}>
                <FontAwesome name="rupee" size={24} color={colors.secondary} />
                <TextInput placeholder="Add a value" style={{ marginLeft: 5 }} />
            </View>

            <View style={styles.post_adv}>
                <Text style={styles.post_adv_text}>POST ADV</Text>
            </View>
        </View>
  );
}

//export default withAuthenticator(Listing);
export default Listing;