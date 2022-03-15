import { MatjibListTags, SurroundPopluars } from '@/components';
import { Title } from '@/components/style';

const MatjipList = () => {
  return (
    <div>
      <Title>믿고 보는 맛집 리스트</Title>
      <MatjibListTags />
      <SurroundPopluars />
    </div>
  );
};

export default MatjipList;