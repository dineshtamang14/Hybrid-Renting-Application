import { View, Text } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'

const Listing = () => {
  return (
    <>
        <View>
            <Text>Hello from Listing</Text>
        </View>
    </>
  );
}

export default withAuthenticator(Listing);