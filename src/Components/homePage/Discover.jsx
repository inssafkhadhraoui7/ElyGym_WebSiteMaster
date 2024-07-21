import PropTypes from "prop-types";
import styles from "./Discover.module.css";

const Discover = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.contentContainer}>
        <p className={styles.discoverYourPotential}>DISCOVER YOUR POTENTIAL</p>
        <p className={styles.bookYourEarlySeatToGetSu}>
          <b>BOOK YOUR EARLY SEAT TO GET SUMMER 25% DISCOUNT</b>
        </p>
        <div className={styles.joinTodayButton}>
            <button  className={styles.joinToday}>JOIN TODAY</button>
        </div>
      </div>
    </section>
  );
};

Discover.propTypes = {
  className: PropTypes.string,
};

export default Discover;
