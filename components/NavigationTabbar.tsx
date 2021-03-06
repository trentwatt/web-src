import { Modal } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useStore } from 'contexts/Store';
import useJupyterLabModal from 'hooks/useModal/useJupyterLabModal';
import useModalUserSettings from 'hooks/useModal/UserSettings/useModalUserSettings';
import { clusterStatusText } from 'pages/Cluster/ClusterOverview';
import { handlePath, paths } from 'routes/utils';

import Icon from '../shared/components/Icon/Icon';

import ActionSheet from './ActionSheet';
import AvatarCard from './AvatarCard';
import Link, { Props as LinkProps } from './Link';
import css from './NavigationTabbar.module.scss';

interface ToolbarItemProps extends LinkProps {
  badge?: number;
  icon: string;
  label: string;
  status?: string;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({ path, status, ...props }: ToolbarItemProps) => {
  const location = useLocation();
  const classes = [ css.toolbarItem ];
  const [ isActive, setIsActive ] = useState(false);

  if (isActive) classes.push(css.active);

  useEffect(() => setIsActive(location.pathname === path), [ location.pathname, path ]);

  return (
    <Link className={classes.join(' ')} path={path} {...props}>
      <Icon name={props.icon} size="large" />
      {status && <div className={css.status}>{status}</div>}
    </Link>
  );
};

const NavigationTabbar: React.FC = () => {
  const { auth, cluster: overview, ui, resourcePools, info } = useStore();
  const [ isShowingOverflow, setIsShowingOverflow ] = useState(false);
  const [ modal, contextHolder ] = Modal.useModal();
  const { modalOpen: openUserSettingsModal } = useModalUserSettings(modal);
  const { modalOpen: openJupyterLabModal } = useJupyterLabModal();

  const showNavigation = auth.isAuthenticated && ui.showChrome;

  const handleOverflowOpen = useCallback(() => setIsShowingOverflow(true), []);
  const handleActionSheetCancel = useCallback(() => setIsShowingOverflow(false), []);
  const handleLaunchJupyterLab = useCallback(() => {
    setIsShowingOverflow(false);
    openJupyterLabModal();
  }, [ openJupyterLabModal ]);

  const handlePathUpdate = useCallback((e, path) => {
    handlePath(e, { path });
    setIsShowingOverflow(false);
  }, []);

  if (!showNavigation) return null;

  return (
    <nav className={css.base}>
      {contextHolder}
      <div className={css.toolbar}>
        <ToolbarItem icon="dashboard" label="Dashboard" path={paths.dashboard()} />
        <ToolbarItem icon="experiment" label="Experiments" path={paths.experimentList()} />
        <ToolbarItem icon="model" label="Model Registry" path={paths.modelList()} />
        <ToolbarItem icon="tasks" label="Tasks" path={paths.taskList()} />
        <ToolbarItem
          icon="cluster"
          label="Cluster"
          path={paths.cluster()}
          status={clusterStatusText(overview, resourcePools)}
        />
        <ToolbarItem icon="overflow-vertical" label="Overflow Menu" onClick={handleOverflowOpen} />
      </div>
      <ActionSheet
        actions={[
          { render: () => <AvatarCard className={css.user} key="avatar" user={auth.user} /> },
          {
            icon: 'settings',
            label: 'Settings',
            onClick: () => openUserSettingsModal(),
          },
          {
            icon: 'user',
            label: 'Sign out',
            onClick: e => handlePathUpdate(e, paths.logout()),
          },
          {
            icon: 'jupyter-lab',
            label: 'Launch JupyterLab',
            onClick: () => handleLaunchJupyterLab(),
          },
          {
            icon: 'logs',
            label: 'Cluster Logs',
            onClick: e => handlePathUpdate(e, paths.clusterLogs()),
          },
          {
            external: true,
            icon: 'docs',
            label: 'Docs',
            path: paths.docs(),
            popout: true,
          },
          {
            external: true,
            icon: 'cloud',
            label: 'API (Beta)',
            path: paths.docs('/rest-api/'),
            popout: true,
          },
          {
            external: true,
            icon: 'pencil',
            label: 'Share Feedback',
            path: paths.submitProductFeedback(info.branding),
            popout: true,
          },
        ]}
        show={isShowingOverflow}
        onCancel={handleActionSheetCancel}
      />
    </nav>
  );
};

export default NavigationTabbar;
