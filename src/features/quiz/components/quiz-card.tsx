'use client';

import { Label } from '@/shared/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';
import { cn } from '@/shared/lib/utils';
import React, { useState } from 'react';
import type { Quiz } from '../types';
import { Button } from '@/shared/components/ui/button';

export interface QuizCardProps {
  data: Quiz;
  onSelectAnswer: (value: string) => void;
  isLastQuestion?: boolean;
}

const QuizCard = ({
  data,
  onSelectAnswer,
  isLastQuestion = false,
}: QuizCardProps) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="p-4 rounded-3xl bg-white">
      <p className="text-lg font-medium font-sans">{data.question}</p>

      <RadioGroup
        value={selected}
        onValueChange={(value) => setSelected(value)}
        className="mt-4"
      >
        {data.choices.map((opt, idx) => (
          <div
            key={opt.value + idx}
            className={cn(
              'flex items-center gap-2 px-3 border rounded-3xl',
              selected === opt.value &&
                'text-green-500 bg-green-50 border-green-500'
            )}
          >
            <Label htmlFor={opt.value} className="flex flex-1 py-3">
              {opt.label}
            </Label>
            <RadioGroupItem value={opt.value} id={opt.value} />
          </div>
        ))}
      </RadioGroup>

      <Button
        type="button"
        onClick={() => {
          onSelectAnswer(selected);
          setSelected('');
        }}
        className="w-full mt-6 rounded-3xl"
      >
        {isLastQuestion ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
};

export default QuizCard;
