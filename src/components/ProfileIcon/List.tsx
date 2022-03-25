import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { Star } from '@/components/IconButton';
import theme from '@/styles/theme';
import { useAppSelector } from '@/store/hooks';

import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface ListProps {
  id: string;
  name: string;
  address: string;
  category: string;
  score: number;
}

const List = ({ id, name, address, category, score }: ListProps) => {
  const { isUserLogin } = useAppSelector(({ user }) => user);
  const [starState, setStarState] = useState(false);

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      setStarState(!starState);
    } else {
      alert('로그인한 사용자만 사용할 수 있는 기능입니다.');
    }
  };

  return (
    <li>
      <section>
        <Link to={`/restaurants/${id}`}>
          <img src={foodImage} alt="food" />
        </Link>
        <div>
          <Link to={`/restaurants/${id}`}>
            <h3>{name}</h3>
            <span>{score}</span>
          </Link>
          <span>{`${address}-${category}`}</span>
        </div>
        <button onClick={changeStar}>
          <Star fill={theme.colors[starState ? 'orange' : 'gray1000']} />
          <FontAwesomeIcon className="xIcon" icon={faXmark} />
        </button>
      </section>
    </li>
  );
};

export default List;
