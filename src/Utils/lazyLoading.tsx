import { lazy, Suspense, ComponentType, ReactNode, useState, useEffect, useRef } from 'react';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Full screen loading component
const FullScreenLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Higher-order component for lazy loading with suspense
export function withSuspense<T extends {}>(
  Component: ComponentType<T>,
  fallback: ReactNode = <LoadingSpinner />
) {
  return function SuspenseWrapper(props: T) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Lazy load pages
export const LazyHomepage = lazy(() => import('../Pages/Public/Homepage'));
export const LazyEvents = lazy(() => import('../Pages/Public/Events'));
export const LazyJoin = lazy(() => import('../Pages/Public/join'));
export const LazyLogin = lazy(() => import('../Pages/Public/login'));
export const LazyDashboard = lazy(() => import('../Pages/Private/Dashboard'));

// Wrapped components with suspense
export const Homepage = withSuspense(LazyHomepage, <FullScreenLoading />);
export const Events = withSuspense(LazyEvents, <FullScreenLoading />);
export const Join = withSuspense(LazyJoin, <FullScreenLoading />);
export const Login = withSuspense(LazyLogin, <FullScreenLoading />);
export const Dashboard = withSuspense(LazyDashboard, <FullScreenLoading />);

// Hook for intersection observer (lazy loading images)
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}

// Lazy Image Component
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}> = ({ src, alt, className = '', placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isInView = useIntersectionObserver(imgRef, { threshold: 0.1 });

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, isLoaded]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      loading="lazy"
    />
  );
};