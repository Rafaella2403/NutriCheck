import { NavigationProp, useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../routes/stack.routes";

const useDaily = () => {
  const { navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNextPage = () => navigate('NewProduct');

  return {
    handleNextPage,
  };
};

export default useDaily;
