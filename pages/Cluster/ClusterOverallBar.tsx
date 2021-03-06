import React, { useMemo } from 'react';

import Section from 'components/Section';
import SlotAllocationBar from 'components/SlotAllocationBar';
import { useStore } from 'contexts/Store';
import Message, { MessageType } from 'shared/components/Message';
import { ShirtSize } from 'themes';
import { ResourceType } from 'types';
import { getSlotContainerStates } from 'utils/cluster';

import { maxPoolSlotCapacity } from './ClusterOverview';

export const ClusterOverallBar: React.FC = () => {

  const { agents, cluster: overview, resourcePools } = useStore();

  const cudaSlotStates = useMemo(() => {
    return getSlotContainerStates(agents || [], ResourceType.CUDA);
  }, [ agents ]);

  const rocmSlotStates = useMemo(() => {
    return getSlotContainerStates(agents || [], ResourceType.ROCM);
  }, [ agents ]);

  const cpuSlotStates = useMemo(() => {
    return getSlotContainerStates(agents || [], ResourceType.CPU);
  }, [ agents ]);

  const [ cudaTotalSlots, rocmTotalSlots ] = useMemo(() => {
    return resourcePools.reduce((acc, pool) => {
      let index;
      switch (pool.slotType) {
        case ResourceType.CUDA:
          index = 0;
          break;
        case ResourceType.ROCM:
          index = 1;
          break;
        default:
          index = undefined;
      }
      if (index === undefined) return acc;
      acc[index] += maxPoolSlotCapacity(pool);
      return acc;
    }, [ 0, 0 ]);
  }, [ resourcePools ]);

  return (
    <Section hideTitle title="Overall Allocation">
      {cudaTotalSlots + rocmTotalSlots + overview.CPU.total === 0 ? (
        <Message title="No connected agents." type={MessageType.Empty} />
      ) : null }
      {cudaTotalSlots > 0 && (
        <SlotAllocationBar
          resourceStates={cudaSlotStates}
          showLegends
          size={ShirtSize.large}
          title={`Compute (${ResourceType.CUDA})`}
          totalSlots={cudaTotalSlots}
        />
      )}
      {rocmTotalSlots > 0 && (
        <SlotAllocationBar
          resourceStates={rocmSlotStates}
          showLegends
          size={ShirtSize.large}
          title={`Compute (${ResourceType.ROCM})`}
          totalSlots={rocmTotalSlots}
        />
      )}
      {overview.CPU.total > 0 && (
        <SlotAllocationBar
          resourceStates={cpuSlotStates}
          showLegends
          size={ShirtSize.large}
          title={`Compute (${ResourceType.CPU})`}
          totalSlots={overview.CPU.total}
        />
      )}
    </Section>
  );
};
