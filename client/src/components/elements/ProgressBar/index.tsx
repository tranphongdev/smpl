import { Fragment, useEffect } from 'react';
import NProgress from 'nprogress';
import './ProgressBar.css';

export interface ProgressBarProps {
  spinner?: boolean;
}

export const ProgressBar = ({ spinner = false }: ProgressBarProps) => {
  NProgress.configure({ showSpinner: spinner });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <Fragment></Fragment>;
};
