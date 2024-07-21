import PropTypes from "prop-types";
import styles from "./FeatureCard2.module.css"; // Ensure this matches the CSS file name

const FeatureCard2 = ({ icon, title }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} alt={title} src={icon} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

FeatureCard2.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeatureCard2;
