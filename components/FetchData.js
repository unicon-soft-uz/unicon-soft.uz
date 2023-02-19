const url = `https://github.com/unicon-soft-uz/unicon-soft.uz/blob/development/data.json`;
const url2 = `https://raw.githubusercontent.com/unicon-soft-uz/unicon-soft.uz/development/data.json`;
// export async function getServerSideProps() {
//   // // Fetch data from external API
//   // const res = await fetch(url);
//   // const data = await res.json();

//   // // Pass data to the page via props
//   // return { props: { res } };
//   const res = fetch(url2)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

export default function Guyz() {
  const res = fetch(url2)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
