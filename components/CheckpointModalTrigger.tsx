import { Button, Tooltip } from 'antd';
import React, { PropsWithChildren, useCallback } from 'react';

import useModalCheckpoint from 'hooks/useModal/useModalCheckpoint';
import Icon from 'shared/components/Icon/Icon';
import {
  CheckpointWorkloadExtended, ExperimentBase,
} from 'types';

interface Props {
  checkpoint: CheckpointWorkloadExtended;
  chidren?: JSX.Element
  experiment: ExperimentBase;
  title: string;
}

const CheckpointModalTrigger: React.FC<Props> = (
  {
    checkpoint,
    experiment,
    title,
    children,
  }: PropsWithChildren<Props>,
) => {
  const { modalOpen: openModalDelete } =
  useModalCheckpoint({ checkpoint: checkpoint, config: experiment.config, title: title });
  const handleModalCheckpointClick = useCallback(() => openModalDelete(), [ openModalDelete ]);

  return (
    <span onClick={() => handleModalCheckpointClick()}>
      {children !== undefined ? children :
        (
          <Tooltip title="View Checkpoint">
            <Button
              aria-label="View Checkpoint"
              icon={<Icon name="checkpoint" />}
            />
          </Tooltip>
        )
      }
    </span>
  );
};

export default CheckpointModalTrigger;
