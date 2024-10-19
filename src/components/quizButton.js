// src/components/QuizButton.js
import { useRouter } from 'next/router';

const QuizButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quiz'); // Navigate to the quiz page
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
      Take Our Quiz to Find Your Support Category!
    </button>
  );
};

export default QuizButton;
