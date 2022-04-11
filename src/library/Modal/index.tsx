// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useEffect } from 'react';
import { Wrapper, ContentWrapper } from './Wrapper';
import { useModal } from '../../contexts/Modal';
import { useAnimation } from 'framer-motion';
import { ConnectAccounts } from '../../modals/ConnectAccounts';
import { EraPoints } from '../../modals/EraPoints';
import { ChangeController } from '../../modals/ChangeController';
import { Settings } from '../../modals/Settings';

export const Modal = () => {

  const { status, setStatus, modal, size } = useModal();
  const controls = useAnimation();

  const onFadeIn = async () => {
    await controls.start("visible");
  }

  const onFadeOut = async () => {
    await controls.start("hidden");
    setStatus(0);
  }

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    // modal has been opened - fade in
    if (status === 1) {
      onFadeIn();
    }
    // an external component triggered modal closure - fade out
    if (status === 2) {
      onFadeOut();
    }
  }, [status]);

  if (status === 0) {
    return (<></>);
  }

  return (
    <Wrapper
      initial={{
        opacity: 0
      }}
      animate={controls}
      transition={{
        duration: 0.15,
      }}
      variants={variants}
    >
      <div className='content_wrapper'>
        <ContentWrapper size={size}>
          {modal === 'ConnectAccounts' && <ConnectAccounts />}
          {modal === 'EraPoints' && <EraPoints />}
          {modal === 'Settings' && <Settings />}
          {modal === 'ChangeController' && <ChangeController />}
        </ContentWrapper>
        <button className='close' onClick={() => { onFadeOut() }}>
        </button>
      </div>
    </Wrapper>
  )

}

export default Modal;