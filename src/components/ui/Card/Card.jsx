import styles from "./Card.module.css";

/**
 * Компонент карточка
 * @property {string} props.title - Название карточки
 * @property {string} props.category - Категория карточки
 * @property {string} props.description - Описание карточки
 * @property {string} props.price - Цена карточки
 * @property {number} props.rating - Рейтинг карточки
 * @property {string} props.imgSrc - Путь к изображению
 * @returns {JSX.Element} Элемент JSX
 */
export const Card = (props) => {
  const { title, category, description, price, rating, imgSrc } = props.details;

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={imgSrc} alt={title} />
      </div>
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_category}>{category}</p>
      <p className={styles.card_description}>{description}</p>
      <p className={styles.card_price}>{price}</p>
      <p className={styles.card_rating}>Rating: {rating}/5</p>
    </div>
  );
};
