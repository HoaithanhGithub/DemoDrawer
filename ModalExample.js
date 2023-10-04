import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ModalExample = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Hiển thị hộp thoại</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View>
          <Text>Đây là nội dung hộp thoại</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Đóng hộp thoại</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalExample;
