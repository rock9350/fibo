import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import data from "./data";

export default function Home() {
  return (
    <main>
      <Image
        src="/img/Rectangle 5629.jpg"
        width={500}
        height={900}
        style={{ position: "fixed", zIndex: "-1" }}
        alt="aa"
      />

      <div>
        <Image
          src="/img/Vector.png"
          className={styles["share"]}
          width={15}
          height={16}
          alt="aa"
        />

        {data.map((item) => (
          <>
            <div className={styles.brand}>
              <div className={styles["brand-log"]} id="Logo">
                <Image
                  src="/img/Ellipse 157.png"
                  width={50}
                  height={50}
                  alt="aa"
                />
              </div>
              <div className={styles["brand-name-box"]}>
                <h3 className={styles["brand-name"]}>{item.shopName}</h3>
                <h5>Food Influencer</h5>
              </div>
            </div>

            <div className={styles["item-box"]}>
              <div className={styles.stroke}>
                <Image
                  src="/img/Stroke 1.png"
                  width={13}
                  height={7}
                  alt="aaa"
                />
              </div>
              <div className={styles["item-details"]}>
                <h2>Food Centre</h2>
              </div>
              {item.itemsType.map((items) => (
                <>
                  <div className="items-type-box">
                    <div className={styles["food-type-box"]}>
                      <h2>{items.type}</h2>
                      <button>{items.countryType}</button>
                    </div>
                    {items.food.map((ite) => (
                      <div key={ite.foodName} className={styles.food}>
                        <div>
                          <Image
                            src="/img/Ellipse 28.png"
                            width={56}
                            height={56}
                            alt="aa"
                            className={styles.foodLogo}
                          />
                        </div>
                        <div className={styles.foodName}>
                          <p>{ite.foodName}</p>
                          <p className={styles.foodTime}>{ite.foodTime}</p>
                        </div>
                        <div className={styles.foodDetailsBox}>
                          <div className={styles.foodKcal}>
                            <p>{ite.foodKcal}</p>
                          </div>
                          <Image
                            src="/img/plus.png"
                            width={12}
                            height={12}
                            alt="aaa"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ))}

              <div className={styles.couponBox}>
                <h2>Meals Coupon</h2>
                <div id="offe" className={styles.offers}>
                  <div className={styles.days}>
                    <h6>27th Jan - 18th Feb</h6>
                    <div>
                      <p>UPTO </p>
                      <p>25% OFF </p>
                    </div>
                  </div>

                  <div className={styles.coupon}>
                    <p className={styles.couponOffer}>Chinese</p>
                    <h3>₹299/-</h3>
                    <p className={styles.couponOffer}>
                      22% + 30% off - Expires in 1h
                    </p>
                  </div>
                  <div className={styles.coupon}>
                    <p className={styles.couponOffer}>Chinese</p>
                    <h3>₹299/-</h3>
                    <p className={styles.couponOffer}>
                      22% + 30% off - Expires in 1h
                    </p>
                  </div>
                  <div className={styles.coupon}>
                    <p className={styles.couponOffer}>Chinese</p>
                    <h3>₹299/-</h3>
                    <p className={styles.couponOffer}>
                      22% + 30% off - Expires in 1h
                    </p>
                  </div>
                  <div className={styles.coupon}>
                    <p className={styles.couponOffer}>Chinese</p>
                    <h3>₹299/-</h3>
                    <p className={styles.couponOffer}>
                      22% + 30% off - Expires in 1h
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className={styles["order"]}>Order Now</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
