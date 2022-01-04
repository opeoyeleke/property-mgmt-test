import { useContext } from "react";
import moment from "moment";
import { UserContext } from "../store/userContext";
import { writeProperty, getProperties } from "../firebase/firebase";

const useProperty = () => {
  const { user, setUserData } = useContext(UserContext);

  const handleCreateProperty = async (property) => {
    writeProperty(user?.uid, {
      ...property,
      built: moment(property?.built, "YYYY").year(),
    }).then(() => {
      fetchProperties();
    });
  };

  const fetchProperties = async () => {
    const handleResponse = (properties) => {
      setUserData({ ...user, properties });
    };

    await getProperties(user?.uid, handleResponse);
  };

  return { handleCreateProperty, fetchProperties };
};

export default useProperty;
