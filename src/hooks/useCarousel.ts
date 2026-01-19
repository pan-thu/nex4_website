import { useState, useEffect, useCallback } from 'react';

interface UseCarouselProps {
  totalItems: number;
  autoPlayInterval?: number;
  autoPlay?: boolean;
}

export const useCarousel = ({
  totalItems,
  autoPlayInterval = 5000,
  autoPlay = false,
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, isPaused]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToIndex,
    setIsPaused,
  };
};
