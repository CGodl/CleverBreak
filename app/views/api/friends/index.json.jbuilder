@friends.each do |friend|
  json.set! friend.id do ####Setting  
    json.partial! '/api/users/user', user: friend
  end
end


# User 1 <-> FriendTable <-> User 2