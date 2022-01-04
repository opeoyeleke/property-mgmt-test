import { useContext } from "react";
import moment from "moment";
import { UserContext } from "../store/userContext";
import {
  writeProperty,
  getProperties,
  removeProperty,
} from "../firebase/firebase";

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

  const deleteProperty = async (id) => {
    removeProperty(user?.uid, id, fetchProperties);
  };

  return { handleCreateProperty, fetchProperties, deleteProperty };
};

export default useProperty;
