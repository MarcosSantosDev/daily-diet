import { formatPercentage } from '@/utils/formatNumber';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type StatisticPanelProps = {
  percentage: number;
}

const StatisticPanel = ({ percentage }: StatisticPanelProps) => {
  const navigation = useNavigation();

  const goToResumeOfStatisticPanel = () =>{
    navigation.navigate('MealDetails')
  }

  return (
    <S.StatisticPanel onPress={goToResumeOfStatisticPanel}>
      <S.ArrowUpRightIcon />
      <S.StatisticPanelTitle>{formatPercentage(percentage)}</S.StatisticPanelTitle>
      <S.StatisticPanelSubTitle>das refeições dentro da dieta</S.StatisticPanelSubTitle>
    </S.StatisticPanel>
  );
};

export default StatisticPanel;