// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useApi } from 'contexts/Api';
import { useUi } from 'contexts/UI';
import { planckBnToUnit } from 'Utils';
import { usePoolsConfig } from 'contexts/Pools/PoolsConfig';
import { Wrapper } from './Wrapper';
import { NominateStatusBarProps } from '../types';

export const CreatePoolStatusBar = (props: NominateStatusBarProps) => {
  const { value } = props;

  const { network } = useApi();
  const { stats } = usePoolsConfig();
  const { isSyncing } = useUi();
  const { unit, units } = network;
  const { minCreateBond } = stats;

  const minCreateBondBase = planckBnToUnit(minCreateBond, units);
  const gtMinCreateBond = value >= minCreateBondBase;

  return (
    <Wrapper>
      <div className="bars">
        <section className={gtMinCreateBond && !isSyncing ? 'invert' : ''}>
          <h4>&nbsp;</h4>
          <div className="bar">
            <h5>0 {unit}</h5>
          </div>
        </section>
        <section className={gtMinCreateBond && !isSyncing ? 'invert' : ''}>
          <h4>
            <FontAwesomeIcon icon={faFlag as IconProp} transform="shrink-4" />
            &nbsp;Create Pool
          </h4>
          <div className="bar">
            <h5>{isSyncing ? '...' : `${minCreateBondBase} ${unit}`}</h5>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
