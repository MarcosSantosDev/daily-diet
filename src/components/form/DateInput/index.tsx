import React from 'react';
import { Pressable } from 'react-native';
import DateTimePicker, { AndroidNativeProps, DateTimePickerEvent }  from '@react-native-community/datetimepicker';
import { format, isDate } from 'date-fns';

import { Input } from '@/components/form/Input';

import * as S from './styles';

type DateInputProps = {
  label: string;
  mode: AndroidNativeProps['mode'];
  dateValue?: Date | null;
};

export const DateInput = ({ label, mode = 'date', dateValue = null }: DateInputProps) => { 
  const [date, setDate] = React.useState<Date | null>(dateValue);
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
