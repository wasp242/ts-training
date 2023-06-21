type User = {
  id: number;
  name: string;
  age: number;
};

type Friends = [number, number];

export type UserResponse = {
  users: User[];
  friends: Friends[];
};

const userJson = JSON.stringify({
  users: [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Mary", age: 21 },
  ],
  friends: [[1, 2]],
});

const getUserFriends = (userJson: string, id: number) => {
  const { users, friends } = JSON.parse(userJson) as UserResponse;
  const friendIds = friends
    .filter((friendPair) => friendPair.includes(id))
    .flat();
  return users.filter((user) => user.id !== id && friendIds.includes(user.id));
};
console.log(getUserFriends(userJson, 1));

export default getUserFriends;
