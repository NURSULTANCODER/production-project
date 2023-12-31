import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({path, element}) => (
            <Route path={path} element={(
              <div className='page-wrapper'>
                {element}
              </div>
              )} key={path} />
          ))}
        </Routes>
      </Suspense>
  );
};

export {AppRouter};