import { Tooltip } from 'antd';
import React, { CSSProperties, PropsWithChildren } from 'react';

import { stateToLabel } from 'constants/states';
import { getStateColorCssVar, StateOfUnion } from 'themes';
import { ResourceState, RunState, SlotState } from 'types';

import css from './Badge.module.scss';

export enum BadgeType {
  Default = 'Default',
  Header = 'Header',
  Id = 'Id',
  State = 'State',
}

export interface BadgeProps {
  state?: StateOfUnion;
  tooltip?: string;
  type?: BadgeType;
}

const Badge: React.FC<BadgeProps> = ({
  state = RunState.Active,
  tooltip,
  type = BadgeType.Default,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  const classes = [ css.base ];
  const style: CSSProperties = {};

  if (type === BadgeType.State) {
    classes.push(css.state);
    style.backgroundColor = getStateColorCssVar(state);
    style.color = getStateColorCssVar(state, { isOn: true });
    if (state === SlotState.Free
      || state === ResourceState.Warm
      || state === ResourceState.Potential) {
      style.color = '#234b65';
    }
    if(state === ResourceState.Potential) {
      style.border = '1px dashed #cccccc';
    }
  } else if (type === BadgeType.Id) {
    classes.push(css.id);
  } else if (type === BadgeType.Header) {
    classes.push(css.header);
  }

  const badge = (
    <span className={classes.join(' ')} style={style}>
      {props.children ? props.children : type === BadgeType.State && state && stateToLabel(state)}
    </span>
  );

  return tooltip ? <Tooltip title={tooltip}>{badge}</Tooltip> : badge;
};

export default Badge;
