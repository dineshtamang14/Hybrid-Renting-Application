import React, { useEffect, useState } from "react";
import HeaderForMobile from '../../components/headerForMobile';
import PostItems from "../../components/postItems";
import { API } from "aws-amplify";
import { getListingByCreatedAt, searchListings } from "../../graphql/queries";
import { FlatList, Dimensions, View, ScrollView, RefreshControl } from "react-native";
import HeaderForDesktop from "../../components/headerForDesktop";
import CategoryForDesktop from "../../components/categoryForDesktop";
import MenuDetailsForDesktop from "../../components/menuDetailsForDesktop";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const route = useRoute();
  const [searchText, setSearchText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [searchByLocation, setSearchByLocation] = useState({
    locationName: "All",
    locationId: "",
  });
  const [searchByCategory, setSearchByCategory] = useState({
    catName: "All",
    catId: "",
  });

  useEffect(() => {
    if (!route.params) {
      console.log("Params not set");
    } else if (route.params.locID !== undefined) {
      setSearchByLocation({
        locationName: route.params.locName,
        locationId: route.params.locID,
      });
    } else if (route.params.catID !== undefined) {
      setSearchByCategory({
        catName: route.params.catName,
        catId: route.params.catID,
      });
    }
  }, [route.params]);

  const windowWidth = Number(Dimensions.get("window").width);
  const [newItems, setNewItems] = useState([]);

  var searChWithLocation = async (searchString) => {
    // console.log("cat name", searchByCategory.catId);
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            locationID: { eq: searchByLocation.locationId },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithText = async (searchString) => {
    // alert("search by only text");
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            title: {
              match: searchString,
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
      // console.log("Search by text result", newItems);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndText = async (searchString) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              title: {
                match: searchString,
              },
              locationID: { eq: searchByLocation.locationId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searchByCatFunc = async () => {
    // alert("only category func");
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            categoryID: { eq: searchByCategory.catId },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndCategory = async (searchByCategoryy) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              categoryID: { eq: searchByCategory.catId },
              locationID: { eq: searchByLocation.locationId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithTextAndCategory = async (searchString, searchByCategoryy) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              categoryID: { eq: searchByCategory.catId },
              title: {
                match: searchString,
              },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndTextAndCategory = async (
    searchString,
    searchByCategoryy
  ) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              title: {
                match: searchString,
              },
              locationID: { eq: searchByLocation.locationId },
              categoryID: { eq: searchByCategory.catId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (searchByLocation.locationId !== "") {
      console.log("location id changeg", searchByLocation);
      if (searchByCategory.catId == "") {
        if (searchText !== "") {
          searChWithLocationAndText(searchText);
        } else {
          searChWithLocation();
        }
      } else {
        if (searchText !== "") {
          searChWithLocationAndTextAndCategory(searchText, searchByCategory);
        } else {
          searChWithLocationAndCategory(searchByCategory);
        }
      }
    } else {
      console.log("location id has not change", searchByLocation);
    }
  }, [searchByLocation]);
  useEffect(() => {
    if (searchText !== "") {
      if (searchByCategory.catId == "") {
        // console.log("searchText id change", searchText);
        if (searchByLocation.locationId !== "") {
          searChWithLocationAndText(searchText);
        } else {
          searChWithText(searchText);
        }
      } else {
        console.log("searchText id change", searchText);
        if (searchByLocation.locationId !== "") {
          searChWithLocationAndTextAndCategory(searchText, searchByCategory);
        } else {
          searChWithTextAndCategory(searchText, searchByCategory);
        }
      }
    } else {
      console.log("searchText id has not change", searchText);
    }
  }, [searchText]);
  useEffect(() => {
    // alert(searchByCategory.catId);
    if (searchByCategory.catId !== "") {
      // console.log("searchText id change", searchText);
      if (searchByLocation.locationId !== "") {
        // alert(searchByCategory.catId);
        searChWithLocationAndTextAndCategory(searchText, searchByCategory);
      } else if (searchText !== "") {
        searChWithTextAndCategory(searchText, searchByCategory);
      } else {
        searchByCatFunc(searchByCategory);
      }
    } else {
      console.log("searchText id has not change", searchText);
    }
  }, [searchByCategory]);

  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        authMode: "AWS_IAM",
      });

      setNewItems(itemListByCommonID.data.getListingByCreatedAt.items);
      // console.log(newItems)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);

  const pulldata = async () => {
    await fetchAll();
    setRefresh(false);
  }

  const pull = () => {
    setRefresh(true);
    pulldata();
  }

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <HeaderForMobile 
        setSearchText={setSearchText}
        searchByCategory={searchByCategory}
        searchByLocation={searchByLocation}
      />
      <HeaderForDesktop 
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        setSearchText={setSearchText}
        searchByLocation={searchByLocation}
      />
      <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
        <View style={{
            flex: 1,
            width: windowWidth > 800 ? "80%" : "100%",
            flexDirection: "row",
            justifyContent: "center",
        }}>
          <View style={{display: windowWidth > 800 ? "flex" : "none", flexBasis: "20%"}}>
          <CategoryForDesktop setSearchByCategory={setSearchByCategory} />
          </View>
          <FlatList
            refreshControl={<RefreshControl 
            refreshing={refresh}
            onRefresh={pull}
            />}
            style={{ flexBasis: "80%", marginTop: windowWidth > 800 ? 6 : 1,         borderWidth: 0.5, borderColor: 'grey'}}
            data = {newItems}
            renderItem = {({item}) => <PostItems posts={item} /> }
        />
        </View>
        <MenuDetailsForDesktop
          menuToggle={menuToggle}
          top={-20}
          right={"9.2%"}
        />
      </View>
    </>
  );
}

export default Home;