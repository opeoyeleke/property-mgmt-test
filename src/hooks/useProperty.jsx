import { useContext } from "react";
import moment from "moment";
import { UserContext } from "../store/userContext";
import {
  writeProperty,
  getProperties,
  removeProperty,
  editProperty,
  getUserIdByEmail,
  transferProperty,
} from "../firebase/firebase";
import { message } from "antd";

const useProperty = () => {
  const { user, setUserData } = useContext(UserContext);

  const createProperty = async (property) => {
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
    removeProperty(user?.uid, id, fetchProperties).then(() => {});
  };

  const updateProperty = async (id, property) => {
    editProperty(user?.uid, id, {
      ...property,
      built: moment(property?.built, "YYYY").year(),
    }).then(() => {
      fetchProperties();
    });
  };

  const moveProperty = async (recipientEmail, property) => {
    const getUidCallback = (uid) => {
      if (uid === "NOT_FOUND") {
        message.error("User does not exist");
      } else {
        transferProperty(uid, property);
        deleteProperty(property?.id);
      }
    };

    await getUserIdByEmail(recipientEmail, getUidCallback);
  };

  return {
    createProperty,
    fetchProperties,
    deleteProperty,
    updateProperty,
    moveProperty,
  };
};

export default useProperty;
