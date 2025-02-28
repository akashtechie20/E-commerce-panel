import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import { BASE_URL } from './config/constant';

// Lazy-loaded components
const SignUp1 = lazy(() => import('./views/auth/signup/SignUp1'));
const SignIn1 = lazy(() => import('./views/auth/signin/SignIn1'));
const ResetPassword1 = lazy(() => import('./views/auth/reset-password/ResetPassword1'));
const Dashboard = lazy(() => import('./views/dashboard'));
const BasicButton = lazy(() => import('./views/ui-elements/BasicButton'));
const BasicBadges = lazy(() => import('./views/ui-elements/BasicBadges'));
const BasicBreadcrumbPagination = lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination'));
const BasicCollapse = lazy(() => import('./views/ui-elements/BasicCollapse'));
const BasicTypography = lazy(() => import('./views/ui-elements/BasicTypography'));
const BasicTooltipsPopovers = lazy(() => import('./views/ui-elements/BasicTooltipsPopovers'));
const SamplePage = lazy(() => import('./views/extra/SamplePage'));

// Auth Routes
const authRoutes = [
  { path: '/auth/signup-1', element: <SignUp1 /> },
  { path: '/auth/signin-1', element: <SignIn1 /> },
  { path: '/auth/reset-password-1', element: <ResetPassword1 /> }
];

// Admin Routes
const appRoutes = [
  { path: '/app/dashboard/analytics', element: <Dashboard /> },
  { path: '/basic/button', element: <BasicButton /> },
  { path: '/basic/badges', element: <BasicBadges /> },
  { path: '/basic/breadcrumb-pagination', element: <BasicBreadcrumbPagination /> },
  { path: '/basic/collapse', element: <BasicCollapse /> },
  { path: '/basic/typography', element: <BasicTypography /> },
  { path: '/basic/tooltip-popovers', element: <BasicTooltipsPopovers /> },
  { path: '/sample-page', element: <SamplePage /> }
];

const renderRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {/* Authentication Routes */}
      {authRoutes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}

      {/* Admin Routes Wrapped in AdminLayout */}
      <Route path="*" element={<AdminLayout />}>
        {appRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to={BASE_URL} />} />
    </Routes>
  </Suspense>
);

export default renderRoutes;
