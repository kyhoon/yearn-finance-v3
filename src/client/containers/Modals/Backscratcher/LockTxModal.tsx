import { FC } from 'react';
import styled from 'styled-components';

import { ModalTx } from '@components/common';
import { BackscratcherLockTx } from '@components/app';

const StyledBackscratcherLockTxModal = styled(ModalTx)``;
export interface BackscratcherLockTxModalProps {
  onClose: () => void;
}

export const BackscratcherLockTxModal: FC<BackscratcherLockTxModalProps> = ({ onClose, ...props }) => {
  return (
    <StyledBackscratcherLockTxModal onClose={onClose} {...props}>
      <BackscratcherLockTx onClose={onClose} />
    </StyledBackscratcherLockTxModal>
  );
};
