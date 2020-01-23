import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import ChineseBirthdayResult from './chineseBirthdayResult';
import BirthdayPicker, { Birthdate } from './birthdayPicker';

const ChineseBirthdayConverter: React.FC<{}> = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [westernBirthday, setWesternBirthday] = useState<Birthdate | null>(
    null
  );

  return (
    <TransitionGroup style={{ textAlign: 'center' }}>
      {westernBirthday ? (
        <ChineseBirthdayResult westernBirthday={westernBirthday} />
      ) : (
        <BirthdayPicker
          onSubmit={setWesternBirthday}
          shouldAnimate={shouldAnimate}
          setShouldAnimate={setShouldAnimate}
        />
      )}
    </TransitionGroup>
  );
};

export default ChineseBirthdayConverter;
