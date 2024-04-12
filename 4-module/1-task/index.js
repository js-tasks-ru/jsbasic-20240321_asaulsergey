function makeFriendsList(friends) {
  const listFriends = document.createElement('ul');
  
  for (let friend of friends) {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName} + ${friend.lastName}`;
    listFriends.append(li);
  }
  
  return listFriends;
  }
}

