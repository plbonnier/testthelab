const users = fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((res) => console.log("res :>> ", res));
console.log("users :>> ", users);
async function userRandom() {
  try {
    const usersRandom = await fetch("https://randomuser.me/api/");
    console.log("usersrandom :>> ", usersRandom);
  } catch (error) {
    console.log("error :>> ", error.message);
  }
}
userRandom();
