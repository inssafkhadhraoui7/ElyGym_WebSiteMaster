import PropTypes from "prop-types";
import styles from "./AboutUS2.module.css";
import FeatureCard2 from "./FeatureCard2";

const AboutUS2 = ({ className = "" }) => {
  const features = [
    { icon: 'muscle.png', title: 'PROFESSIONAL TRAINER' },
    { icon: 'health.png', title: 'WEIGHT LIFTING' },
    { icon: 'fitness.png', title: 'MODERN EQUIPMENT' },
    { icon: 'protect.png', title: 'YUNIQUE TO YOUR NEEDS' },
    { icon: 'pay.png', title: 'ONLINE PAYMENT' },
    { icon: 'hand.png', title: 'HELPING PEOPLE' }
  ];
  return (
    <section className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsHeader}>
          <h2 className={styles.aboutUs}>ABOUT US</h2>
          <div className={styles.dividerWrapper}>
            <div className={styles.divider} />
          </div>
        </div>
        <div className={styles.teamContainerParent}>
          <div className={styles.teamContainer}>
            <div className={styles.teamImageContainer}>
              <img
                className={styles.team41Icon}
                loading="lazy"
                alt=""
                src="/team4-1@2x.png"
              />
              <img
                className={styles.team31Icon}
                loading="lazy"
                alt=""
                src="/team3-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.teamDescriptionContainer}>
            <div className={styles.elyGymHaving10Container}>
              <p className={styles.elyGym}>
                <b>
                  <span>{`ELY `}</span>
                  <span className={styles.gym}>GYM</span>
                </b>
              </p>
              <p className={styles.having10YearsOfExperience}>
                <span>
                  <b>HAVING 10 YEARS OF EXPERIENCE IN FITNESS</b>
                </span>
              </p>
              <p className={styles.loremIpsumDolorSitAmetCo}>
                <span>
                  <span className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    Theme natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Aliquam lorem ante, dapibus in.
                  </span>
                </span>
              </p>
            </div>
              <div className={styles.component}>
                <button className={styles.contactUsButton}>
                  CONTACT US
                </button>
              </div>
          </div>
        </div>
 
         <div className={styles.titleUnderline} />
            <h2 className={styles.sectionTitle}>WHY CHOSE US</h2>
             <p className={styles.sectionDescription}>
              We offer more than 35 group exercis, aerobic classes each week.
                 </p>
                 <div className={styles.featuresContainer}>
            <div className={styles.featureGrid}>
                 {features.map((feature, index) => (
                <FeatureCard2 key={index} icon={feature.icon} title={feature.title} />
            ))}
              </div>
              </div>
      </div>
    </section>
  );
};

AboutUS2.propTypes = {
  className: PropTypes.string,
};

export default AboutUS2;
