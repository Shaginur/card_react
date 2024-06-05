/**
 * Компонент карточка
 * @param {object} props - Свойства компонента
 * @param {string} props.details.id - ID карточки
 * @param {string} props.details.title - Название карточки
 * @param {string} props.details.category - Категория карточки (необязательный)
 * @param {string} props.details.description - Описание карточки (необязательный)
 * @param {string} [props.details.price] - Цена карточки (необязательный)
 * @param {number} [props.details.rating] - Рейтинг карточки (необязательный)
 * @param {string} props.details.imgSrc - Путь к изображению
 * @returns {JSX.Element} Элемент JSX
 */
export const Card = (props) => {
  const { id, title, category, description, price, imgSrc } = props.details;
  const { onClick } = props;

  // Обработчик клика по карточке для передачи id родителю
  const handleCardClick = () => {
    onClick(id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg mb-4"
    >
      <div className="relative">
        <img className="w-full max-h-44" src={imgSrc} alt={title} />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-600 text-sm mb-4">{category}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
