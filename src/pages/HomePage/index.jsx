import React from "react";
import PromoBlock from "../../kit/components/promo-block";
import AboutUsCard from "../../kit/components/about-us-card";
// import Logotype from './../../kit/shared/images/Diamond.png'
import styles from './style.module.css'


const HomePage = () => {
  return (
    <div className={styles['promo-block']}>
      <PromoBlock />
      <div className={styles['main-info']}>
          <AboutUsCard
              // icon={Logotype}
              title='About us' >

              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </AboutUsCard>

          <AboutUsCard title='More text'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </AboutUsCard>

          <AboutUsCard title='This one for you'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </AboutUsCard>
      </div>
    </div>
  )
}

export default HomePage