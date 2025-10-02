'use client';

import { useMemo, useState } from 'react';
import QuizCard from './quiz-card';
import { QUESTIONS } from '../constants';
import { Button } from '@/shared/components/ui/button';

const passingRate = 0.7;

const QuizSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const currentQuestion = useMemo(() => {
    return QUESTIONS[currentIndex];
  }, [currentIndex]);

  const isPassed = useMemo(() => {
    const passingScore = Math.ceil(QUESTIONS.length * passingRate);
    return score >= passingScore;
  }, [score]);

  return (
    <section className="flex justify-center items-center min-h-screen">
      {currentIndex < QUESTIONS.length ? (
        <div className="bg-violet-950/80 rounded-3xl h-fit w-full sm:max-w-3xl overflow-hidden">
          <div className="text-white font-sans text-lg p-4">
            Questions {currentIndex + 1}/{QUESTIONS.length}
          </div>

          {currentQuestion || currentIndex < QUESTIONS.length ? (
            <QuizCard
              data={currentQuestion}
              isLastQuestion={currentIndex === QUESTIONS.length - 1}
              onSelectAnswer={(value) => {
                if (currentQuestion.answer === value) {
                  setScore((prev) => (prev += 1));
                }

                if (currentIndex <= QUESTIONS.length) {
                  setCurrentIndex((prev) => (prev += 1));
                }
              }}
            />
          ) : (
            'completed'
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-2">
            <div className="text-6xl text-center text-white">Your Score</div>
            <div className="text-6xl text-center text-white">
              {score}/{QUESTIONS.length}
            </div>
          </div>
          <div>
            <div className="text-4xl font-sans font-medium text-white text-center">
              {isPassed ? 'Congratulation' : 'Keep Trying'}
            </div>
            <div className="text-xl font-sans text-white text-center">
              {isPassed
                ? 'Great job, You Did it'
                : 'Don’t worry, You’ll get it next time.'}
            </div>
          </div>

          <Button
            type="button"
            onClick={() => {
              setScore(0);
              setCurrentIndex(0);
            }}
          >
            Try again
          </Button>
        </div>
      )}
    </section>
  );
};

export default QuizSection;
