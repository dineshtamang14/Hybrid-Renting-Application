import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  Platform,
  Alert,
  TouchableOpacity
} from "react-native";
import { colors } from "../../modal/color";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderForDesktop from "../../components/headerForDesktop";
import MenuDetailsForDesktop from "../../components/menuDetailsForDesktop";
import { API, Auth } from "aws-amplify";
import { createRentOrder, deleteListing, deleteRentOrder } from "../../graphql/mutations";


const PostDetails = () => {
  const windowWidth = Number(Dimensions.get("window").width);
  const route = useRoute();
  const navigation = useNavigation();

  const [logged, setLogged] = useState(false);
  const [showOrder, setShowOrder] = useState(true);

  const [images, setimages] = useState(
    JSON.parse(route.params.postInfo.images)
  );
  const [lenderUserEmail, setLenderUserEmail] = useState(
    route.params.postInfo.owner
  );
  const [userEmail, setUserEmail] = useState("");
  const substrEmail = lenderUserEmail.substr(0, lenderUserEmail.indexOf("@"));
  const [menuToggle, setMenuToggle] = useState(false);
  const [userID, setUserID] = useState("");

  Auth.currentAuthenticatedUser()
  .then((user) => {
    setUserID(user.attributes.sub);
    setUserEmail(user.attributes.email);
    setLogged(true);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

    useEffect(()=> {
      if(route.params.postInfo.owner === userEmail){
        setShowOrder(false);
      }
    },)

  const [postSuccess, setPostSuccess] = useState("");

  useEffect(() => {
    if (postSuccess !== "") {
      Alert.alert("Success", postSuccess, [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Home", { screen: "Explore" }),
        },
      ]);
    }
  }, [postSuccess]);

  const orderToDB = async () => {
    if(logged){
      const postData = {
	      advId: route.params.postInfo.id,
        borrowerUserId: userID,
        lenderUserID: route.params.postInfo.userID,
        rentValue: route.params.postInfo.rentValue,
        borrowerEmailID: userEmail,
        lenderEmailID: lenderUserEmail,
        commonID: "1",
      }
      await API.graphql({
        query: createRentOrder,
        variables: { input: postData },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      if (Platform.OS === "web") {
        alert("Your order have successfully placed.")
        navigation.navigate("Home", { screen: "Journal" });
      } else {
        setPostSuccess("Your order have successfully placed.");
        navigation.navigate("Home", { screen: "Journal" });
      }
      } else {
        alert("your not logged in... please login");
        navigation.navigate("Home", { screen: "Listing" });
      }
    }

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <HeaderForDesktop setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      <View style={{ alignItems: "center" }}>
        <ScrollView
          showsVerticalScrollIndicator={windowWidth > 800 ? false: true}
          style={{
            width: windowWidth > 800 ? "80%" : "100%",
            backgroundColor:
              windowWidth > 800 ? colors.white : colors.backgroundColor,
              marginTop: windowWidth > 800 ? 10 : 0,
          }}>
          <ScrollView horizontal={true} style={{borderWidth: 0.5, borderColor: 'grey'}}>
            {images &&
              images.map((data, index) => (
                <Image
                  source={{
                    uri:
                      "https://dtjhbqhj69dt.cloudfront.net/fit-in/500x500/public/" +
                      images[index].imageUrl,
                  }}
                  style={{
                    height: 320,
                    width: 380,
                    marginRight: 10,
                  }}
                  key={index}
                />
              ))}
          </ScrollView>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 30,
              fontWeight: "bold",
              marginRight: 10,
              marginTop: 30,
              color: colors.secondary,
            }}>
            {route.params.postInfo.title}
          </Text>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: colors.secondary,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                paddingRight: 5,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: colors.primary,
                }}>
                {" "}
                {substrEmail.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={{ color: colors.grey }}>Owned by</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {substrEmail}
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderTopColor: "lightgrey",
              borderBottomWidth: 1,
              borderBottomColor: "lightgrey",
              paddingVertical: 20,
            }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.secondary,
                }}>
                ₹ {route.params.postInfo.rentValue}
              </Text>
              <Text style={{ color: colors.grey }}>A day</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.secondary,
                }}>
                ₹ {route.params.postInfo.rentValue * 7}
              </Text>
              <Text style={{ color: colors.grey }}>A week</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.secondary,
                }}>
                ₹ {route.params.postInfo.rentValue * 30}
              </Text>
              <Text style={{ color: colors.grey }}>A month</Text>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: colors.secondary, fontWeight: "bold" }}>
              Preferred Meetup Location
            </Text>
            <Text style={{ color: colors.secondary }}>
              {route.params.postInfo.locationName}
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: colors.secondary, fontWeight: "bold" }}>
              Description
            </Text>
            <Text style={{ color: colors.secondary }}>
              {route.params.postInfo.description}
            </Text>
          </View>
        </ScrollView>
      </View>
      {showOrder && 
        <TouchableOpacity
        onPress={orderToDB}
        style={{
          position: "absolute",
          bottom: 10,
          right: windowWidth > 800 ? "15%" : "40%",
        }}>
        <Text
          style={{
            backgroundColor: colors.secondary,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 50,
            color: colors.white,
            elevation: 5,
          }}>
          ORDER
        </Text>
        </TouchableOpacity>
      }
      <MenuDetailsForDesktop menuToggle={menuToggle} top={59} right={"7.8%"} />
    </View>
  );
};

export default PostDetails;