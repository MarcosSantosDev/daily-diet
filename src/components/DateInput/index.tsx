import React from 'react';
import { Pressable } from 'react-native';
import DateTimePicker, { AndroidNativeProps, DateTimePickerEvent }  from '@react-native-community/datetimepicker';
import { format, isDate } from 'date-fns';

import * as S from './styles';
import { Input } from '@/components/Input';

type DateInputProps = {
  label: string;
  mode: AndroidNativeProps['mode'];
};

export const DateInput = ({ label, mode = 'date' }: DateInputProps) => { 
  const [date, setDate] = React.useState<Date | null>(null);
  const [show, setShow] = React.useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;

    setShow(false);
    if(currentDate) {
      setDate(currentDate);
    }
  };
  
  const showDatepicker = () => {
    setShow(true);
  };

  const formatDateInputValue = (date: Date | null) => {
    if (date && isDate(date)) {
      if (mode === 'date') {
        return format(new Date(date), "dd/MM/yyyy");
      }

      if (mode === 'time') {
        return format(new Date(date), "HH:mm");
      }
    }

    return ''
  }

  return (
    <S.Container>
      <Pressable onPress={showDatepicker}>
        <Input
          label={label}
          editable={false}
          value={formatDateInputValue(date)}
        />
      </Pressable>
      {show && (
        <DateTimePicker
          value={date ?? new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </S.Container>
  );
};
