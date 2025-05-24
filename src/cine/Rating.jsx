import star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(null);
  return (
    <>
      {stars.map((_, index) => (
        <img key={index} src={star} alt="" />
      ))}
    </>
  );
}
