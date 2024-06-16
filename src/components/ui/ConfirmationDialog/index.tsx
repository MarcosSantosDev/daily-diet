import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

import { Button } from "../Button";

type ConfirmationDialogProps = {
  openDialog: boolean;
  onCloseDialog: () => void;
  onCancelDialog: () => void;
  onConfirmDialog: () => void;
}

function ConfirmationDialog({ openDialog = false, onCloseDialog, onCancelDialog, onConfirmDialog }: ConfirmationDialogProps) {
  return (
    <View>
      <Modal isVisible={openDialog}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
            backgroundColor: 'white',
            padding: 32,
            borderRadius: 8,
            gap: 32
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '600'
            }}
          >
            Deseja realmente excluir o registro da refeição?
          </Text>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Button
              style={{ flex: 1 }}
              variant="secondary"
              onPress={() => {
                onCloseDialog();
                onCancelDialog && onCancelDialog()
              }}
            >
              Cancelar
            </Button>
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                onCloseDialog();
                onConfirmDialog && onConfirmDialog()
              }}
            >
              Sim
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ConfirmationDialog;