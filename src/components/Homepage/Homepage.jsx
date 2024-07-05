import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div className={styles.homepage}>
        <h1>Welcome to the General Store!</h1>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
imgs/camera/camera_lt5iwp_c_scale,w_200.jpg 200w,
imgs/camera/camera_lt5iwp_c_scale,w_639.jpg 639w,
imgs/camera/camera_lt5iwp_c_scale,w_940.jpg 940w,
imgs/camera/camera_lt5iwp_c_scale,w_1164.jpg 1164w,
imgs/camera/camera_lt5iwp_c_scale,w_1350.jpg 1350w,
imgs/camera/camera_lt5iwp_c_scale,w_1363.jpg 1363w,
imgs/camera/camera_lt5iwp_c_scale,w_1400.jpg 1400w"
          src="imgs/camera/camera_lt5iwp_c_scale,w_1400.jpg"
          alt="photo of a camera"
        />
        <h2>Here you can find a variety of different items.</h2>
        <p>Shop for: </p>
        <ul>
          <li>
            <h2>Electronics </h2>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
imgs/electronics/electronics_ajrxfv_c_scale,w_200.jpg 200w,
imgs/electronics/electronics_ajrxfv_c_scale,w_473.jpg 473w,
imgs/electronics/electronics_ajrxfv_c_scale,w_672.jpg 672w,
imgs/electronics/electronics_ajrxfv_c_scale,w_835.jpg 835w,
imgs/electronics/electronics_ajrxfv_c_scale,w_975.jpg 975w,
imgs/electronics/electronics_ajrxfv_c_scale,w_1127.jpg 1127w,
imgs/electronics/electronics_ajrxfv_c_scale,w_1257.jpg 1257w,
imgs/electronics/electronics_ajrxfv_c_scale,w_1374.jpg 1374w,
imgs/electronics/electronics_ajrxfv_c_scale,w_1396.jpg 1396w,
imgs/electronics/electronics_ajrxfv_c_scale,w_1400.jpg 1400w"
              src="imgs/electronics/electronics_ajrxfv_c_scale,w_1400.jpg"
              alt="photo of a motherboard"
            />
          </li>
          <li>
            <h2>Clothing </h2>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
imgs/clothing/clothing_yfndxl_c_scale,w_200.jpg 200w,
imgs/clothing/clothing_yfndxl_c_scale,w_371.jpg 371w,
imgs/clothing/clothing_yfndxl_c_scale,w_506.jpg 506w,
imgs/clothing/clothing_yfndxl_c_scale,w_652.jpg 652w,
imgs/clothing/clothing_yfndxl_c_scale,w_768.jpg 768w,
imgs/clothing/clothing_yfndxl_c_scale,w_879.jpg 879w,
imgs/clothing/clothing_yfndxl_c_scale,w_885.jpg 885w,
imgs/clothing/clothing_yfndxl_c_scale,w_1168.jpg 1168w,
imgs/clothing/clothing_yfndxl_c_scale,w_1189.jpg 1189w,
imgs/clothing/clothing_yfndxl_c_scale,w_1275.jpg 1275w,
imgs/clothing/clothing_yfndxl_c_scale,w_1372.jpg 1372w,
imgs/clothing/clothing_yfndxl_c_scale,w_1400.jpg 1400w"
              src="imgs/clothing/clothing_yfndxl_c_scale,w_1400.jpg"
              alt="photo of piles of clothes"
            />
          </li>
          <li>
            <h2>Jewlery </h2>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
imgs/jewlery/jewlery_pl0pvh_c_scale,w_200.jpg 200w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_501.jpg 501w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_723.jpg 723w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_899.jpg 899w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_1060.jpg 1060w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_1238.jpg 1238w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_1387.jpg 1387w,
imgs/jewlery/jewlery_pl0pvh_c_scale,w_1400.jpg 1400w"
              src="imgs/jewlery/jewlery_pl0pvh_c_scale,w_1400.jpg"
              alt="photo of jewlery"
            />
          </li>
        </ul>
        <h3>And much more!</h3>
      </div>
      <footer className={styles.footer}>
        Photos by{" "}
        <a href="https://unsplash.com/@jakobowens1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jakob Owens,{" "}
        </a>
        <a href="https://unsplash.com/@alexkixa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Alexandre Debiève,{" "}
        </a>
        <a href="https://unsplash.com/@mohammadsalman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Md Salman,
        </a>
        <p>and</p>
        <a href="https://unsplash.com/@brianwangenheim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Brian Wangenheim
        </a>
      </footer>
    </>
  );
}

export default Homepage;
